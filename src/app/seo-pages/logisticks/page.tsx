import { DecorativeBackground } from "@/components/ui/decorative-background";
import { ArticleHeader } from "@/components/ui/article-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Без заголовка",
  "description": ""
};

export default function Page() {
  return (
    <>
    <ArticleHeader rawHtml={`<div 
  data-title="Полное руководство по SEO в 2025" 
  data-author-name="Иван Петров"
  data-author-avatar="/avatars/ivan.jpg"
  data-tags-niche="SEO"
  data-tags-type="case"
  data-read-time="8 мин чтения"
  data-publish-date="15 января 2025">
</div>`} />
    <ArticleHeader rawHtml={`<div 
  data-title="Полное руководство по SEO в 2025" 
  data-author-name="Иван Петров"
  data-author-avatar="/avatars/ivan.jpg"
  data-tags-niche="SEO"
  data-tags-type="case"
  data-read-time="8 мин чтения"
  data-publish-date="15 января 2025">
</div>`} />
    </>
  );
}
