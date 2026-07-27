export type Language = 'ru' | 'en' | 'es';

export interface SignalItem {
  sig: string;
  imp: string;
  act: string;
}

export interface FlowStep {
  title: string;
  desc?: string;
  layers?: string[];
}

export interface WhoCard {
  num: string;
  title: string;
  desc: string;
}

export interface PricingPlan {
  tier: string;
  price: string;
  unit: string;
  sub: string;
  items: string[];
  cta: string;
  popular: boolean;
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
    platformShows: string[];
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
    plans: PricingPlan[];
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
        "где теряется клиент",
        "какие каналы работают, а какие нет",
        "что изменить в коммуникации",
        "как перераспределить бюджет, чтобы маркетинг приносил максимальную прибыль",
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
          desc: "Бизнес вводит данные о продукте, аудитории, каналах и текущих маркетинговых показателях.",
        },
        {
          title: "Ядро STRAGY — 4 слоя платформы",
          layers: ["Market layer", "Business layer", "Decision layer", "Planning layer"],
        },
        { title: "Рекомендации", desc: "Приоритетные действия с объяснением причин." },
        { title: "План действий", desc: "Медиаплан и коммуникационная карта по каждому каналу." },
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
      plans: [
        {
          tier: "Starter",
          price: "$49",
          unit: "/мес",
          sub: "Для малого бизнеса",
          items: [
            "До 3 Strategy Workspaces",
            "Доступ к премиальным данным о рынке",
            "AI Decision Engine",
            "Базовые рекомендации",
          ],
          cta: "Начать",
          popular: false,
        },
        {
          tier: "Pro",
          price: "$169",
          unit: "/мес",
          sub: "Для растущего бизнеса",
          items: [
            "До 12 Strategy Workspaces",
            "Расширенная аналитика рынка и конкурентов",
            "Подключение внутренних данных бизнеса",
            "Автоматическое обновление стратегии",
            "Action Plans",
          ],
          cta: "Начать",
          popular: true,
        },
        {
          tier: "Business",
          price: "$539",
          unit: "+/мес",
          sub: "Для multi-brand компаний",
          items: [
            "От 45 Strategy Workspaces",
            "Multi-brand / Multi-market",
            "API и интеграции",
            "Персональный менеджер",
          ],
          cta: "Связаться с нами",
          popular: false,
        },
      ],
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
        "where you are losing customers",
        "which channels are working and which are not",
        "what to change in your communication",
        "how to reallocate budget so marketing delivers maximum profit",
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
          desc: "You share product, audience, channel and current marketing performance data.",
        },
        {
          title: "The STRAGY core — 4 platform layers",
          layers: ["Market layer", "Business layer", "Decision layer", "Planning layer"],
        },
        { title: "Recommendations", desc: "Prioritized actions with the reasoning behind each one." },
        { title: "Action plan", desc: "A media plan and communication map for every channel." },
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
      plans: [
        {
          tier: "Starter",
          price: "$49",
          unit: "/mo",
          sub: "For small businesses",
          items: [
            "Up to 3 Strategy Workspaces",
            "Access to premium market data",
            "AI Decision Engine",
            "Baseline recommendations",
          ],
          cta: "Get started",
          popular: false,
        },
        {
          tier: "Pro",
          price: "$169",
          unit: "/mo",
          sub: "For growing businesses",
          items: [
            "Up to 12 Strategy Workspaces",
            "Advanced market and competitor analytics",
            "Business data integrations",
            "Automatic strategy updates",
            "Action plans",
          ],
          cta: "Get started",
          popular: true,
        },
        {
          tier: "Business",
          price: "$539",
          unit: "+/mo",
          sub: "For multi-brand companies",
          items: [
            "From 45 Strategy Workspaces",
            "Multi-brand / multi-market",
            "API and integrations",
            "Dedicated account manager",
          ],
          cta: "Contact us",
          popular: false,
        },
      ],
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
        "dónde estás perdiendo clientes",
        "qué canales funcionan y cuáles no",
        "qué cambiar en tu comunicación",
        "cómo redistribuir el presupuesto para que el marketing genere el máximo beneficio",
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
          desc: "Compartes datos de producto, audiencia, canales y rendimiento actual de marketing.",
        },
        {
          title: "Núcleo de STRAGY — 4 capas de la plataforma",
          layers: ["Market layer", "Business layer", "Decision layer", "Planning layer"],
        },
        { title: "Recomendaciones", desc: "Acciones priorizadas con la explicación de cada decisión." },
        { title: "Plan de acción", desc: "Plan de medios y mapa de comunicación para cada canal." },
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
      plans: [
        {
          tier: "Starter",
          price: "$49",
          unit: "/mes",
          sub: "Para pequeñas empresas",
          items: [
            "Hasta 3 Strategy Workspaces",
            "Acceso a datos premium del mercado",
            "AI Decision Engine",
            "Recomendaciones básicas",
          ],
          cta: "Empezar",
          popular: false,
        },
        {
          tier: "Pro",
          price: "$169",
          unit: "/mes",
          sub: "Para negocios en crecimiento",
          items: [
            "Hasta 12 Strategy Workspaces",
            "Analítica avanzada de mercado y competidores",
            "Integración con los datos internos del negocio",
            "Actualización automática de la estrategia",
            "Planes de acción",
          ],
          cta: "Empezar",
          popular: true,
        },
        {
          tier: "Business",
          price: "$539",
          unit: "+/mes",
          sub: "Para empresas multi-marca",
          items: [
            "Desde 45 Strategy Workspaces",
            "Multi-marca / multi-mercado",
            "API e integraciones",
            "Gestor de cuenta dedicado",
          ],
          cta: "Contáctanos",
          popular: false,
        },
      ],
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
