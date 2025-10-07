import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import { PageData } from './sheets-reader';

const SPREADSHEET_ID = '1RWKrSegxAgKLjcZ__VmH11tGJSaidQahusH4np3MPD0';
const CREDENTIALS_PATH = path.join(process.cwd(), 'google-credentials.json');

/**
 * Форматирует размер файла в человекочитаемый формат
 */
function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/**
 * Получает размер HTML файла для страницы
 */
function getHtmlFileSize(pageName: string): string | null {
  // Next.js с output:'export' генерирует файлы как /seo-pages/page-name.html
  const htmlPath = path.join(process.cwd(), 'out', 'seo-pages', `${pageName}.html`);

  if (!fs.existsSync(htmlPath)) {
    console.warn(`⚠️  HTML файл не найден: ${htmlPath}`);
    return null;
  }

  const stats = fs.statSync(htmlPath);
  return formatFileSize(stats.size);
}

/**
 * Обновляет размеры файлов в Google Sheets
 */
export async function updateFileSizesInSheets(pages: PageData[]) {
  console.log('\n📊 Обновление размеров файлов в Google Sheets...');

  // Читаем credentials
  let credentials;
  if (process.env.GOOGLE_CREDENTIALS) {
    credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
  } else if (fs.existsSync(CREDENTIALS_PATH)) {
    credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf-8'));
  } else {
    throw new Error('Google credentials not found');
  }

  // Авторизация
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  // Собираем данные для обновления
  const updates: Array<{ range: string; values: string[][] }> = [];

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const fileSize = getHtmlFileSize(page.page_name);

    if (fileSize) {
      const rowNumber = i + 2; // +2 потому что: +1 для заголовка, +1 для индекса с 1
      updates.push({
        range: `page!H${rowNumber}`, // Столбец H = file_size
        values: [[fileSize]],
      });
      console.log(`  ✅ ${page.page_name}: ${fileSize}`);
    }
  }

  // Batch update всех размеров
  if (updates.length > 0) {
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        valueInputOption: 'RAW',
        data: updates,
      },
    });
    console.log(`\n✅ Обновлено ${updates.length} размеров файлов в Google Sheets`);
  } else {
    console.log('\n⚠️  Нет данных для обновления');
  }
}
