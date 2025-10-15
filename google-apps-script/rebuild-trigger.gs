/**
 * Google Apps Script для автоматической пересборки SEO страниц
 * Триггерит GitHub Actions workflow через repository_dispatch API
 */

// ============================================
// НАСТРОЙКИ - ЗАПОЛНИТЕ ЭТИ ЗНАЧЕНИЯ
// ============================================

// Ваш GitHub Personal Access Token (с правами repo)
// Создать можно здесь: https://github.com/settings/tokens
const GITHUB_TOKEN = 'ВАШ_GITHUB_TOKEN_ЗДЕСЬ';

// Владелец репозитория (ваш GitHub username)
const REPO_OWNER = 'ВАШ_GITHUB_USERNAME';

// Название репозитория
const REPO_NAME = 'seo';

// ============================================
// ФУНКЦИИ
// ============================================

/**
 * Создает пользовательское меню при открытии таблицы
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🤖 SEO Automation')
    .addItem('🔄 Пересобрать страницы', 'triggerRebuild')
    .addSeparator()
    .addItem('ℹ️ Статус последней сборки', 'checkLastBuildStatus')
    .addToUi();
}

/**
 * Триггерит пересборку страниц через GitHub Actions
 */
function triggerRebuild() {
  const ui = SpreadsheetApp.getUi();

  // Проверяем, заполнен ли токен
  if (GITHUB_TOKEN === 'ВАШ_GITHUB_TOKEN_ЗДЕСЬ') {
    ui.alert(
      '❌ Ошибка конфигурации',
      'Пожалуйста, настройте GITHUB_TOKEN в скрипте.\n\n' +
      'Инструкция:\n' +
      '1. Откройте Расширения → Apps Script\n' +
      '2. Найдите строку: const GITHUB_TOKEN = ...\n' +
      '3. Вставьте ваш GitHub Personal Access Token\n' +
      '4. Сохраните (Ctrl+S)',
      ui.ButtonSet.OK
    );
    return;
  }

  // Подтверждение действия
  const response = ui.alert(
    '🔄 Пересборка страниц',
    'Запустить пересборку всех SEO страниц?\n\n' +
    'Это действие:\n' +
    '• Прочитает данные из Google Sheets\n' +
    '• Сгенерирует React компоненты\n' +
    '• Соберет статические HTML страницы\n' +
    '• Закоммитит изменения в Git\n' +
    '• Задеплоит на CloudFlare Pages\n\n' +
    'Процесс займет 2-3 минуты.',
    ui.ButtonSet.YES_NO
  );

  if (response !== ui.Button.YES) {
    return;
  }

  // Показываем индикатор загрузки
  ui.alert('⏳ Запуск сборки...', 'Отправляем запрос в GitHub Actions...', ui.ButtonSet.OK);

  try {
    // GitHub API endpoint для repository_dispatch
    const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/dispatches`;

    // Payload для триггера
    const payload = {
      event_type: 'rebuild-pages',
      client_payload: {
        triggered_by: 'google_sheets',
        triggered_at: new Date().toISOString(),
        user: Session.getActiveUser().getEmail()
      }
    };

    // Опции запроса
    const options = {
      method: 'post',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    // Отправляем запрос
    const response = UrlFetchApp.fetch(url, options);
    const statusCode = response.getResponseCode();

    if (statusCode === 204) {
      // Успех (GitHub API возвращает 204 No Content при успешном dispatch)
      ui.alert(
        '✅ Сборка запущена!',
        'GitHub Actions начал пересборку страниц.\n\n' +
        'Проверить статус можно:\n' +
        `• GitHub Actions: https://github.com/${REPO_OWNER}/${REPO_NAME}/actions\n` +
        '• CloudFlare Pages: через ~3-5 минут\n\n' +
        'Вы получите уведомление, когда сборка завершится.',
        ui.ButtonSet.OK
      );

      // Записываем лог в отдельный лист (опционально)
      logRebuildTrigger('success');

    } else {
      // Ошибка
      throw new Error(`GitHub API вернул код ${statusCode}: ${response.getContentText()}`);
    }

  } catch (error) {
    // Показываем ошибку пользователю
    ui.alert(
      '❌ Ошибка запуска сборки',
      `Не удалось запустить GitHub Actions:\n\n${error.message}\n\n` +
      'Проверьте:\n' +
      '1. Правильность GitHub Token\n' +
      '2. Права токена (должен иметь scope "repo")\n' +
      '3. Названия репозитория и владельца\n' +
      '4. Подключение к интернету',
      ui.ButtonSet.OK
    );

    // Записываем ошибку в лог
    logRebuildTrigger('error', error.message);

    console.error('Ошибка триггера пересборки:', error);
  }
}

