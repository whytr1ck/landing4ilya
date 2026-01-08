# Лендинг студии графического дизайна

Frontend-only сайт для студии графического дизайна.

## Технологии

- **Vue 3.5** — фреймворк
- **Vite 7** — сборка
- **TypeScript** — типизация
- **Tailwind CSS 4** — стили
- **PrimeVue 4** — UI компоненты
- **Pinia** — state management
- **Vue Router** — маршрутизация

## Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для продакшена
npm run build

# Просмотр билда
npm run preview
```

## Структура проекта

```
src/
├── pages/                    # Страницы
│   ├── HomePage.vue          # /
│   ├── PortfolioPage.vue     # /portfolio
│   ├── ClientsPage.vue       # /clients
│   └── CareerPage.vue        # /career
├── components/
│   ├── ui/                   # Header, Footer
│   └── sections/             # Секции страниц
│       ├── home/             # 6 секций
│       ├── portfolio/        # 3 секции
│       ├── clients/          # 4 секции
│       └── career/           # 4 секции
├── router/                   # Vue Router
├── stores/                   # Pinia stores
├── main.ts                   # Точка входа
└── style.css                 # Tailwind + PrimeVue
```

## Страницы

| Путь | Страница | Описание |
|------|----------|----------|
| `/` | Главная | Баннер, портфолио, клиенты, цифры, вакансии |
| `/portfolio` | Портфолио | Кейсы с фильтрацией |
| `/clients` | Клиенты | Список клиентов, отзывы |
| `/career` | Карьера | Вакансии, форма отклика |

## IDE

Рекомендуется [VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

## Документация

- `.claude/ticket.md` — исходная задача
- `.claude/ticket_status.md` — статус выполнения
- `.claude/CLAUDE.md` — правила для AI-ассистента
