import * as fs from 'fs';
import * as path from 'path';
import { load } from 'cheerio';

/**
 * Форматирует размер файла в человекочитаемый формат
 */
function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/**
 * Метрики страницы
 */
export interface PageMetrics {
  page_size: string;
  html_size: string;
  css_size: string;
  java_script_bundle_size: string;
  image_size: string;
}

/**
 * Вычисляет метрики для страницы
 */
export function calculatePageMetrics(pageName: string): PageMetrics | null {
  const htmlPath = path.join(process.cwd(), 'out', 'blog', `${pageName}.html`);

  if (!fs.existsSync(htmlPath)) {
    console.warn(`⚠️  HTML файл не найден: ${htmlPath}`);
    return null;
  }

  // Размер HTML файла
  const htmlStats = fs.statSync(htmlPath);
  const htmlSize = htmlStats.size;

  // Читаем HTML для анализа
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  const $ = load(htmlContent);

  // Размер inline CSS (в <style> тегах)
  let inlineCssSize = 0;
  $('style').each((_, el) => {
    inlineCssSize += $(el).html()?.length || 0;
  });

  // Размер внешних CSS файлов
  let externalCssSize = 0;
  const cssLinks = $('link[rel="stylesheet"]');
  cssLinks.each((_, el) => {
    const href = $(el).attr('href');
    if (href && href.startsWith('/_next/')) {
      const cssPath = path.join(process.cwd(), 'out', href);
      if (fs.existsSync(cssPath)) {
        externalCssSize += fs.statSync(cssPath).size;
      }
    }
  });

  const totalCssSize = inlineCssSize + externalCssSize;

  // Размер inline JS (в <script> тегах без src)
  let inlineJsSize = 0;
  $('script').each((_, el) => {
    const src = $(el).attr('src');
    if (!src) {
      // Inline script
      inlineJsSize += $(el).html()?.length || 0;
    }
  });

  // Размер внешних JS файлов
  let externalJsSize = 0;
  const scriptTags = $('script[src]');
  scriptTags.each((_, el) => {
    const src = $(el).attr('src');
    if (src && src.startsWith('/_next/')) {
      const jsPath = path.join(process.cwd(), 'out', src);
      if (fs.existsSync(jsPath)) {
        externalJsSize += fs.statSync(jsPath).size;
      }
    }
  });

  const totalJsSize = inlineJsSize + externalJsSize;

  // Размер изображений
  let imageSize = 0;
  const images = $('img[src]');
  images.each((_, el) => {
    const src = $(el).attr('src');
    if (src) {
      let imagePath: string;
      if (src.startsWith('/')) {
        // Абсолютный путь
        imagePath = path.join(process.cwd(), 'out', src);
      } else if (src.startsWith('http')) {
        // Внешняя ссылка - пропускаем
        return;
      } else {
        // Относительный путь
        imagePath = path.join(process.cwd(), 'out', 'seo-pages', src);
      }

      if (fs.existsSync(imagePath)) {
        imageSize += fs.statSync(imagePath).size;
      }
    }
  });

  // Общий размер страницы = HTML + CSS + JS + Images
  const totalPageSize = htmlSize + totalCssSize + totalJsSize + imageSize;

  return {
    page_size: formatFileSize(totalPageSize),
    html_size: formatFileSize(htmlSize),
    css_size: formatFileSize(totalCssSize),
    java_script_bundle_size: formatFileSize(totalJsSize),
    image_size: formatFileSize(imageSize),
  };
}
