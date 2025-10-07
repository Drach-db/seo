import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';

const SPREADSHEET_ID = '1RWKrSegxAgKLjcZ__VmH11tGJSaidQahusH4np3MPD0';
const CREDENTIALS_PATH = path.join(process.cwd(), 'google-credentials.json');

export interface PageData {
  page_id: number;
  page_name: string;
  page_type: string;
  json_ld: string;
  mcp: string;
  title: string;
  meta_description: string;
}

export interface ScreenData {
  page_id: number;
  screen_id: number;
  page_name: string;
  page_theme: string;
  screen_type: string;
  artifact: string;
  version_artifact: string;
  body: string;
}

/**
 * Читает данные из Google Sheets
 */
export async function readGoogleSheets() {
  // Читаем credentials
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf-8'));

  // Авторизация через Service Account
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  // Читаем лист "page"
  const pageResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'page!A:G', // Столбцы A-G
  });

  // Читаем лист "screen"
  const screenResponse = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'screen!A:H', // Столбцы A-H
  });

  const pageRows = pageResponse.data.values || [];
  const screenRows = screenResponse.data.values || [];

  // Парсим данные (пропускаем первую строку - заголовки)
  const pages: PageData[] = pageRows.slice(1).map((row) => ({
    page_id: parseInt(row[0] || '0'),
    page_name: row[1] || '',
    page_type: row[2] || '',
    json_ld: row[3] || '',
    mcp: row[4] || '',
    title: row[5] || '',
    meta_description: row[6] || '',
  }));

  const screens: ScreenData[] = screenRows.slice(1).map((row) => ({
    page_id: parseInt(row[0] || '0'),
    screen_id: parseInt(row[1] || '0'),
    page_name: row[2] || '',
    page_theme: row[3] || '',
    screen_type: row[4] || '',
    artifact: row[5] || '',
    version_artifact: row[6] || '',
    body: row[7] || '',
  }));

  return { pages, screens };
}

/**
 * Группирует screens по page_id
 */
export function groupScreensByPage(screens: ScreenData[]) {
  const grouped: Record<number, ScreenData[]> = {};

  for (const screen of screens) {
    if (!grouped[screen.page_id]) {
      grouped[screen.page_id] = [];
    }
    grouped[screen.page_id].push(screen);
  }

  // Сортируем по screen_id внутри каждой группы
  for (const pageId in grouped) {
    grouped[pageId].sort((a, b) => a.screen_id - b.screen_id);
  }

  return grouped;
}
