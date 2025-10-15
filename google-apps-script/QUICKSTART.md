# 🚀 Быстрый старт - Автоматическая пересборка

## ⚡ 3 шага до автоматизации

### 1️⃣ Настроить GitHub (2 минуты)

**A. Создать GitHub Personal Access Token:**
1. Открыть: https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Отметить галочку `repo`
4. Скопировать токен (начинается с `ghp_`)

**B. Добавить Google Credentials в Secrets:**
1. Открыть: https://github.com/[ваш-username]/seo/settings/secrets/actions
2. "New repository secret"
3. Name: `GOOGLE_CREDENTIALS`
4. Value: Содержимое файла `google-credentials.json` (весь JSON)

```bash
# Скопировать содержимое файла в буфер обмена (Mac):
cat google-credentials.json | pbcopy

# Затем вставить (Cmd+V) в GitHub Secrets
```

---

### 2️⃣ Установить скрипт в Google Sheets (3 минуты)

1. Открыть вашу Google Sheets таблицу
2. **Расширения** → **Apps Script**
3. Удалить весь код
4. Скопировать код из `rebuild-trigger.gs` и вставить
5. **Изменить 3 строки** в начале файла:

```javascript
const GITHUB_TOKEN = 'ghp_ВАШ_ТОКЕН_ИЗ_ШАГА_1';
const REPO_OWNER = 'daniil';  // ваш GitHub username
const REPO_NAME = 'seo';
```

6. Сохранить (Ctrl+S)
7. Выполнить функцию `onOpen` (Run) и разрешить доступ

---

### 3️⃣ Использовать (10 секунд)

1. Обновить Google Sheets (F5)
2. Меню → **🤖 SEO Automation** → **🔄 Пересобрать страницы**
3. Подтвердить
4. Готово! ✅

Проверить статус:
- GitHub Actions: https://github.com/[username]/seo/actions
- CloudFlare Pages: через 3-5 минут

---

## 📝 Итого что у вас есть:

- ✅ GitHub Actions workflow для пересборки
- ✅ Кнопка в Google Sheets для запуска
- ✅ Автоматический deploy в CloudFlare
- ✅ Лог истории пересборок

---

## 🆘 Если что-то не работает:

1. Проверьте, что токен имеет права `repo`
2. Проверьте, что REPO_OWNER и REPO_NAME правильные
3. Запустите тест: в Apps Script → Run → `testGitHubConnection()`
4. Смотрите логи: GitHub Actions → Rebuild SEO Pages

**Полная инструкция:** [README.md](README.md)
