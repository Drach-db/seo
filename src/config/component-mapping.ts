import { ComponentType } from 'react';
import { ArticleHeader } from '../components/ui/article-header';
import { H1 } from '../components/ui/h1';
import { H2 } from '../components/ui/h2';

// Маппинг: название из Google Sheets → React компонент
export const COMPONENT_MAP: Record<string, ComponentType<any>> = {
  article_header: ArticleHeader,
  h1: H1,
  h2: H2,
  // Добавляй сюда новые компоненты по мере создания:
  // feature_card: FeatureCard,
  // faq_section: FaqSection,
  // etc...
};

// Функция для получения компонента по названию из таблицы
export function getComponent(artifactName: string): ComponentType<any> | null {
  const component = COMPONENT_MAP[artifactName];

  if (!component) {
    console.warn(`⚠️  Компонент "${artifactName}" не найден в маппинге`);
    return null;
  }

  return component;
}
