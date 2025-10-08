import { ArticleHeader } from "@/components/ui/article-header";
import { H1 } from "@/components/ui/h1";
import { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Без заголовка",
  "description": ""
};

export default function Page() {
  return (
    <>
  <ArticleHeader title="Полное руководство по SEO в 2025" author={JSON.parse("{\"name\":\"Иван Петров\",\"avatar\":\"/avatars/ivan.jpg\"}")} tags={JSON.parse("{\"niche\":\"SEO\",\"type\":\"case\"}")} readTime="8 мин чтения" publishDate="15 января 2025" />
  <H1 text="" showCircles showStars showWaves showDots />
    </>
  );
}
