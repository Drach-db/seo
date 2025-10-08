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

interface H1Props {
  text: string;
  showCircles?: boolean;
  showStars?: boolean;
  showWaves?: boolean;
  showDots?: boolean;
}

/**
 * Преобразует data-атрибуты в пропсы для H1
 */
export function adaptH1Props(attrs: Record<string, any>): H1Props {
  return {
    text: attrs.text || '',
    showCircles: attrs.showCircles !== 'false',
    showStars: attrs.showStars !== 'false',
    showWaves: attrs.showWaves !== 'false',
    showDots: attrs.showDots !== 'false',
  };
}

interface H2Props {
  text: string;
  showCircles?: boolean;
  showStars?: boolean;
  showWaves?: boolean;
  showDots?: boolean;
}

/**
 * Преобразует data-атрибуты в пропсы для H2
 */
export function adaptH2Props(attrs: Record<string, any>): H2Props {
  return {
    text: attrs.text || '',
    showCircles: attrs.showCircles !== 'false',
    showStars: attrs.showStars !== 'false',
    showWaves: attrs.showWaves !== 'false',
    showDots: attrs.showDots !== 'false',
  };
}

/**
 * Главная функция адаптации - выбирает нужный адаптер по названию компонента
 */
export function adaptProps(componentName: string, attrs: Record<string, any>): any {
  switch (componentName) {
    case 'article_header':
      return adaptArticleHeaderProps(attrs);

    case 'h1':
      return adaptH1Props(attrs);

    case 'h2':
      return adaptH2Props(attrs);

    // Добавляй сюда адаптеры для других компонентов:
    // case 'feature_card':
    //   return adaptFeatureCardProps(attrs);

    default:
      // Если адаптера нет, возвращаем как есть
      return attrs;
  }
}
