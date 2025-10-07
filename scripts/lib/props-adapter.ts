/**
 * Адаптеры для преобразования плоских data-атрибутов в структуру пропсов компонента
 */

interface ArticleHeaderDataAttrs {
  title?: string;
  authorName?: string;
  authorAvatar?: string;
  authorInitials?: string;
  tagsNiche?: string;
  tagsType?: 'article' | 'case';
  readTime?: string;
  publishDate?: string;
}

interface ArticleHeaderProps {
  title: string;
  author: {
    name: string;
    initials?: string;
    avatar?: string;
  };
  tags?: {
    niche?: string;
    type?: 'article' | 'case';
  };
  readTime: string;
  publishDate: string;
}

/**
 * Преобразует data-атрибуты в пропсы для ArticleHeader
 */
export function adaptArticleHeaderProps(attrs: Record<string, any>): ArticleHeaderProps {
  return {
    title: attrs.title || 'Без заголовка',
    author: {
      name: attrs.authorName || 'Аноним',
      avatar: attrs.authorAvatar,
      initials: attrs.authorInitials,
    },
    tags: {
      niche: attrs.tagsNiche,
      type: attrs.tagsType as 'article' | 'case',
    },
    readTime: attrs.readTime || '5 мин',
    publishDate: attrs.publishDate || new Date().toLocaleDateString('ru-RU'),
  };
}

/**
 * Главная функция адаптации - выбирает нужный адаптер по названию компонента
 */
export function adaptProps(componentName: string, attrs: Record<string, any>): any {
  switch (componentName) {
    case 'article_header':
      return adaptArticleHeaderProps(attrs);

    // Добавляй сюда адаптеры для других компонентов:
    // case 'feature_card':
    //   return adaptFeatureCardProps(attrs);

    default:
      // Если адаптера нет, возвращаем как есть
      return attrs;
  }
}
