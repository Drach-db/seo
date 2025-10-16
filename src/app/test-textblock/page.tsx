import { TextBlock } from "@/components/ui/text-block";

export default function TestTextBlockPage() {
  return (
    <div>
      <TextBlock content={`# Callout пример

[callout]
The TL;DR

Build your startup like you're building a globally distributed company from day one—even if you're not.

- **Message clarity beats product complexity.** Change your tagline from technical jargon to something customers immediately understand.
- **Everyone does customer support, regardless of role.** Make frontline support the first line in every contract, from CFO to intern.
- **Global remote isn't just about talent—it's perspective.** Building across time zones gives you 24/7 coverage.
[/callout]

Текст после callout.

# Примеры списков

## Маркированный список

- Первый пункт
- Второй пункт
- Третий пункт с **жирным**

## Нумерованный список

1. Шаг первый
2. Шаг второй
3. Шаг третий`} />
    </div>
  );
}
