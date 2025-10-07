#!/bin/bash

# Создаём временную папку для SEO страниц
SEO_OUT="out-seo"
rm -rf "$SEO_OUT"

# Собираем весь сайт
npm run build

# Копируем только SEO страницы + статику
mkdir -p "$SEO_OUT"
cp -r out/_next "$SEO_OUT/"
cp -r out/seo-pages "$SEO_OUT/"
cp out/logo*.svg "$SEO_OUT/" 2>/dev/null || true

echo ""
echo "✅ SEO страницы собраны в папку: $SEO_OUT/"
echo ""
echo "Содержимое:"
ls -lh "$SEO_OUT/"
echo ""
echo "Деплой: загрузи папку $SEO_OUT/ на CloudFlare Pages"
