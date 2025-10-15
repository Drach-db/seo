/**
 * Глобальные типографические токены для всех компонентов
 * Стиль: Notion-like, минималистичный, чистый
 */

export const typography = {
  // Заголовки
  heading: {
    h1: {
      mobile: 'text-3xl font-bold text-gray-900 leading-tight',
      tablet: 'md:text-4xl',
      desktop: 'lg:text-5xl',
      all: 'text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight',
    },
    h2: {
      mobile: 'text-2xl font-semibold text-gray-900 leading-snug',
      tablet: 'md:text-3xl',
      desktop: 'lg:text-4xl',
      all: 'text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug',
    },
    h3: {
      mobile: 'text-xl font-semibold text-gray-800 leading-normal',
      tablet: 'md:text-2xl',
      desktop: 'lg:text-3xl',
      all: 'text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-normal',
    },
  },

  // Основной текст
  body: {
    base: 'text-base text-gray-800 leading-relaxed',
    large: 'text-lg text-gray-800 leading-relaxed',
    small: 'text-sm text-gray-700 leading-normal',
  },

  // Специальные стили
  special: {
    quote: 'text-base text-gray-700 italic leading-relaxed',
    code: {
      inline: 'px-1.5 py-0.5 bg-gray-100 text-pink-600 rounded text-sm font-mono',
      block: 'p-4 bg-gray-100 text-gray-800 rounded-lg text-sm font-mono overflow-x-auto',
    },
    link: 'text-blue-600 hover:text-blue-800 underline transition-colors',
    strong: 'font-semibold text-gray-900',
    emphasis: 'italic',
    strikethrough: 'text-gray-500 line-through',
  },

  // Списки
  list: {
    item: 'leading-relaxed flex gap-3',
    bullet: 'text-gray-800 text-2xl leading-none flex items-center h-[1.5rem]',
    number: 'text-gray-800 font-medium min-w-[1.5rem] flex items-center h-[1.5rem]',
    spacing: 'my-4 space-y-2 text-gray-800',
  },

  // Блоки
  blocks: {
    callout: {
      container: 'bg-[#e8f0f7] rounded-lg p-6 my-6',
      icon: 'flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#1e3a5f] rounded-lg mt-0.5',
      text: 'text-[#1e3a5f] leading-relaxed',
      heading: 'text-xl font-semibold text-[#1e3a5f] mt-4 mb-2 first:mt-0',
      listBullet: 'text-[#1e3a5f] text-2xl leading-none flex items-center h-[1.5rem]',
    },
    quote: {
      container: 'border-l-4 border-purple-300 pl-6 py-3 my-4 text-gray-700 italic bg-purple-50/60 rounded-r',
      text: 'text-base text-gray-700 italic leading-relaxed mb-1 last:mb-0',
    },
    divider: 'my-8 border-t border-gray-200',
  },

  // Цвета фонов
  backgrounds: {
    main: 'bg-[#FDFCFA]', // Молочный фон
    callout: 'bg-[#e8f0f7]', // Голубой для callout
    quote: 'bg-purple-50/60', // Лавандовый для quote
    code: 'bg-gray-100', // Серый для кода
  },

  // Отступы
  spacing: {
    container: 'px-6 pb-8 pt-4', // Для TextBlock контейнера
    heading: {
      h1: 'mt-8 mb-4',
      h2: 'mt-6 mb-3',
      h3: 'mt-5 mb-2',
    },
    paragraph: 'my-3',
    list: 'my-4',
    block: 'my-6',
  },

  // Скругления
  rounded: {
    container: 'rounded-2xl',
    small: 'rounded',
    medium: 'rounded-lg',
    large: 'rounded-2xl',
  },
} as const;

// Хелпер для объединения классов
export const getTypographyClass = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};
