# Автоматическая пересборка SEO страниц из Google Sheets

Этот скрипт позволяет запускать пересборку SEO страниц нажатием кнопки прямо из Google Sheets.

## 🎯 Как это работает

1. **Google Sheets** → Кнопка "🔄 Пересобрать страницы" в меню
2. **Google Apps Script** → Отправляет запрос в GitHub API
3. **GitHub Actions** → Запускает workflow пересборки
4. **CloudFlare Pages** → Автоматически деплоит новую версию

## 📋 Инструкция по настройке

### Шаг 1: Создать GitHub Personal Access Token

1. Откройте GitHub: https://github.com/settings/tokens
2. Нажмите **"Generate new token"** → **"Generate new token (classic)"**
3. Настройки токена:
   - **Note**: `SEO Pages Rebuild from Google Sheets`
   - **Expiration**: `No expiration` (или выберите срок)
   - **Scopes**: Отметьте галочку **`repo`** (Full control of private repositories)
4. Нажмите **"Generate token"**
5. **ВАЖНО**: Скопируйте токен и сохраните в надежном месте (он больше не отобразится!)

Пример токена: `ghp_abcdefghijklmnopqrstuvwxyz1234567890`

---

### Шаг 2: Добавить Google Credentials в GitHub Secrets

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **"New repository secret"**
4. Создайте секрет:
   - **Name**: `GOOGLE_CREDENTIALS`
   - **Value**: Содержимое файла `credentials.json` (весь JSON целиком)
5. Нажмите **"Add secret"**

**Где взять credentials.json?**
- Это файл с ключами Google Service Account
- Должен быть у вас локально в корне проекта
- Если нет - создайте Service Account в Google Cloud Console

---

### Шаг 3: Установить Google Apps Script в таблицу

1. **Откройте вашу Google Sheets таблицу** с данными SEO страниц
2. Нажмите **Расширения** → **Apps Script**
3. Удалите весь код в редакторе (файл `Code.gs`)
4. **Скопируйте весь код** из файла `rebuild-trigger.gs` и вставьте в редактор
5. **Настройте константы** в начале файла:

```javascript
// Ваш GitHub Personal Access Token (из Шага 1)
const GITHUB_TOKEN = 'ghp_abcdefghijklmnopqrstuvwxyz1234567890';

// Владелец репозитория (ваш GitHub username)
const REPO_OWNER = 'daniil';  // Замените на ваш username

// Название репозитория
const REPO_NAME = 'seo';  // Должно совпадать с названием репо
```

6. Нажмите **Ctrl+S** (или иконка дискеты) для сохранения
7. Назовите проект: **"SEO Pages Rebuild"**

---

### Шаг 4: Дать разрешения скрипту

1. В редакторе Apps Script нажмите **"Выполнить"** (Run) → выберите функцию **`onOpen`**
2. Появится запрос разрешений:
   - **"Приложение не проверено"** → Нажмите **"Дополнительные настройки"** → **"Перейти на страницу..."**
   - Предоставьте разрешения:
     - ✅ Просмотр и управление таблицами Google
     - ✅ Подключение к внешним службам (GitHub API)
3. Подтвердите все разрешения

---

### Шаг 5: Закрыть редактор и проверить меню

1. Закройте окно Apps Script
2. Обновите страницу Google Sheets (F5)
3. В верхнем меню должен появиться новый пункт: **"🤖 SEO Automation"**
4. Откройте меню:
   - **🔄 Пересобрать страницы** - запуск пересборки
   - **ℹ️ Статус последней сборки** - проверка статуса

---

## 🚀 Использование

### Запустить пересборку

1. Откройте Google Sheets с данными
2. Меню → **🤖 SEO Automation** → **🔄 Пересобрать страницы**
3. Подтвердите действие в диалоге
4. Дождитесь уведомления об успешном запуске

### Проверить статус сборки

**Вариант 1: Через меню Google Sheets**
- Меню → **🤖 SEO Automation** → **ℹ️ Статус последней сборки**

**Вариант 2: Через GitHub**
- Откройте: https://github.com/[ваш-username]/seo/actions
- Найдите workflow **"Rebuild SEO Pages"**
- Смотрите статус: ⏳ В процессе / ✅ Успешно / ❌ Ошибка

**Вариант 3: Через CloudFlare Pages**
- Откройте CloudFlare Dashboard
- Раздел **Pages** → ваш проект
- Смотрите последний deploy

### Лог истории пересборок

Скрипт автоматически создает лист **"Rebuild Log"** в вашей таблице с историей всех запусков:

| Timestamp | User | Status | Error Message |
|-----------|------|--------|---------------|
| 15.01.2025 14:30 | user@example.com | success | |
| 15.01.2025 16:45 | user@example.com | error | GitHub API timeout |

---

## ⏱️ Время выполнения

