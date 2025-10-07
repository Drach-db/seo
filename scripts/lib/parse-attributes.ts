import { load } from 'cheerio';

/**
 * Парсит data-атрибуты из HTML строки
 *
 * Пример:
 * <div data-title="Hello" data-tags="SEO,Marketing" data-read-time="5 мин">
 *
 * Вернёт:
 * { title: "Hello", tags: ["SEO", "Marketing"], readTime: "5 мин" }
 */
export function parseDataAttributes(html: string): Record<string, any> {
  const $ = load(html);
  const attributes: Record<string, any> = {};

  // Ищем первый div (cheerio оборачивает в html/body)
  const div = $('div').first();
  if (!div || div.length === 0) return attributes;

  const el = div.get(0);
  if (!el || !el.attribs) return attributes;

  for (const [key, value] of Object.entries(el.attribs)) {
    if (key.startsWith('data-')) {
      // Конвертируем data-author-name → authorName
      const propName = key
        .replace('data-', '')
        .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

      // Парсим значения с запятыми как массивы
      if (value && value.includes(',')) {
        attributes[propName] = value.split(',').map((v) => v.trim());
      } else {
        attributes[propName] = value;
      }
    }
  }

  return attributes;
}

/**
 * Удаляет data-атрибуты из HTML, оставляя чистый контент
 */
export function stripDataAttributes(html: string): string {
  const $ = load(html);

  $('*').each((_, el) => {
    const $el = $(el);
    const attrs = $el.attr();

    if (attrs) {
      for (const key of Object.keys(attrs)) {
        if (key.startsWith('data-')) {
          $el.removeAttr(key);
        }
      }
    }
  });

  return $.html();
}
