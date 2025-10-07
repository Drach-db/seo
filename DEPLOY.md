# Деплой SEO страниц на CloudFlare Pages

## Автоматический деплой через Git

### 1. Зайди на CloudFlare Pages
https://dash.cloudflare.com/ → Pages → Create a project

### 2. Подключи Git репозиторий
- Connect to Git
- Выбери этот репозиторий

### 3. Настройки сборки:
```
Framework preset: Next.js
Build command: npm run build:seo
Output directory: out-seo
```

### 4. Environment Variables (опционально):
Если нужен доступ к Google Sheets при билде:
- Добавь содержимое `google-credentials.json` как переменную

### 5. Deploy!
CloudFlare автоматически:
- Установит зависимости (`npm install`)
- Запустит `npm run build:seo`
- Опубликует `out-seo/` на CDN

## Локальная сборка

```bash
# Генерация страниц из Google Sheets + сборка
npm run build:seo

# Результат в папке: out-seo/
```

## Workflow

1. Обновляешь данные в Google Sheets
2. `git push` → CloudFlare автоматически пересобирает
3. Новые страницы на CDN!