Полный цикл пересборки занимает **3-5 минут**:

1. ⏳ **GitHub Actions** (~2-3 мин):
   - Checkout репозитория
   - Установка зависимостей
   - Генерация страниц из Google Sheets
   - Сборка Next.js
   - Commit и push изменений

2. ⏳ **CloudFlare Pages** (~1-2 мин):
   - Автоматический deploy при push в main
   - Обновление CDN

---

## 🔧 Тестирование подключения

Если что-то не работает, можно протестировать подключение к GitHub:

1. Откройте **Расширения** → **Apps Script**
2. В редакторе найдите функцию **`testGitHubConnection()`**
3. Нажмите **"Выполнить"** (Run)
4. Проверьте результат в диалоговом окне

**Возможные ошибки:**

| Ошибка | Причина | Решение |
|--------|---------|---------|
| `401 Unauthorized` | Неверный токен | Проверьте GITHUB_TOKEN |
| `404 Not Found` | Неверное имя репо | Проверьте REPO_OWNER и REPO_NAME |
| `403 Forbidden` | Недостаточно прав | Токен должен иметь scope `repo` |
| `Network error` | Нет интернета | Проверьте подключение |

---

## 🛠️ Структура workflow

**GitHub Actions**: `.github/workflows/rebuild-pages.yml`

```yaml
name: Rebuild SEO Pages

on:
  repository_dispatch:
    types: [rebuild-pages]  # Триггер из Google Sheets
  workflow_dispatch:        # Ручной запуск из GitHub UI

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - Checkout repository
      - Setup Node.js 18
      - Install dependencies (npm ci)
      - Create Google credentials file
      - Generate pages from Google Sheets
      - Build static site (Next.js)
      - Clean up credentials
      - Commit and push changes
```

---

## 📝 Дополнительные возможности

### Автоматическая пересборка по расписанию

Можно добавить триггер по расписанию в Google Apps Script:

1. **Расширения** → **Apps Script**
2. Слева: **Триггеры** (иконка будильника)
3. **"Добавить триггер"**:
   - Функция: `triggerRebuild`
   - Источник события: **"Временной"**
   - Тип триггера: **"Таймер по дням"**
   - Время: **"с 00:00 до 01:00"** (ночью, когда нет нагрузки)

### Уведомления в Telegram/Slack

Можно добавить отправку уведомлений в workflow:

```yaml
- name: Notify on success
  if: success()
  run: |
    curl -X POST https://api.telegram.org/bot${{ secrets.TELEGRAM_BOT_TOKEN }}/sendMessage \
      -d chat_id=${{ secrets.TELEGRAM_CHAT_ID }} \
      -d text="✅ SEO pages rebuilt successfully"
```

---

## 🔐 Безопасность

**Важные правила:**

1. ✅ **НЕ коммитьте** токены и credentials в Git
2. ✅ Храните GITHUB_TOKEN **только** в Google Apps Script
3. ✅ Храните GOOGLE_CREDENTIALS **только** в GitHub Secrets
4. ✅ Используйте токены с **минимальными правами** (scope `repo`)
5. ✅ Периодически **меняйте токены** (раз в 3-6 месяцев)
6. ✅ Используйте **разные токены** для разных проектов

**Что делать если токен утек:**

1. Немедленно удалите токен: https://github.com/settings/tokens
2. Создайте новый токен
3. Обновите в Google Apps Script
4. Проверьте историю коммитов на наличие токена

---

## ❓ FAQ

**Q: Можно ли запускать пересборку вручную без Google Sheets?**
A: Да, через GitHub Actions UI: https://github.com/[username]/seo/actions → "Rebuild SEO Pages" → "Run workflow"

**Q: Сколько раз можно запускать пересборку?**
A: GitHub Actions дает 2000 минут/месяц бесплатно. Одна пересборка = ~3 минуты. Итого: ~600 пересборок/месяц.

**Q: Что если пересборка упадет с ошибкой?**
A: Проверьте логи в GitHub Actions. Частые причины: ошибки в данных Google Sheets, проблемы с credentials, ошибки сборки Next.js.

**Q: Можно ли откатиться к предыдущей версии?**
A: Да, через Git: `git revert <commit-hash>` и `git push`. CloudFlare автоматически задеплоит предыдущую версию.

**Q: Нужно ли коммитить файл rebuild-trigger.gs в Git?**
A: Можно для резервной копии, но **обязательно** удалите реальный токен и замените на плейсхолдер перед коммитом!

---

## 🆘 Поддержка

Если что-то не работает:

1. Проверьте настройки (токены, имена репо)
2. Запустите `testGitHubConnection()` для диагностики
3. Проверьте логи GitHub Actions
4. Проверьте лист "Rebuild Log" в таблице
5. Откройте issue в репозитории

---

**Приятного использования! 🚀**
