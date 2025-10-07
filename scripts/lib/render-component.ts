import React from 'react';
import { renderToString } from 'react-dom/server';
import { getComponent } from '@/config/component-mapping';
import { parseDataAttributes } from './parse-attributes';

/**
 * Рендерит React компонент в HTML строку на основе artifact и body
 *
 * @param artifactName - название артефакта из таблицы (например, "article_header")
 * @param bodyHtml - HTML из колонки body с data-атрибутами
 * @returns HTML строка или null если компонент не найден
 */
export function renderComponent(
  artifactName: string,
  bodyHtml: string
): string | null {
  // Получаем компонент по названию
  const Component = getComponent(artifactName);
  if (!Component) {
    console.warn(`Компонент "${artifactName}" не найден, используем body как есть`);
    return bodyHtml; // Если компонента нет, просто вернём сам HTML
  }

  // Парсим data-атрибуты в пропсы
  const props = parseDataAttributes(bodyHtml);

  // Рендерим компонент в HTML
  try {
    const html = renderToString(React.createElement(Component, props));
    return html;
  } catch (error) {
    console.error(`Ошибка рендеринга компонента "${artifactName}":`, error);
    return bodyHtml; // Фоллбэк на исходный HTML
  }
}
