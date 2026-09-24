export type Language = 'ru' | 'en' | 'es';

export interface SignalItem {
  sig: string;
  imp: string;
  act: string;
}

export interface FlowStep {
  title: string;
  desc?: string;
  bullets?: string[];
  layers?: { name: string; desc: string }[];
}

export interface PlatformCard {
  title: string;
  desc: string;
}

export interface WhoCard {
  num: string;
  title: string;
  desc: string;
}

export interface PricingPlan {
  tier: string;
  /** Optional — plans without a fixed price show `priceNote` instead */
  price?: string;
  /** Regular price shown struck through (early-bird positioning) */
  oldPrice?: string;
  unit?: string;
  /** Shown instead of the price when the price depends on usage */
  priceNote?: string;
  sub: string;
  items: string[];
  cta: string;
  popular: boolean;
  /** Business-style plan: dashed border, own column, mini label above the tier name */
  separate?: boolean;
  altLabel?: string;
}

export interface Translations {
  seo: {
    title: string;
    description: string;
  };
  header: {
    tryFree: string;
  };
  nav: {
    how: string;
    who: string;
    pricing: string;
    product: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    platformShowsLabel: string;
    platformShows: PlatformCard[];
    ctaSecondary: string;
    // legacy — kept so unrelated components keep compiling
    title: string;
    tagline: string;
    subtitle: string;
    howItWorks: {
      title: string;
      description: string;
      items: string[];
    };
  };
  signals: {
    heading: string;
    sigLabel: string;
    impLabel: string;
    actLabel: string;
    sigIcon: string;
    impIcon: string;
    items: SignalItem[];
  };
  how: {
    badge: string;
    title: string;
    subtitle: string;
    flow: FlowStep[];
    aiExplanation: string;
  };
  diff: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    leftHeader: string;
    rightHeader: string;
    left: string[];
    right: string[];
  };
  who: {
    badge: string;
    title: string;
    cards: WhoCard[];
  };
  pricing: {
    badge: string;
    title: string;
    discount: string;
    recommended: string;
    earlyBirdBadge: string;
    earlyBirdNote: string;
    regularPriceLabel: string;
    testPriceNote: string;
    monthly: string;
    annual: string;
    perYearNote: string;
    plans: PricingPlan[];
    compare: {
      title: string;
      featureLabel: string;
      tiers: string[];
      rows: { label: string; values: string[] }[];
    };
  };
  requestForm: {
    title: string;
    planLabel: string;
    changePlan: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailError: string;
    phoneLabel: string;
    phonePlaceholder: string;
    phoneError: string;
    consentPrefix: string;
    offerLink: string;
    consentMid: string;
    privacyLink: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successText: string;
    errorTitle: string;
    errorText: string;
    retry: string;
    close: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
  };
  features: {
    title: string;
    items: { title: string; description: string }[];
  };
  audience: {
    title: string;
    marketers: { title: string; description: string };
    owners: { title: string; description: string };
  };
  footer: {
    privacy: string;
    product: string;
    pricing: string;
    copyright: string;
  };
  emailDialog: {
    title: string;
    description: string;
    placeholder: string;
    consent: string;
    privacyLink: string;
    submit: string;
    submitting: string;
    errorTitle: string;
    errorDescription: string;
    successTitle: string;
    successDescription: string;
    fallbackTitle: string;
    fallbackDescription: string;
  };
  languageSelector: {
    title: string;
    subtitle: string;
  };
}

