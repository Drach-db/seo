import * as fs from 'fs';
import * as path from 'path';
import { readGoogleSheets, groupScreensByPage } from './lib/sheets-reader';
import { generateNextJsPage } from './lib/generate-nextjs-page';
import { generateLayout } from './lib/generate-layout';

const PAGES_DIR = path.join(process.cwd(), 'src', 'app', 'seo-pages');

/**
 * Основная функция генерации страниц
 */
async function generatePages() {
  console.log('🚀 Начинаем генерацию Next.js страниц из Google Sheets...\n');

  // Читаем данные из таблицы
  const { pages, screens } = await readGoogleSheets();
  console.log(`✅ Прочитано ${pages.length} страниц и ${screens.length} экранов\n`);

  // Группируем экраны по страницам
  const screensByPage = groupScreensByPage(screens);

  // Генерируем каждую страницу
  for (const page of pages) {
    const pageScreens = screensByPage[page.page_id] || [];

    if (pageScreens.length === 0) {
      console.warn(`⚠️  Страница "${page.page_name}" (ID: ${page.page_id}) не имеет экранов, пропускаем`);
      continue;
    }

    console.log(`📄 Генерируем страницу: ${page.page_name} (${pageScreens.length} экранов)`);

    // Генерируем код Next.js страницы
    const pageCode = generateNextJsPage(page, pageScreens);

    // Берём page_name из первого экрана (или используем page.page_name как фолбэк)
    const pageName = pageScreens[0].page_name || page.page_name;
    const pageDir = path.join(PAGES_DIR, pageName);
    const pageFile = path.join(pageDir, 'page.tsx');

    // Создаём директорию страницы
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    // Сохраняем page.tsx
    fs.writeFileSync(pageFile, pageCode, 'utf-8');
    console.log(`   ✅ Сохранено: ${pageFile}`);

    // Генерируем layout.tsx с Header и Footer
    const layoutCode = generateLayout();
    const layoutFile = path.join(pageDir, 'layout.tsx');
    fs.writeFileSync(layoutFile, layoutCode, 'utf-8');
    console.log(`   ✅ Сохранено: ${layoutFile}`);

    // Показываем какие компоненты использованы
    for (const screen of pageScreens) {
      console.log(`   └─ Экран ${screen.screen_id}: ${screen.artifact || 'HTML'}`);
    }
    console.log('');
  }

  console.log(`\n🎉 Готово! Сгенерировано ${pages.length} страниц в папке: ${PAGES_DIR}`);
  console.log(`\n▶️  Следующий шаг: запусти "npm run build" чтобы Next.js сгенерировал статические HTML файлы`);
}

// Запускаем
generatePages().catch((error) => {
  console.error('❌ Ошибка генерации:', error);
  process.exit(1);
});
