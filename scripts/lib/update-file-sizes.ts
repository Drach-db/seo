import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import { PageData } from './sheets-reader';
import { calculatePageMetrics } from './calculate-page-metrics';

const SPREADSHEET_ID = '1RWKrSegxAgKLjcZ__VmH11tGJSaidQahusH4np3MPD0';
const CREDENTIALS_PATH = path.join(process.cwd(), 'google-credentials.json');

/**
 * Обновляет метрики страниц в Google Sheets
 */
export async function updateFileSizesInSheets(pages: PageData[]) {
  console.log('\n📊 Обновление метрик страниц в Google Sheets...');

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
    const metrics = calculatePageMetrics(page.page_name);

    if (metrics) {
      const rowNumber = i + 2; // +2: +1 для заголовка, +1 для индекса с 1

      // Обновляем все метрики одной строкой
      updates.push({
        range: `page!H${rowNumber}:L${rowNumber}`, // Столбцы H-L
        values: [[
          metrics.page_size,
          metrics.html_size,
          metrics.css_size,
          metrics.java_script_bundle_size,
          metrics.image_size,
        ]],
      });

      console.log(`  ✅ ${page.page_name}:`);
      console.log(`     Total: ${metrics.page_size}`);
      console.log(`     HTML: ${metrics.html_size} | CSS: ${metrics.css_size} | JS: ${metrics.java_script_bundle_size} | Images: ${metrics.image_size}`);
    }
  }

  // Batch update всех метрик
  if (updates.length > 0) {
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        valueInputOption: 'RAW',
        data: updates,
      },
    });
    console.log(`\n✅ Обновлено метрик для ${updates.length} страниц в Google Sheets`);
  } else {
    console.log('\n⚠️  Нет данных для обновления');
  }
}
