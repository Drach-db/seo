import React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface TextBlockProps {
  rawHtml: string
  className?: string
}

/**
 * TextBlock - Notion-подобный компонент для рендеринга размеченного текста
 *
 * Поддерживаемые теги:
 * - h1, h2, h3 - заголовки
 * - **bold** - жирный текст
 * - *italic* - курсив
 * - `code` - инлайн код
 * - [text](url) - ссылки
 * - ~~strikethrough~~ - зачеркнутый
 * - - bulleted list - маркированный список
 * - 1. numbered list - нумерованный список
 * - > quote - цитата
 * - --- divider - разделитель
 * - ![alt](url) - изображение
 * - [callout]content[/callout] - выноска
 * - [table]...[/table] - таблица
 */
export function TextBlock({ rawHtml, className }: TextBlockProps) {
  // Защита от undefined/null
  const content = rawHtml || '';

  // Заменяем /n на реальные переносы строк
  const normalizedContent = content.replace(/\/n/g, '\n');

  const renderContent = () => {
    const lines = normalizedContent.split('\n')
    const elements: JSX.Element[] = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i].trim()

      // Пустая строка
      if (!line) {
        i++
        continue
      }

      // Заголовки (с пробелом или без)
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-2xl font-semibold text-gray-800 mt-5 mb-2 leading-normal">
            {parseInlineMarkup(line.substring(4))}
          </h3>
        )
        i++
        continue
      }

      if (line.startsWith('###')) {
        elements.push(
          <h3 key={i} className="text-2xl font-semibold text-gray-800 mt-5 mb-2 leading-normal">
            {parseInlineMarkup(line.substring(3))}
          </h3>
        )
        i++
        continue
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-3xl font-semibold text-gray-900 mt-6 mb-3 leading-snug">
            {parseInlineMarkup(line.substring(3))}
          </h2>
        )
        i++
        continue
      }

      if (line.startsWith('##')) {
        elements.push(
          <h2 key={i} className="text-3xl font-semibold text-gray-900 mt-6 mb-3 leading-snug">
            {parseInlineMarkup(line.substring(2))}
          </h2>
        )
        i++
        continue
      }

      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={i} className="text-4xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
            {parseInlineMarkup(line.substring(2))}
          </h1>
        )
        i++
        continue
      }

      if (line.startsWith('#')) {
        elements.push(
          <h1 key={i} className="text-4xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
            {parseInlineMarkup(line.substring(1))}
          </h1>
        )
        i++
        continue
      }

      // Divider (разделитель)
      if (line === '---') {
        elements.push(
          <hr key={i} className="my-8 border-t border-gray-200" />
        )
        i++
        continue
      }

      // Quote with closing tag (цитата с закрывающим тегом) - >content<
      if (line.startsWith('>') && !line.startsWith('>>')) {
        // Проверяем, есть ли закрывающий тег < в строке или дальше
        const quoteContent: string[] = []
        let currentLine = line.substring(1).trim() // Убираем открывающий >

        while (i < lines.length) {
          if (currentLine.includes('<')) {
            // Извлекаем только контент до <
            const parts = currentLine.split('<')
            const beforeClosing = parts[0].trim()
            if (beforeClosing) quoteContent.push(beforeClosing)

            // Если после < есть ещё контент, вставляем его обратно
            const afterClosing = parts.slice(1).join('<').trim()
            if (afterClosing) {
              lines.splice(i + 1, 0, afterClosing)
            }
            i++
            break
          }
          if (currentLine) quoteContent.push(currentLine)
          i++
          currentLine = lines[i]?.trim() || ''
        }

        elements.push(
          <blockquote key={i} className="border-l-4 border-purple-300 pl-6 py-3 my-4 text-gray-700 italic bg-purple-50/60 rounded-r">
            {parseRichContent(quoteContent, 'quote')}
          </blockquote>
        )
        continue
      }

      // Quote (цитата) - старый синтаксис с > в начале каждой строки (для обратной совместимости)
      if (line.startsWith('> ') || line.startsWith('>>')) {
        const quoteLines = []
        while (i < lines.length && (lines[i].trim().startsWith('> ') || lines[i].trim().startsWith('>'))) {
          const trimmed = lines[i].trim()
          if (trimmed.startsWith('> ')) {
            quoteLines.push(trimmed.substring(2))
          } else if (trimmed.startsWith('>')) {
            quoteLines.push(trimmed.substring(1))
          }
          i++
        }
        elements.push(
          <blockquote key={i} className="border-l-4 border-purple-300 pl-6 py-3 my-4 text-gray-700 italic bg-purple-50/60 rounded-r">
            {quoteLines.map((quoteLine, idx) => (
              <p key={idx} className="mb-1 last:mb-0">{parseInlineMarkup(quoteLine)}</p>
            ))}
          </blockquote>
        )
        continue
      }

      // Bulleted list (маркированный список)
      if (line.startsWith('- ') || line.startsWith('* ')) {
        const listItems = []
        while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
          listItems.push(lines[i].trim().substring(2))
          i++
        }
        elements.push(
          <ul key={i} className="my-4 space-y-2 text-gray-800">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed flex gap-3">
                <span className="text-gray-800 text-2xl leading-none flex items-center h-[1.5rem]">•</span>
                <span className="flex-1">{parseInlineMarkup(item)}</span>
              </li>
            ))}
          </ul>
        )
        continue
      }

      // Numbered list (нумерованный список)
      if (/^\d+\.\s/.test(line)) {
        const listItems = []
        while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
          listItems.push(lines[i].trim().replace(/^\d+\.\s/, ''))
          i++
        }
        elements.push(
          <ol key={i} className="my-4 space-y-2 text-gray-800">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed flex items-start gap-2">
                <span className="text-gray-800 font-medium min-w-[1.5rem]">{idx + 1}.</span>
                <span className="flex-1">{parseInlineMarkup(item)}</span>
              </li>
            ))}
          </ol>
        )
        continue
      }

      // Callout (выноска)
      if (line.startsWith('[callout]')) {
        const calloutContent: string[] = []
        let currentLine = line.replace('[callout]', '').trim()

        while (i < lines.length) {
          if (currentLine.includes('[/callout]')) {
            // Извлекаем только контент до [/callout]
            const parts = currentLine.split('[/callout]')
            const beforeClosing = parts[0].trim()
            if (beforeClosing) calloutContent.push(beforeClosing)

            // Если после [/callout] есть ещё контент, вставляем его обратно как следующую строку
            const afterClosing = parts.slice(1).join('[/callout]').trim()
            if (afterClosing) {
              lines.splice(i + 1, 0, afterClosing)
            }
            i++
            break
          }
          if (currentLine) calloutContent.push(currentLine)
          i++
          currentLine = lines[i]?.trim() || ''
        }

        elements.push(
          <div key={i} className="bg-[#e8f0f7] rounded-lg p-6 my-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#1e3a5f] rounded-lg mt-0.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                {parseRichContent(calloutContent, 'callout')}
              </div>
            </div>
          </div>
        )
        continue
      }

      // Table (таблица)
      if (line.startsWith('[table]')) {
        const tableLines = []
        let currentLine = line.replace('[table]', '').trim()

        while (i < lines.length) {
          if (currentLine.includes('[/table]')) {
            // Извлекаем только контент до [/table]
            const parts = currentLine.split('[/table]')
            const beforeClosing = parts[0].trim()
            if (beforeClosing) tableLines.push(beforeClosing)

            // Если после [/table] есть ещё контент, вставляем его обратно как следующую строку
            const afterClosing = parts.slice(1).join('[/table]').trim()
            if (afterClosing) {
              lines.splice(i + 1, 0, afterClosing)
            }
            i++
            break
          }
          if (currentLine) tableLines.push(currentLine)
          i++
          currentLine = lines[i]?.trim() || ''
        }

        const rows = tableLines.filter(l => l.startsWith('|')).map(row =>
          row.split('|').filter(cell => cell.trim()).map(cell => cell.trim())
        )

        if (rows.length > 0) {
          elements.push(
            <div key={i} className="my-6 overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {rows[0].map((header, idx) => (
                      <th key={idx} className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-900">
                        {parseInlineMarkup(header)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.slice(1).map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-gray-50">
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="border border-gray-200 px-4 py-2 text-sm text-gray-800">
                          {parseInlineMarkup(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
        continue
      }

      // Image (изображение)
      if (line.startsWith('![')) {
        const match = line.match(/!\[(.*?)\]\((.*?)\)/)
        if (match) {
          const [, alt, src] = match
          elements.push(
            <div key={i} className="my-6">
              <Image
                src={src}
                alt={alt}
                width={800}
                height={400}
                className="rounded-lg w-full h-auto"
              />
              {alt && (
                <p className="text-sm text-gray-500 text-center mt-2 italic">{alt}</p>
              )}
            </div>
          )
        }
        i++
        continue
      }

      // Embed (iframe для видео и т.д.)
      if (line.startsWith('[embed]')) {
        const url = line.replace('[embed]', '').replace('[/embed]', '').trim()
        elements.push(
          <div key={i} className="my-6 aspect-video">
            <iframe
              src={url}
              className="w-full h-full rounded-lg border border-gray-200"
              allowFullScreen
            />
          </div>
        )
        i++
        continue
      }

      // Обычный параграф
      elements.push(
        <p key={i} className="text-base text-gray-800 leading-relaxed my-3">
          {parseInlineMarkup(line)}
        </p>
      )
      i++
    }

    return elements
  }

  return (
    <div className={cn("pb-8 pt-4 bg-[#FDFCFA] rounded-2xl", className)}>
      <div className="px-6">
        {renderContent()}
      </div>
    </div>
  )
}

/**
 * Парсит массив строк контента и возвращает React элементы
 * Используется для парсинга контента внутри каллаутов и цитат
 */
function parseRichContent(
  content: string[],
  context: 'callout' | 'quote' = 'callout'
): React.ReactNode[] {
  const elements: React.ReactNode[] = []
  let j = 0

  // Цвета в зависимости от контекста
  const colors = context === 'callout'
    ? { text: 'text-[#1e3a5f]', heading: 'text-[#1e3a5f]', border: 'border-[#1e3a5f]/20', bgQuote: 'bg-[#1e3a5f]/5', borderQuote: 'border-[#1e3a5f]/40' }
    : { text: 'text-gray-700', heading: 'text-gray-800', border: 'border-purple-300/30', bgQuote: 'bg-purple-50/30', borderQuote: 'border-purple-300/50' }

  while (j < content.length) {
    const contentLine = content[j]

    // H3 - разделяем текст до ### и заголовок после ###
    if (contentLine.includes('###')) {
      const parts = contentLine.split('###')
      const textBefore = parts[0].trim()
      const headingText = parts.slice(1).join('###').trim()

      if (textBefore) {
        elements.push(
          <p key={`${j}-text`} className={`${colors.text} leading-relaxed mb-2`}>
            {parseInlineMarkup(textBefore)}
          </p>
        )
      }

      if (headingText) {
        elements.push(
          <h3 key={`${j}-h3`} className={`text-xl font-semibold ${colors.heading} mt-4 mb-2 first:mt-0`}>
            {parseInlineMarkup(headingText)}
          </h3>
        )
      }

      j++
      continue
    }

    // Divider - может быть как отдельная строка "---" или в конце текста "text ---"
    if (contentLine.includes('---')) {
      const parts = contentLine.split('---')
      const textBefore = parts[0].trim()

      // Если есть текст до ---, рендерим его
      if (textBefore) {
        elements.push(
          <p key={`${j}-text`} className={`${colors.text} leading-relaxed mb-2`}>
            {parseInlineMarkup(textBefore)}
          </p>
        )
      }

      // Рендерим divider
      elements.push(
        <hr key={`${j}-divider`} className={`my-4 border-t ${colors.border}`} />
      )

      // Если после --- есть ещё текст, рендерим его
      const textAfter = parts.slice(1).join('---').trim()
      if (textAfter) {
        elements.push(
          <p key={`${j}-after`} className={`${colors.text} leading-relaxed mb-2`}>
            {parseInlineMarkup(textAfter)}
          </p>
        )
      }

      j++
      continue
    }

    // Вложенные цитаты (только если текущий контекст - каллаут)
    if (context === 'callout' && contentLine.startsWith('>') && !contentLine.startsWith('>>')) {
      // Собираем контент цитаты до закрывающего тега <
      const quoteContent: string[] = []
      let currentQuoteLine = contentLine.substring(1).trim()

      while (j < content.length) {
        if (currentQuoteLine.includes('<')) {
          const parts = currentQuoteLine.split('<')
          const beforeClosing = parts[0].trim()
          if (beforeClosing) quoteContent.push(beforeClosing)
          // Остаток после < не обрабатываем в цитате
          j++
          break
        }
        if (currentQuoteLine) quoteContent.push(currentQuoteLine)
        j++
        currentQuoteLine = content[j]?.trim() || ''
      }

      // Рендерим цитату внутри каллаута
      elements.push(
        <blockquote key={j} className={`border-l-4 ${colors.borderQuote} pl-4 py-2 my-3 ${colors.text} italic ${colors.bgQuote} rounded-r`}>
          {parseRichContent(quoteContent, 'quote')}
        </blockquote>
      )
      continue
    }

    // Маркированные списки
    if (contentLine.startsWith('- ') || contentLine.startsWith('* ')) {
      const listItems = []
      while (j < content.length && (content[j].startsWith('- ') || content[j].startsWith('* '))) {
        listItems.push(content[j].substring(2))
        j++
      }
      elements.push(
        <ul key={j} className="my-2 space-y-1.5">
          {listItems.map((item, idx) => (
            <li key={idx} className={`${colors.text} leading-relaxed flex gap-3`}>
              <span className={`${colors.text} text-2xl leading-none flex items-center h-[1.5rem]`}>•</span>
              <span className="flex-1">{parseInlineMarkup(item)}</span>
            </li>
          ))}
        </ul>
      )
      continue
    }

    // Нумерованные списки
    if (/^\d+\.\s/.test(contentLine)) {
      const listItems = []
      while (j < content.length && /^\d+\.\s/.test(content[j])) {
        listItems.push(content[j].replace(/^\d+\.\s/, ''))
        j++
      }
      elements.push(
        <ol key={j} className="my-2 space-y-1.5">
          {listItems.map((item, idx) => (
            <li key={idx} className={`${colors.text} leading-relaxed flex items-start gap-2`}>
              <span className={`${colors.text} font-medium min-w-[1.5rem]`}>{idx + 1}.</span>
              <span className="flex-1">{parseInlineMarkup(item)}</span>
            </li>
          ))}
        </ol>
      )
      continue
    }

    // Обычный текст
    elements.push(
      <p key={j} className={`${colors.text} leading-relaxed mb-2 last:mb-0`}>
        {parseInlineMarkup(contentLine)}
      </p>
    )
    j++
  }

  return elements
}

/**
 * Парсит инлайн разметку: bold, italic, code, links, strikethrough
 */
function parseInlineMarkup(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  let remaining = text
  let key = 0

  const patterns: Array<{
    regex: RegExp;
    render: (...args: string[]) => React.ReactNode;
  }> = [
    { regex: /\*\*(.+?)\*\*/g, render: (match: string) => <strong key={key++} className="font-semibold text-gray-900">{match}</strong> },
    { regex: /\*(.+?)\*/g, render: (match: string) => <em key={key++} className="italic">{match}</em> },
    { regex: /`(.+?)`/g, render: (match: string) => <code key={key++} className="px-1.5 py-0.5 bg-gray-100 text-pink-600 rounded text-sm font-mono">{match}</code> },
    { regex: /~~(.+?)~~/g, render: (match: string) => <del key={key++} className="text-gray-500 line-through">{match}</del> },
    { regex: /\[(.+?)\]\((.+?)\)/g, render: (text: string, url: string) => <a key={key++} href={url} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">{text}</a> },
  ]

  // Простой парсер для инлайн элементов
  while (remaining) {
    let earliestMatch: { index: number; length: number; element: React.ReactNode } | null = null

    for (const pattern of patterns) {
      const regex = new RegExp(pattern.regex.source, pattern.regex.flags)
      const match = regex.exec(remaining)

      if (match && (!earliestMatch || match.index < earliestMatch.index)) {
        if (pattern.regex.source.includes('\\[')) {
          // Link pattern
          earliestMatch = {
            index: match.index,
            length: match[0].length,
            element: pattern.render(match[1], match[2])
          }
        } else {
          earliestMatch = {
            index: match.index,
            length: match[0].length,
            element: pattern.render(match[1])
          }
        }
      }
    }

    if (earliestMatch) {
      if (earliestMatch.index > 0) {
        parts.push(remaining.substring(0, earliestMatch.index))
      }
      parts.push(earliestMatch.element)
      remaining = remaining.substring(earliestMatch.index + earliestMatch.length)
    } else {
      parts.push(remaining)
      break
    }
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>
}
