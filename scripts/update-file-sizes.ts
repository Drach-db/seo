import { readGoogleSheets } from './lib/sheets-reader';
import { updateFileSizesInSheets } from './lib/update-file-sizes';

async function main() {
  try {
    console.log('📖 Чтение данных из Google Sheets...');
    const { pages } = await readGoogleSheets();

    await updateFileSizesInSheets(pages);

    console.log('\n✅ Готово!');
  } catch (error) {
    console.error('❌ Ошибка:', error);
    process.exit(1);
  }
}

main();