const translations: Record<Language, Translations> = {
  ru: {
    seo: {
      title: "STRAGY — платформа маркетинговых решений на основе реальных данных",
      description: "STRAGY автоматически отслеживает изменения на рынке, оценивает их влияние на бизнес и предлагает готовый план маркетинговых действий.",
    },
    header: { tryFree: "Попробовать бесплатно" },
    nav: {
      how: "Как это работает",
      who: "Кому подходит",
      pricing: "Тарифы",
      product: "Продукт",
    },
    hero: {
      badge: "",
      titleStart: "Платформа, которая помогает вашему маркетингу всегда быть",
      titleHighlight: "актуальным",
      description:
        "STRAGY автоматически обнаруживает изменения на рынке, сопоставляет их с показателями бизнеса, оценивает влияние на маркетинговую эффективность и предлагает обновления стратегии с объяснением причин.",
      platformShowsLabel: "Что доступно на платформе:",
      platformShows: [
        { title: "Анализ рынка и конкурентов", desc: "Данные о спросе, конкурентах и возможностях рынка." },
        { title: "Стратегия роста", desc: "План действий для привлечения новых клиентов." },
        { title: "Стратегия удержания", desc: "Рекомендации по увеличению повторных продаж и лояльности." },
        { title: "Рекламный бюджет", desc: "Распределение бюджета с обоснованием." },
        { title: "Анализ потерь клиентов", desc: "Точки, где компания теряет клиентов и как это исправить." },
      ],
      ctaSecondary: "Как это работает",
      title: "STRAGY",
      tagline: "СЕРВИС МАРКЕТИНГОВЫХ СТРАТЕГИЙ",
      subtitle:
        "ПОШАГОВАЯ МАРКЕТИНГОВАЯ СТРАТЕГИЯ НА ОСНОВЕ РЕАЛЬНЫХ ДАННЫХ ВАШЕГО РЫНКА",
      howItWorks: {
        title: "КАК ЭТО РАБОТАЕТ",
        description:
          "Вы вводите информацию о своем бизнесе и получаете стратегический анализ, основанный на реальных данных",
        items: ["о вашем рынке", "вашей аудитории", "конкурентах", "пошаговый план маркетинговых действий"],
      },
    },
    signals: {
      heading: "Что изменилось на этой неделе",
      sigLabel: "Сигнал рынка",
      impLabel: "Влияние на бизнес",
      actLabel: "Действие STRAGY",
      sigIcon: "СИГ",
      impIcon: "ВЛ",
      items: [
        {
          sig: "Появился новый конкурент в вашей категории",
          imp: "Стоимость привлечения клиента выросла на <b>18%</b>",
          act: "Перераспределить 12% бюджета на органические каналы",
        },
        {
          sig: "Спрос сместился в сторону мобильного трафика",
          imp: "Конверсия десктоп-кампаний упала на <b>9%</b>",
          act: "Обновить креативы под мобильный формат",
        },
        {
          sig: "Конкурент снизил цену на ключевую позицию",
          imp: "CTR в поиске снизился на <b>14%</b>",
          act: "Скорректировать оффер и ставки в течение 48 часов",
        },
      ],
    },
    how: {
      badge: "Как это работает",
      title: "От ваших данных — к готовому плану действий",
      subtitle: "Одна система вместо десятка разрозненных инструментов и ручных отчётов.",
      flow: [
        {
          title: "Входные данные",
          desc: "Введите информацию о своём продукте, целях и текущих действиях для продвижения на платформе.",
        },
        {
          title: "Ядро STRAGY — 4 слоя платформы",
          layers: [
            { name: "Market Layer", desc: "Анализирует рынок, конкурентов и целевую аудиторию на основе внешних аналитических данных." },
            { name: "Business Layer", desc: "Объединяет рыночные данные с данными вашего бизнеса, целями и маркетинговыми задачами." },
            { name: "Decision Layer", desc: "Определяет возможности роста и формирует персонализированную маркетинговую стратегию." },
            { name: "Planning Layer", desc: "Создаёт пошаговый план реализации стратегии с конкретными действиями и приоритетами." },
          ],
        },
        {
          title: "Результат",
          bullets: [
            "Карта пути клиента",
            "Коммуникационная карта с платными и бесплатными рекламными каналами",
            "Медиаплан с KPI и бюджетированием",
          ],
        },
      ],
      aiExplanation:
        "AI сопоставляет внутренние изменения (падение эффективности рекламы, снижение конверсии, рост стоимости привлечения) с внешними событиями (рост активности конкурентов, изменение спроса, новые игроки на рынке) и формирует список приоритетных действий с объяснением причин.",
    },
    diff: {
      badge: "Отличие",
      titleLine1: "Большинство платформ помогают анализировать данные.",
      titleLine2: "STRAGY помогает принимать решения.",
      leftHeader: "Большинство платформ",
      rightHeader: "STRAGY",
      left: [
        "Показывают, что произошло",
        "Требуют аналитика для интерпретации",
        "Дают dashboard",
      ],
      right: [
        "Объясняет, почему это произошло",
        "Сразу показывает влияние на бизнес",
        "Даёт план действий",
      ],
    },
    who: {
      badge: "Кому подходит",
      title: "Для тех, кто уже вкладывает в маркетинг",
      cards: [
        {
          num: "01",
          title: "Малый и средний бизнес с любым рекламным бюджетом",
          desc: "Компании, которым нужна экспертная стратегия без найма дорогостоящих специалистов.",
        },
        {
          num: "02",
          title: "Performance-агентства и маркетинговые консалтинги",
          desc: "Ведут несколько клиентских проектов и которым нужна единая система для всех.",
        },
        {
          num: "03",
          title: "Multi-brand и multi-market компании",
          desc: "Нужно синхронизировать маркетинговые решения между несколькими рынками.",
        },
      ],
    },
    pricing: {
      badge: "Тарифы",
      title: "Тарифы STRAGY",
      discount: "💳 Годовая оплата — экономия 20%",
      recommended: "Рекомендуемый",
      earlyBirdBadge: "🚀 Выходим в продакшн",
      earlyBirdNote: "Специальные условия для первых клиентов — цена фиксируется навсегда",
      regularPriceLabel: "Обычная цена",
      testPriceNote: "Цена тестового периода",
      monthly: "Ежемесячно",
      annual: "Годовая оплата −20%",
      perYearNote: "цена при годовой оплате",
      plans: [
        {
          tier: "Starter",
          price: "$49",
          oldPrice: "$59",
          unit: "/мес",
          sub: "Для старта на платформе",
          items: [
            "3 Strategy Workspaces",
            "Полный анализ: рынок, конкуренты, ЦА, SWOT",
            "Карта пути клиента и медиаплан",
            "Ежемесячное обновление стратегии",
          ],
          cta: "Начать",
          popular: false,
        },
        {
          tier: "Growth",
          price: "$129",
          oldPrice: "$159",
          unit: "/мес",
          sub: "Для роста и тестирования гипотез",
          items: [
            "8 Strategy Workspaces",
            "Всё из Starter",
            "Точки потерь клиентов на карте пути",
            "Свои данные: 1 файл в каждый workspace",
          ],
          cta: "Начать",
          popular: false,
        },
        {
          tier: "Pro",
          price: "$189",
          oldPrice: "$239",
          unit: "/мес",
          sub: "Для системного маркетинга",
          items: [
            "12 Strategy Workspaces",
            "Всё из Growth",
            "Свои данные: до 5 файлов в каждый workspace",
            "Action Plan и еженедельные корректировки",
            "Скачивание стратегии в PDF",
          ],
          cta: "Начать",
          popular: true,
        },
        {
          tier: "Business",
          altLabel: "Для рекламных агентств",
          separate: true,
          priceNote: "По запросу",
          sub: "Для агентств и multi-brand компаний",
          items: [
            "Всё из Pro",
            "Кастомные доработки под клиента",
            "Скачивание стратегии в PDF",
          ],
          cta: "Связаться с нами",
          popular: false,
        },
      ],
      compare: {
        title: "Сравнение функций тарифов",
        featureLabel: "Функция",
        tiers: ["Starter", "Growth", "Pro", "Business"],
        rows: [
          { label: "Цена в месяц", values: ["$49", "$129", "$189", "По запросу"] },
          { label: "Workspace (стратегии)", values: ["3", "8", "12", "По запросу"] },
          { label: "Закрытые аналитические данные", values: ["Да", "Да", "Да", "Да"] },
          { label: "Анализ конкурентов", values: ["Да", "Да", "Да", "Да"] },
          { label: "Анализ целевой аудитории", values: ["Да", "Да", "Да", "Да"] },
          { label: "Анализ рынка", values: ["Да", "Да", "Да", "Да"] },
          { label: "SWOT-анализ", values: ["Да", "Да", "Да", "Да"] },
          { label: "Карта пути клиента", values: ["Да", "Да", "Да", "Да"] },
          { label: "Коммуникационная карта", values: ["Да", "Да", "Да", "Да"] },
          { label: "Медиаплан", values: ["Да", "Да", "Да", "Да"] },
          { label: "Платные каналы размещения", values: ["Да", "Да", "Да", "Да"] },
          { label: "Бесплатные каналы размещения", values: ["—", "Да", "Да", "Да"] },
          { label: "Ежемесячное обновление стратегии (рынок, конкуренты, поведение аудитории)", values: ["Да", "Да", "Да", "Да"] },
          { label: "Точки потерь клиентов на карте пути", values: ["—", "Да", "Да", "Да"] },
          { label: "Подключение своих данных", values: ["—", "1 источник в каждый workspace", "До 5 источников в каждый workspace", "До 5 файлов в каждый workspace"] },
          { label: "Учёт файла в ежемесячном обновлении и рекомендации: что идёт хорошо, что плохо, что изменить", values: ["—", "Да (по 1 файлу)", "Да (до 5 файлов)", "Да (до 5 файлов)"] },
          { label: "Action Plan: сверка реализации с поставленными целями", values: ["—", "—", "Да", "Да"] },
          { label: "Ежемесячные корректировки стратегии и рекламы", values: ["Да", "Да", "Да", "Да"] },
          { label: "Еженедельные корректировки стратегии и рекламы", values: ["—", "—", "Да", "Да"] },
          { label: "Скачивание стратегии в PDF", values: ["—", "—", "Да", "Да"] },
          { label: "Кастомные доработки под клиента", values: ["—", "—", "—", "Да"] },
        ],
      },
    },
    requestForm: {
      title: "Заявка на тариф «{plan}»",
      planLabel: "Тариф",
      changePlan: "Изменить тариф",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      emailError: "Введите корректный email",
      phoneLabel: "Телефон",
      phonePlaceholder: "+375 (__) ___-__-__",
      phoneError: "Введите корректный номер телефона",
      geoLabel: "Гео / регион",
      geoPlaceholder: "Например: ОАЭ, Москва",
      geoError: "Укажите ваш регион",
      consentPrefix: "Я ознакомлен(а) и согласен(на) с условиями ",
      offerLink: "Договора публичной оферты",
      consentMid: " и даю согласие на обработку персональных данных в соответствии с ",
      privacyLink: "Политикой обработки персональных данных",
      submit: "Отправить заявку",
      submitting: "Отправляем…",
      successTitle: "Спасибо! Заявка принята.",
      successText: "Наш менеджер свяжется с вами в ближайшее время по указанному телефону или email, уточнит реквизиты для выставления счёта. Доступ к платформе откроется сразу после поступления оплаты.",
      errorTitle: "Не удалось отправить заявку",
      errorText: "Проверьте соединение и попробуйте ещё раз — введённые данные сохранены.",
      retry: "Повторить",
      close: "Закрыть",
    },
    finalCta: {
      title: "Готовы избавиться от устаревших стратегий?",
      subtitle: "Запросите доступ и получите первую диагностику вашей маркетинговой стратегии.",
    },
    features: { title: "", items: [] },
    audience: {
      title: "",
      marketers: { title: "", description: "" },
      owners: { title: "", description: "" },
    },
    footer: {
      privacy: "Политика конфиденциальности",
      product: "Продукт",
      pricing: "Тарифы",
      copyright: "© 2026 STRAGY",
    },
    emailDialog: {
      title: "Получить доступ к STRAGY",
      description:
        "Введите адрес электронной почты, на которую мы предоставим доступ к сервису STRAGY. Следуйте инструкциям в письме.",
      placeholder: "your@email.com",
      consent: "Я согласен на обработку персональных данных в соответствии с",
      privacyLink: "Политикой конфиденциальности",
      submit: "Получить доступ",
      submitting: "Отправляем...",
      errorTitle: "Ошибка",
      errorDescription: "Пожалуйста, заполните все поля и дайте согласие на обработку данных",
      successTitle: "Успешно!",
      successDescription: "Проверьте почту — мы отправили инструкции для доступа к STRAGY",
      fallbackTitle: "Заявка принята!",
      fallbackDescription: "Мы свяжемся с вами в ближайшее время",
    },
    languageSelector: {
      title: "Выберите язык",
      subtitle: "Choose your language",
    },
  },

  en: {
    seo: {
      title: "STRAGY — real-time marketing decision intelligence platform",
      description:
        "STRAGY automatically detects market changes, measures their impact on your business and delivers a ready-to-execute marketing action plan.",
    },
    header: { tryFree: "Try for free" },
    nav: {
      how: "How it works",
      who: "Who it's for",
      pricing: "Pricing",
      product: "Product",
    },
    hero: {
      badge: "",
      titleStart: "The platform that keeps your marketing continuously",
      titleHighlight: "up to date",
      description:
        "STRAGY automatically detects market changes, correlates them with your business metrics, quantifies the impact on marketing performance and recommends strategy updates — with a clear explanation of why.",
      platformShowsLabel: "What’s available on the platform:",
      platformShows: [
        { title: "Market & competitor analysis", desc: "Data on demand, competitors and market opportunities." },
        { title: "Growth strategy", desc: "An action plan to acquire new customers." },
        { title: "Retention strategy", desc: "Recommendations to boost repeat sales and loyalty." },
        { title: "Advertising budget", desc: "Budget allocation with a clear rationale." },
        { title: "Customer loss analysis", desc: "The points where you lose customers — and how to fix them." },
      ],
      ctaSecondary: "See how it works",
      title: "STRAGY",
      tagline: "MARKETING STRATEGY SERVICE",
      subtitle: "STEP-BY-STEP MARKETING STRATEGY BASED ON REAL DATA FROM YOUR MARKET",
      howItWorks: {
        title: "HOW IT WORKS",
        description:
          "You enter information about your business and receive a strategic analysis grounded in real data",
        items: [
          "about your market",
          "your audience",
          "competitors",
          "a step-by-step marketing action plan",
        ],
      },
    },
    signals: {
      heading: "What changed this week",
      sigLabel: "Market signal",
      impLabel: "Business impact",
      actLabel: "STRAGY action",
      sigIcon: "SIG",
      impIcon: "IMP",
      items: [
        {
          sig: "A new competitor has entered your category",
          imp: "Customer acquisition cost is up <b>18%</b>",
          act: "Reallocate 12% of budget to organic channels",
        },
        {
          sig: "Demand has shifted toward mobile traffic",
          imp: "Desktop campaign conversion dropped <b>9%</b>",
          act: "Refresh creatives for mobile-first formats",
        },
        {
          sig: "A competitor cut the price on a key SKU",
          imp: "Search CTR fell by <b>14%</b>",
          act: "Adjust offer and bids within the next 48 hours",
        },
      ],
    },
    how: {
      badge: "How it works",
      title: "From your data to a ready-to-execute action plan",
      subtitle: "One system instead of a dozen disconnected tools and manual reports.",
      flow: [
        {
          title: "Inputs",
          desc: "You provide information about your product, goals and current promotion activities on the platform.",
        },
        {
          title: "The STRAGY core — 4 platform layers",
          layers: [
            { name: "Market Layer", desc: "Analyzes the market, competitors and target audience using external analytics data." },
            { name: "Business Layer", desc: "Combines market data with your business data, goals and marketing objectives." },
            { name: "Decision Layer", desc: "Identifies growth opportunities and builds a personalized marketing strategy." },
            { name: "Planning Layer", desc: "Creates a step-by-step execution plan with concrete actions and priorities." },
          ],
        },
        {
          title: "Result",
          bullets: [
            "Customer journey map",
            "Communication map across paid and organic channels",
            "Media plan with KPIs and budgeting",
          ],
        },
      ],
      aiExplanation:
        "AI correlates internal shifts (declining ad efficiency, lower conversion, rising acquisition cost) with external events (competitor activity, demand changes, new market entrants) and produces a prioritized list of actions — each one explained.",
    },
    diff: {
      badge: "What sets us apart",
      titleLine1: "Most platforms help you analyze data.",
      titleLine2: "STRAGY helps you make decisions.",
      leftHeader: "Most platforms",
      rightHeader: "STRAGY",
      left: [
        "Show you what happened",
        "Require an analyst to interpret",
        "Give you a dashboard",
      ],
      right: [
        "Explains why it happened",
        "Immediately shows business impact",
        "Delivers a concrete action plan",
      ],
    },
    who: {
      badge: "Who it's for",
      title: "For teams already investing in marketing",
      cards: [
        {
          num: "01",
          title: "Small and medium businesses with any advertising budget",
          desc: "Companies that need expert strategy without hiring an in-house team of specialists.",
        },
        {
          num: "02",
          title: "Performance agencies and marketing consultancies",
          desc: "Running multiple client accounts and needing a single system across all of them.",
        },
        {
          num: "03",
          title: "Multi-brand and multi-market companies",
          desc: "Teams that need to synchronize marketing decisions across several markets at once.",
        },
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "STRAGY Pricing",
      discount: "💳 Annual billing — save 20%",
      recommended: "Recommended",
      earlyBirdBadge: "🚀 Going to production",
      earlyBirdNote: "Special terms for our first customers — your price is locked in forever",
      regularPriceLabel: "Regular price",
      testPriceNote: "Test period price",
      monthly: "Monthly",
      annual: "Annual billing −20%",
      perYearNote: "price with annual billing",
      plans: [
        {
          tier: "Starter",
          price: "$49",
          oldPrice: "$59",
          unit: "/mo",
          sub: "For getting started on the platform",
          items: [
            "3 Strategy Workspaces",
            "Full analysis: market, competitors, audience, SWOT",
            "Customer journey map and media plan",
            "Monthly strategy update",
          ],
          cta: "Get started",
          popular: false,
        },
        {
          tier: "Growth",
          price: "$129",
          oldPrice: "$159",
          unit: "/mo",
          sub: "For growth and testing hypotheses",
          items: [
            "8 Strategy Workspaces",
            "Everything in Starter",
            "Customer loss points on the journey map",
            "Own data: 1 file per workspace",
          ],
          cta: "Get started",
          popular: false,
        },
        {
          tier: "Pro",
          price: "$189",
          oldPrice: "$239",
          unit: "/mo",
          sub: "For systematic marketing",
          items: [
            "12 Strategy Workspaces",
            "Everything in Growth",
            "Own data: up to 5 files per workspace",
            "Action plans and weekly adjustments",
            "Strategy download as PDF",
          ],
          cta: "Get started",
          popular: true,
        },
        {
          tier: "Business",
          altLabel: "For advertising agencies",
          separate: true,
          priceNote: "On request",
          sub: "For agencies and multi-brand companies",
          items: [
            "Everything in Pro",
            "Custom client-specific development",
            "Strategy download as PDF",
          ],
          cta: "Contact us",
          popular: false,
        },
      ],
      compare: {
        title: "Plan feature comparison",
        featureLabel: "Feature",
        tiers: ["Starter", "Growth", "Pro", "Business"],
        rows: [
          { label: "Price per month", values: ["$49", "$129", "$189", "On request"] },
          { label: "Workspaces (strategies)", values: ["3", "8", "12", "On request"] },
          { label: "Closed analytics data", values: ["Yes", "Yes", "Yes", "Yes"] },
          { label: "Competitor analysis", values: ["Yes", "Yes", "Yes", "Yes"] },
          { label: "Target audience analysis", values: ["Yes", "Yes", "Yes", "Yes"] },
          { label: "Market analysis", values: ["Yes", "Yes", "Yes", "Yes"] },
          { label: "SWOT analysis", values: ["Yes", "Yes", "Yes", "Yes"] },
          { label: "Customer journey map", values: ["Yes", "Yes", "Yes", "Yes"] },
          { label: "Communication map", values: ["Yes", "Yes", "Yes", "Yes"] },
          { label: "Media plan", values: ["Yes", "Yes", "Yes", "Yes"] },
          { label: "Paid placement channels", values: ["Yes", "Yes", "Yes", "Yes"] },
          { label: "Free placement channels", values: ["—", "Yes", "Yes", "Yes"] },
          { label: "Monthly strategy update (market, competitors, audience behavior)", values: ["Yes", "Yes", "Yes", "Yes"] },
          { label: "Customer loss points on the journey map", values: ["—", "Yes", "Yes", "Yes"] },
          { label: "Connect your own data", values: ["—", "1 source per workspace", "Up to 5 sources per workspace", "Up to 5 files per workspace"] },
          { label: "File included in the monthly update with recommendations: what's going well, what's not, what to change", values: ["—", "Yes (1 file)", "Yes (up to 5 files)", "Yes (up to 5 files)"] },
          { label: "Action Plan: checking delivery against the set goals", values: ["—", "—", "Yes", "Yes"] },
          { label: "Monthly strategy and ad adjustments", values: ["Yes", "Yes", "Yes", "Yes"] },
          { label: "Weekly strategy and ad adjustments", values: ["—", "—", "Yes", "Yes"] },
          { label: "Strategy download as PDF", values: ["—", "—", "Yes", "Yes"] },
          { label: "Custom client-specific development", values: ["—", "—", "—", "Yes"] },
        ],
      },
    },
    requestForm: {
      title: "Request for the  \u201C{plan}\u201D plan",
      planLabel: "Plan",
      changePlan: "Change plan",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      emailError: "Enter a valid email address",
      phoneLabel: "Phone",
      phonePlaceholder: "+1 (___) ___-____",
      phoneError: "Enter a valid phone number",
      consentPrefix: "I have read and agree to the ",
      offerLink: "Public Offer Agreement",
      consentMid: " and consent to the processing of my personal data in accordance with the ",
      privacyLink: "Personal Data Processing Policy",
      submit: "Send request",
      submitting: "Sending…",
      successTitle: "Thank you! Your request has been received.",
      successText: "Our manager will contact you shortly by the phone number or email you provided and will confirm the billing details for the invoice. Platform access opens as soon as the payment is received.",
      errorTitle: "Could not send the request",
      errorText: "Check your connection and try again — the data you entered has been kept.",
      retry: "Try again",
      close: "Close",
    },
    finalCta: {
      title: "Ready to move past outdated strategies?",
      subtitle: "Request access and get the first diagnostic of your marketing strategy.",
    },
    features: { title: "", items: [] },
    audience: {
      title: "",
      marketers: { title: "", description: "" },
      owners: { title: "", description: "" },
    },
    footer: {
      privacy: "Privacy Policy",
      product: "Product",
      pricing: "Pricing",
      copyright: "© 2026 STRAGY",
    },
    emailDialog: {
      title: "Get access to STRAGY",
      description:
        "Enter the email address where we will send your access to STRAGY. Follow the instructions in the message.",
      placeholder: "your@email.com",
      consent: "I agree to the processing of my personal data in accordance with the",
      privacyLink: "Privacy Policy",
      submit: "Get access",
      submitting: "Sending...",
      errorTitle: "Error",
      errorDescription: "Please fill in all fields and confirm your consent to data processing",
      successTitle: "Success!",
      successDescription: "Check your inbox — we've sent your STRAGY access instructions",
      fallbackTitle: "Request received!",
      fallbackDescription: "We'll be in touch shortly",
    },
    languageSelector: { title: "Choose your language", subtitle: "Выберите язык" },
  },

  es: {
    seo: {
      title: "STRAGY — plataforma de decisiones de marketing en tiempo real",
      description:
        "STRAGY detecta automáticamente los cambios del mercado, mide su impacto en tu negocio y entrega un plan de marketing listo para ejecutar.",
    },
    header: { tryFree: "Probar gratis" },
    nav: {
      how: "Cómo funciona",
      who: "Para quién es",
      pricing: "Precios",
      product: "Producto",
    },
    hero: {
      badge: "",
      titleStart: "La plataforma que mantiene tu marketing siempre",
      titleHighlight: "actualizado",
      description:
        "STRAGY detecta automáticamente los cambios del mercado, los correlaciona con los indicadores de tu negocio, mide su impacto en el rendimiento de marketing y propone actualizaciones de estrategia — con una explicación clara del porqué.",
      platformShowsLabel: "Qué está disponible en la plataforma:",
      platformShows: [
        { title: "Análisis de mercado y competidores", desc: "Datos sobre demanda, competidores y oportunidades de mercado." },
        { title: "Estrategia de crecimiento", desc: "Plan de acciones para captar nuevos clientes." },
        { title: "Estrategia de retención", desc: "Recomendaciones para aumentar la recompra y la fidelidad." },
        { title: "Presupuesto publicitario", desc: "Distribución del presupuesto con justificación." },
        { title: "Análisis de pérdida de clientes", desc: "Puntos donde la empresa pierde clientes y cómo solucionarlo." },
      ],
      ctaSecondary: "Ver cómo funciona",
      title: "STRAGY",
      tagline: "SERVICIO DE ESTRATEGIAS DE MARKETING",
      subtitle: "ESTRATEGIA DE MARKETING PASO A PASO BASADA EN DATOS REALES DE TU MERCADO",
      howItWorks: {
        title: "CÓMO FUNCIONA",
        description:
          "Introduces la información de tu negocio y recibes un análisis estratégico basado en datos reales",
        items: [
          "de tu mercado",
          "tu audiencia",
          "competidores",
          "un plan de acción de marketing paso a paso",
        ],
      },
    },
    signals: {
      heading: "Qué ha cambiado esta semana",
      sigLabel: "Señal de mercado",
      impLabel: "Impacto en el negocio",
      actLabel: "Acción de STRAGY",
      sigIcon: "SEÑ",
      impIcon: "IMP",
      items: [
        {
          sig: "Ha aparecido un nuevo competidor en tu categoría",
          imp: "El coste de adquisición de clientes ha subido un <b>18%</b>",
          act: "Reasignar el 12% del presupuesto a canales orgánicos",
        },
        {
          sig: "La demanda se ha desplazado hacia el tráfico móvil",
          imp: "La conversión de las campañas de escritorio cayó un <b>9%</b>",
          act: "Actualizar los creativos a formatos mobile-first",
        },
        {
          sig: "Un competidor ha bajado el precio en una posición clave",
          imp: "El CTR en búsqueda bajó un <b>14%</b>",
          act: "Ajustar la oferta y las pujas en las próximas 48 horas",
        },
      ],
    },
    how: {
      badge: "Cómo funciona",
      title: "De tus datos a un plan de acción listo para ejecutar",
      subtitle: "Un solo sistema en lugar de decenas de herramientas dispersas e informes manuales.",
      flow: [
        {
          title: "Datos de entrada",
          desc: "Introduces información sobre tu producto, objetivos y acciones actuales de promoción en la plataforma.",
        },
        {
          title: "Núcleo de STRAGY — 4 capas de la plataforma",
          layers: [
            { name: "Market Layer", desc: "Analiza el mercado, los competidores y la audiencia objetivo con datos analíticos externos." },
            { name: "Business Layer", desc: "Combina los datos de mercado con los datos de tu negocio, tus objetivos y tus tareas de marketing." },
            { name: "Decision Layer", desc: "Identifica oportunidades de crecimiento y construye una estrategia de marketing personalizada." },
            { name: "Planning Layer", desc: "Crea un plan de ejecución paso a paso con acciones concretas y prioridades." },
          ],
        },
        {
          title: "Resultado",
          bullets: [
            "Mapa del recorrido del cliente",
            "Mapa de comunicación con canales publicitarios de pago y gratuitos",
            "Plan de medios con KPI y presupuesto",
          ],
        },
      ],
      aiExplanation:
        "La IA correlaciona los cambios internos (caída de eficacia publicitaria, menor conversión, mayor coste de adquisición) con los eventos externos (mayor actividad de competidores, cambios en la demanda, nuevos jugadores) y genera una lista priorizada de acciones — cada una explicada.",
    },
    diff: {
      badge: "Lo que nos diferencia",
      titleLine1: "La mayoría de plataformas te ayudan a analizar datos.",
      titleLine2: "STRAGY te ayuda a tomar decisiones.",
      leftHeader: "La mayoría de plataformas",
      rightHeader: "STRAGY",
      left: [
        "Muestran lo que ha pasado",
        "Requieren un analista para interpretar",
        "Te dan un dashboard",
      ],
      right: [
        "Explica por qué ha pasado",
        "Muestra al instante el impacto en el negocio",
        "Entrega un plan de acción concreto",
      ],
    },
    who: {
      badge: "Para quién es",
      title: "Para quienes ya invierten en marketing",
      cards: [
        {
          num: "01",
          title: "Pequeñas y medianas empresas con cualquier presupuesto publicitario",
          desc: "Empresas que necesitan una estrategia experta sin contratar un equipo interno de especialistas.",
        },
        {
          num: "02",
          title: "Agencias de performance y consultorías de marketing",
          desc: "Que gestionan varios proyectos de cliente y necesitan un sistema único para todos.",
        },
        {
          num: "03",
          title: "Empresas multi-marca y multi-mercado",
          desc: "Equipos que necesitan sincronizar las decisiones de marketing entre varios mercados a la vez.",
        },
      ],
    },
    pricing: {
      badge: "Precios",
      title: "Precios STRAGY",
      discount: "💳 Facturación anual — ahorra 20%",
      recommended: "Recomendado",
      earlyBirdBadge: "🚀 Vamos a producción",
      earlyBirdNote: "Condiciones especiales para los primeros clientes: tu precio queda fijado para siempre",
      regularPriceLabel: "Precio habitual",
      testPriceNote: "Precio del periodo de prueba",
      monthly: "Mensual",
      annual: "Pago anual −20%",
      perYearNote: "precio con pago anual",
      plans: [
        {
          tier: "Starter",
          price: "$49",
          oldPrice: "$59",
          unit: "/mes",
          sub: "Para empezar en la plataforma",
          items: [
            "3 Strategy Workspaces",
            "Análisis completo: mercado, competencia, público, FODA",
            "Mapa del recorrido del cliente y plan de medios",
            "Actualización mensual de la estrategia",
          ],
          cta: "Empezar",
          popular: false,
        },
        {
          tier: "Growth",
          price: "$129",
          oldPrice: "$159",
          unit: "/mes",
          sub: "Para crecer y probar hipótesis",
          items: [
            "8 Strategy Workspaces",
            "Todo lo de Starter",
            "Puntos de pérdida de clientes en el mapa",
            "Datos propios: 1 archivo por workspace",
          ],
          cta: "Empezar",
          popular: false,
        },
        {
          tier: "Pro",
          price: "$189",
          oldPrice: "$239",
          unit: "/mes",
          sub: "Para un marketing sistemático",
          items: [
            "12 Strategy Workspaces",
            "Todo lo de Growth",
            "Datos propios: hasta 5 archivos por workspace",
            "Planes de acción y ajustes semanales",
            "Descarga de la estrategia en PDF",
          ],
          cta: "Empezar",
          popular: true,
        },
        {
          tier: "Business",
          altLabel: "Para agencias de publicidad",
          separate: true,
          priceNote: "El precio depende del número de estrategias",
          sub: "Para agencias y empresas multi-marca",
          items: [
            "Desde 40 Strategy Workspaces",
            "Todo lo de Pro",
            "Desarrollos personalizados para el cliente",
            "Descarga de la estrategia en PDF",
          ],
          cta: "Contáctanos",
          popular: false,
        },
      ],
      compare: {
        title: "Comparación de funciones de los planes",
        featureLabel: "Función",
        tiers: ["Starter", "Growth", "Pro", "Business"],
        rows: [
          { label: "Precio al mes", values: ["$49", "$129", "$189", "A consultar (actualmente $539)"] },
          { label: "Workspaces (estrategias)", values: ["3", "8", "12", "40+"] },
          { label: "Datos analíticos cerrados", values: ["Sí", "Sí", "Sí", "Sí"] },
          { label: "Análisis de la competencia", values: ["Sí", "Sí", "Sí", "Sí"] },
          { label: "Análisis del público objetivo", values: ["Sí", "Sí", "Sí", "Sí"] },
          { label: "Análisis de mercado", values: ["Sí", "Sí", "Sí", "Sí"] },
          { label: "Análisis FODA", values: ["Sí", "Sí", "Sí", "Sí"] },
          { label: "Mapa del recorrido del cliente", values: ["Sí", "Sí", "Sí", "Sí"] },
          { label: "Mapa de comunicación", values: ["Sí", "Sí", "Sí", "Sí"] },
          { label: "Plan de medios", values: ["Sí", "Sí", "Sí", "Sí"] },
          { label: "Actualización mensual de la estrategia (mercado, competencia, comportamiento del público)", values: ["Sí", "Sí", "Sí", "Sí"] },
          { label: "Puntos de pérdida de clientes en el mapa del recorrido", values: ["—", "Sí", "Sí", "Sí"] },
          { label: "Conexión de tus propios datos", values: ["—", "1 fuente por workspace", "Hasta 5 fuentes por workspace", "Hasta 5 archivos por workspace"] },
          { label: "Archivo incluido en la actualización mensual con recomendaciones: qué va bien, qué va mal y qué cambiar", values: ["—", "Sí (1 archivo)", "Sí (hasta 5 archivos)", "Sí (hasta 5 archivos)"] },
          { label: "Action Plan: comparación de la ejecución con los objetivos marcados", values: ["—", "—", "Sí", "Sí"] },
          { label: "Ajustes semanales y mensuales de estrategia y publicidad", values: ["—", "—", "Sí", "Sí"] },
          { label: "Descarga de la estrategia en PDF", values: ["—", "—", "Sí", "Sí"] },
          { label: "Desarrollos personalizados para el cliente", values: ["—", "—", "—", "Sí"] },
        ],
      },
    },
    requestForm: {
      title: "Solicitud para el plan  \u201C{plan}\u201D",
      planLabel: "Plan",
      changePlan: "Cambiar de plan",
      emailLabel: "Email",
      emailPlaceholder: "tu@empresa.com",
      emailError: "Introduce un email válido",
      phoneLabel: "Teléfono",
      phonePlaceholder: "+34 ___ ___ ___",
      phoneError: "Introduce un número de teléfono válido",
      consentPrefix: "He leído y acepto las condiciones del ",
      offerLink: "Contrato de oferta pública",
      consentMid: " y doy mi consentimiento para el tratamiento de mis datos personales conforme a la ",
      privacyLink: "Política de tratamiento de datos personales",
      submit: "Enviar solicitud",
      submitting: "Enviando…",
      successTitle: "¡Gracias! Hemos recibido tu solicitud.",
      successText: "Nuestro gestor se pondrá en contacto contigo en breve por el teléfono o email indicado y confirmará los datos para emitir la factura. El acceso a la plataforma se activa en cuanto se recibe el pago.",
      errorTitle: "No se pudo enviar la solicitud",
      errorText: "Comprueba tu conexión e inténtalo de nuevo: los datos introducidos se han conservado.",
      retry: "Reintentar",
      close: "Cerrar",
    },
    finalCta: {
      title: "¿Listo para dejar atrás las estrategias obsoletas?",
      subtitle: "Solicita acceso y recibe el primer diagnóstico de tu estrategia de marketing.",
    },
    features: { title: "", items: [] },
    audience: {
      title: "",
      marketers: { title: "", description: "" },
      owners: { title: "", description: "" },
    },
    footer: {
      privacy: "Política de Privacidad",
      product: "Producto",
      pricing: "Precios",
      copyright: "© 2026 STRAGY",
    },
    emailDialog: {
      title: "Obtener acceso a STRAGY",
      description:
        "Introduce la dirección de correo donde te enviaremos el acceso al servicio STRAGY. Sigue las instrucciones del mensaje.",
      placeholder: "tu@email.com",
      consent: "Acepto el tratamiento de mis datos personales de acuerdo con la",
      privacyLink: "Política de Privacidad",
      submit: "Obtener acceso",
      submitting: "Enviando...",
      errorTitle: "Error",
      errorDescription: "Por favor, completa todos los campos y acepta el tratamiento de datos",
      successTitle: "¡Éxito!",
      successDescription: "Revisa tu correo — te hemos enviado las instrucciones para acceder a STRAGY",
      fallbackTitle: "¡Solicitud recibida!",
      fallbackDescription: "Nos pondremos en contacto contigo en breve",
    },
    languageSelector: { title: "Elige tu idioma", subtitle: "Choose your language" },
  },
};

export const getTranslations = (lang: Language): Translations => {
  return translations[lang] || translations.ru;
};

export const getLanguageFromPath = (pathname: string): Language | null => {
  if (pathname.startsWith('/eng')) return 'en';
  if (pathname.startsWith('/es')) return 'es';
  if (pathname.startsWith('/ru')) return 'ru';
  return null;
};

export const getPathForLanguage = (lang: Language): string => {
  switch (lang) {
    case 'en': return '/eng';
    case 'es': return '/es';
    case 'ru': return '/ru';
  }
};

export const LANGUAGE_STORAGE_KEY = 'stragy-language';
