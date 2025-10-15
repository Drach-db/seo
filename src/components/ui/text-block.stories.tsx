import type { Meta, StoryObj } from '@storybook/react';
import { TextBlock } from './text-block';

const meta = {
  title: 'UI/TextBlock',
  component: TextBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllFeatures: Story = {
  args: {
    content: `# Заголовок первого уровня

Это обычный параграф с **жирным текстом**, *курсивом*, \`инлайн кодом\`, ~~зачеркнутым текстом~~ и [ссылкой](https://example.com).

## Заголовок второго уровня

Еще один параграф текста для демонстрации типографики.

### Заголовок третьего уровня

Параграф после h3 заголовка.

---

> Это цитата в стиле Notion.
> Она может занимать несколько строк.
> И выглядит красиво!

[callout]
💡 Это callout блок - выноска для важной информации.
Можно использовать для подсказок и предупреждений.
[/callout]

## Списки

Маркированный список:
- Первый пункт
- Второй пункт с **жирным** текстом
- Третий пункт со [ссылкой](https://example.com)

Нумерованный список:
1. Первый шаг
2. Второй шаг с \`кодом\`
3. Третий шаг

## Таблица

[table]
| Функция | Синтаксис | Пример |
| Жирный | **text** | **bold** |
| Курсив | *text* | *italic* |
| Код | \\\`code\\\` | \`code\` |
| Ссылка | [text](url) | [link](/) |
[/table]

## Код и разделители

Вот пример инлайн кода: \`const x = 42;\`

---

Текст после разделителя.`,
  },
};

export const BasicText: Story = {
  args: {
    content: `# Простой пример

Это обычный текст с **жирным**, *курсивом* и \`кодом\`.

Второй параграф с [ссылкой на Google](https://google.com).`,
  },
};

export const Lists: Story = {
  args: {
    content: `# Примеры списков

## Маркированный список

- Первый пункт
- Второй пункт
- Третий пункт с **жирным**

## Нумерованный список

1. Шаг первый
2. Шаг второй
3. Шаг третий`,
  },
};

export const Quote: Story = {
  args: {
    content: `# Цитаты

> "Дизайн - это не только то, как выглядит и ощущается продукт.
> Дизайн - это то, как он работает."
> - Стив Джобс

Обычный текст после цитаты.`,
  },
};

export const Callout: Story = {
  args: {
    content: `# Callout пример

[callout]
The TL;DR

Build your startup like you're building a globally distributed company from day one—even if you're not.

- **Message clarity beats product complexity.** Change your tagline from technical jargon to something customers immediately understand. Supabase changed its message and saw instant traction.
- **Everyone does customer support, regardless of role.** Make frontline support the first line in every contract, from CFO to intern. When customers see you helping in communities day after day, it builds a strong foundation for everything else.
- **Global remote isn't just about talent—it's perspective.** Building across time zones gives you 24/7 coverage, force you to think about global challenges from day one, and teaches you that people are people, no matter where they are.
[/callout]

Текст продолжается после callout блока.`,
  },
};

export const Table: Story = {
  args: {
    content: `# Таблица данных

[table]
| Название | Описание | Статус |
| Feature A | Важная функция | ✅ Готово |
| Feature B | В разработке | 🔄 В процессе |
| Feature C | Запланировано | 📅 Скоро |
[/table]

Текст после таблицы.`,
  },
};

export const Image: Story = {
  args: {
    content: `# Пример с изображением

Текст перед изображением.

![Красивый пейзаж](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop)

Текст после изображения.`,
  },
};

export const MixedContent: Story = {
  args: {
    content: `# Комплексный пример

Начнем с обычного параграфа, который содержит **жирный текст**, *курсив*, и \`код\`.

## Важная информация

[callout]
⚠️ Обратите внимание на следующие пункты:
[/callout]

1. Первое важное замечание
2. Второе важное замечание
3. Третье важное замечание

> Цитата для вдохновения:
> "Простота - это наивысшая степень искушенности."

---

## Технические детали

[table]
| Параметр | Значение | Описание |
| Размер | 1024 KB | Размер файла |
| Формат | JSON | Формат данных |
| Версия | 2.0 | Версия API |
[/table]

Подробнее на [официальном сайте](https://example.com).`,
  },
};

export const LongArticle: Story = {
  args: {
    content: `# Полное руководство по Schema.org

## Введение

Schema.org - это коллаборативный проект, созданный **Google**, **Microsoft**, **Yahoo** и **Yandex** для создания общей схемы структурированных данных в интернете.

[callout]
💡 Использование Schema.org разметки помогает поисковым системам лучше понимать содержимое ваших страниц.
[/callout]

## Зачем нужен Schema.org?

Основные преимущества:

1. Улучшение SEO и видимости в поиске
2. Rich snippets в результатах поиска
3. Лучшее понимание контента AI-ассистентами
4. Структурированное представление данных

---

## Типы разметки

[table]
| Тип | Использование | Сложность |
| Article | Статьи, блоги | ⭐⭐ |
| Product | Товары | ⭐⭐⭐ |
| LocalBusiness | Компании | ⭐⭐⭐⭐ |
| FAQPage | FAQ страницы | ⭐⭐ |
[/table]

### Пример кода

Вот пример базовой разметки: \`<div itemscope itemtype="https://schema.org/Article">\`

> "Структурированные данные - это будущее веб-поиска."
> - Эксперты Google

## Заключение

Начните использовать Schema.org сегодня! Больше информации на [schema.org](https://schema.org).`,
  },
};