/**
 * Проверяет статус последнего workflow run
 */
function checkLastBuildStatus() {
  const ui = SpreadsheetApp.getUi();

  if (GITHUB_TOKEN === 'ВАШ_GITHUB_TOKEN_ЗДЕСЬ') {
    ui.alert('❌ Ошибка', 'Настройте GITHUB_TOKEN в скрипте.', ui.ButtonSet.OK);
    return;
  }

  try {
    // GitHub API endpoint для получения workflow runs
    const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/actions/runs?per_page=1`;

    const options = {
      method: 'get',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      },
      muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch(url, options);
    const data = JSON.parse(response.getContentText());

    if (data.workflow_runs && data.workflow_runs.length > 0) {
      const lastRun = data.workflow_runs[0];
      const status = lastRun.status;
      const conclusion = lastRun.conclusion;
      const createdAt = new Date(lastRun.created_at).toLocaleString('ru-RU');

      let statusEmoji = '⏳';
      let statusText = 'В процессе';

      if (status === 'completed') {
        if (conclusion === 'success') {
          statusEmoji = '✅';
          statusText = 'Успешно завершена';
        } else if (conclusion === 'failure') {
          statusEmoji = '❌';
          statusText = 'Завершена с ошибкой';
        } else {
          statusEmoji = '⚠️';
          statusText = conclusion;
        }
      }

      ui.alert(
        `${statusEmoji} Статус последней сборки`,
        `Статус: ${statusText}\n` +
        `Время запуска: ${createdAt}\n` +
        `Workflow: ${lastRun.name}\n\n` +
        `Подробности: ${lastRun.html_url}`,
        ui.ButtonSet.OK
      );
    } else {
      ui.alert('ℹ️ Статус', 'Пока не было ни одной сборки.', ui.ButtonSet.OK);
    }

  } catch (error) {
    ui.alert('❌ Ошибка', `Не удалось получить статус:\n${error.message}`, ui.ButtonSet.OK);
    console.error('Ошибка получения статуса:', error);
  }
}

/**
 * Записывает лог триггера пересборки в отдельный лист
 */
function logRebuildTrigger(status, errorMessage = '') {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let logSheet = spreadsheet.getSheetByName('Rebuild Log');

    // Создаем лист, если его нет
    if (!logSheet) {
      logSheet = spreadsheet.insertSheet('Rebuild Log');
      logSheet.appendRow(['Timestamp', 'User', 'Status', 'Error Message']);
      logSheet.getRange('A1:D1').setFontWeight('bold').setBackground('#4285f4').setFontColor('white');
    }

    // Добавляем запись
    logSheet.appendRow([
      new Date().toLocaleString('ru-RU'),
      Session.getActiveUser().getEmail(),
      status,
      errorMessage
    ]);

    // Автоматически подгоняем ширину колонок
    logSheet.autoResizeColumns(1, 4);

  } catch (error) {
    console.error('Ошибка записи лога:', error);
  }
}

/**
 * Функция для тестирования подключения к GitHub API
 */
function testGitHubConnection() {
  const ui = SpreadsheetApp.getUi();

  if (GITHUB_TOKEN === 'ВАШ_GITHUB_TOKEN_ЗДЕСЬ') {
    ui.alert('❌ Ошибка', 'Настройте GITHUB_TOKEN в скрипте.', ui.ButtonSet.OK);
    return;
  }

  try {
    const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;

    const options = {
      method: 'get',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      },
      muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch(url, options);
    const statusCode = response.getResponseCode();

    if (statusCode === 200) {
      const data = JSON.parse(response.getContentText());
      ui.alert(
        '✅ Подключение успешно',
        `Репозиторий: ${data.full_name}\n` +
        `Описание: ${data.description || 'Нет описания'}\n` +
        `URL: ${data.html_url}`,
        ui.ButtonSet.OK
      );
    } else {
      ui.alert('❌ Ошибка', `GitHub API вернул код ${statusCode}`, ui.ButtonSet.OK);
    }

  } catch (error) {
    ui.alert('❌ Ошибка', `Не удалось подключиться:\n${error.message}`, ui.ButtonSet.OK);
  }
}
