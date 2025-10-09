import { ScreenData, PageData } from './sheets-reader';
import { parseDataAttributes } from './parse-attributes';
import { adaptProps } from './props-adapter';

/**
 * Генерирует содержимое Next.js page.tsx файла
 */
export function generateNextJsPage(
  page: PageData,
  screens: ScreenData[]
): string {
  // Группируем screens по screen_id
  const screenGroups = groupByScreenId(screens);

  // Собираем импорты компонентов
  const componentImports = new Set<string>();
  componentImports.add('DecorativeBackground'); // Всегда добавляем DecorativeBackground

  const componentUsages: string[] = [];

  for (const group of screenGroups) {
    // Если в группе только article_header - рендерим без DecorativeBackground
    const hasOnlyArticleHeader = group.every(s => s.artifact === 'article_header');

    if (hasOnlyArticleHeader) {
      // Рендерим article_header без фона
      for (const screen of group) {
        const componentName = artifactToComponentName(screen.artifact);
        componentImports.add(componentName);
        const escapedHtml = escapeBackticks(screen.body);
        componentUsages.push(`  <${componentName} rawHtml={\`${escapedHtml}\`} />`);
      }
    } else {
      // Группа с другими компонентами - оборачиваем в DecorativeBackground
      const groupComponents: string[] = [];

      for (const screen of group) {
        if (!screen.artifact) {
          if (screen.body) {
            groupComponents.push(`    <div dangerouslySetInnerHTML={{ __html: \`${escapeBackticks(screen.body)}\` }} />`);
          }
          continue;
        }

        const componentName = artifactToComponentName(screen.artifact);
        componentImports.add(componentName);
        const escapedHtml = escapeBackticks(screen.body);
        groupComponents.push(`    <${componentName} rawHtml={\`${escapedHtml}\`} />`);
      }

      // Оборачиваем группу в DecorativeBackground
      componentUsages.push(`  <DecorativeBackground className="py-16 md:py-20 lg:py-24">`);
      componentUsages.push(...groupComponents);
      componentUsages.push(`  </DecorativeBackground>`);
    }
  }

  // Генерируем импорты
  const imports = Array.from(componentImports)
    .map(name => {
      const fileName = componentNameToFileName(name);
      return `import { ${name} } from "@/components/ui/${fileName}";`;
    })
    .join('\n');

  // Генерируем Metadata
  const metadata = generateMetadata(page);

  // Собираем финальный код страницы
  return `${imports}
import { Metadata } from "next";

export const metadata: Metadata = ${metadata};

export default function Page() {
  return (
    <>
${componentUsages.join('\n')}
    </>
  );
}
`;
}

/**
 * Группирует screens по screen_id
 */
function groupByScreenId(screens: ScreenData[]): ScreenData[][] {
  const groups: Map<number, ScreenData[]> = new Map();

  for (const screen of screens) {
    const screenId = screen.screen_id;
    if (!groups.has(screenId)) {
      groups.set(screenId, []);
    }
    groups.get(screenId)!.push(screen);
  }

  // Возвращаем массив групп, отсортированный по screen_id
  return Array.from(groups.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([_, screens]) => screens);
}

/**
 * Преобразует artifact название в имя компонента
 * article_header -> ArticleHeader
 */
function artifactToComponentName(artifact: string): string {
  return artifact
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Преобразует имя компонента в имя файла
 * ArticleHeader -> article-header
 */
function componentNameToFileName(componentName: string): string {
  return componentName
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .slice(1);
}

/**
 * Генерирует строку с пропсами для JSX
 */
function generatePropsString(props: Record<string, any>): string {
  const parts: string[] = [];

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null) continue;

    if (typeof value === 'string') {
      parts.push(`${key}="${escapeQuotes(value)}"`);
    } else if (typeof value === 'boolean') {
      if (value) {
        parts.push(key);
      }
    } else if (typeof value === 'object') {
      const jsonStr = JSON.stringify(value).replace(/"/g, '\\"');
      parts.push(`${key}={JSON.parse("${jsonStr}")}`);
    } else {
      parts.push(`${key}={${JSON.stringify(value)}}`);
    }
  }

  return parts.join(' ');
}

/**
 * Генерирует Metadata объект
 */
function generateMetadata(page: PageData): string {
  const metadata: any = {
    title: page.title || 'Без заголовка',
    description: page.meta_description || '',
  };

  return JSON.stringify(metadata, null, 2);
}

/**
 * Экранирует кавычки в строке
 */
function escapeQuotes(str: string): string {
  return str.replace(/"/g, '\\"');
}

/**
 * Экранирует обратные кавычки в строке
 */
function escapeBackticks(str: string): string {
  return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}
