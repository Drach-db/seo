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
  // Собираем импорты компонентов
  const componentImports = new Set<string>();
  const componentUsages: string[] = [];

  for (const screen of screens) {
    if (!screen.artifact) {
      // Если нет артефакта, просто вставляем HTML
      if (screen.body) {
        componentUsages.push(`  <div dangerouslySetInnerHTML={{ __html: \`${escapeBackticks(screen.body)}\` }} />`);
      }
      continue;
    }

    // Добавляем импорт компонента
    const componentName = artifactToComponentName(screen.artifact);
    componentImports.add(componentName);

    // Парсим data-атрибуты из body
    const rawAttrs = parseDataAttributes(screen.body);

    // Адаптируем к нужной структуре пропсов
    const props = adaptProps(screen.artifact, rawAttrs);

    // Генерируем JSX для компонента
    const propsString = generatePropsString(props);
    componentUsages.push(`  <${componentName} ${propsString} />`);
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
