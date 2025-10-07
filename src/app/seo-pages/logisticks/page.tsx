import { ArticleHeader } from "@/components/ui/article-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Без заголовка",
  "description": ""
};

export default function Page() {
  return (
    <>
  <ArticleHeader title="Полное руководство по SEO в 2025" author={JSON.parse("{\"name\":\"Иван Петров\",\"avatar\":\"/avatars/ivan.jpg\"}")} tags={JSON.parse("{\"niche\":\"SEO\",\"type\":\"case\"}")} readTime="8 мин чтения" publishDate="15 января 2025" />
  <ArticleHeader title="Полное руководство по SEO в 2025" author={JSON.parse("{\"name\":\"Иван Петров\",\"avatar\":\"/avatars/ivan.jpg\"}")} tags={JSON.parse("{\"niche\":\"SEO\",\"type\":\"case\"}")} readTime="8 мин чтения" publishDate="15 января 2025" />
    </>
  );
}
