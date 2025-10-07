/**
 * Генерирует layout.tsx для страницы с Header и Footer
 */
export function generateLayout(): string {
  return `import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
`;
}
