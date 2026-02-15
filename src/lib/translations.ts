export type Language = 'ru' | 'en' | 'es';

export interface Translations {
  header: {
    tryFree: string;
  };
  hero: {
    title: string;
    subtitle: string;
    benefits: {
      title: string;
      items: string[];
    };
  };
  features: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  audience: {
    title: string;
    marketers: {
      title: string;
      description: string;
    };
    owners: {
      title: string;
      description: string;
    };
  };
  footer: {
    privacy: string;
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
    header: {
      tryFree: "Попробовать бесплатно",
    },
    hero: {
      title: "STRAGY. ОДИН СЕРВИС - ВЕСЬ МАРКЕТИНГ",
      subtitle: "STRAGY — умная SaaS-платформа для создания маркетинговой стратегии в несколько кликов.",
      benefits: {
        title: "Вы получите:",
        items: [
          "Готовую маркетинговую стратегию с пошаговым планом",
          "Точный расчёт рекламного бюджета",
          "Анализ рынка и конкурентов",
          "Email-уведомления об изменениях на рынке и у конкурентов",
        ],
      },
    },
    features: {
      title: "Возможности",
      items: [
        {
          title: "Реальная картина рынка",
          description: "Кто ваши основные конкуренты, как они работают и где на рынке находитесь вы — на основе реальных данных, а не предположений.",
        },
        {
          title: "Четкий путь клиента, пошаговые инструкции",
          description: "STRAGY показывает, как именно клиенты в вашей нише принимают решение о покупке вашего продукта или услуги — от первого контакта до повторных обращений, и предоставит пошаговый план действий.",
        },
        {
          title: "Обоснованный выбор маркетинговых действий",
          description: "Вы получаете перечень маркетинговых каналов и действий, подобранных с учётом поведения вашей аудитории и целей бизнеса.",
        },
        {
          title: "Грамотное распределение маркетингового бюджета",
          description: "STRAGY помогает распределить текущий маркетинговый бюджет для максимального достижения бизнес-целей и снижения риска неэффективных расходов.",
        },
        {
          title: "План действий, а не теория",
          description: "Пошаговые рекомендации, которые можно брать и внедрять, даже без команды маркетологов.",
        },
      ],
    },
    audience: {
      title: "Для кого STRAGY",
      marketers: {
        title: "Для маркетологов",
        description: "От новичков до профессионалов. Экономьте до 70% времени, будьте в курсе новинок, оптимизируйте кампании.",
      },
      owners: {
        title: "Для владельцев бизнеса",
        description: "Получите стратегию без затрат на найм специалистов, сосредоточьтесь на росте бизнеса.",
      },
    },
    footer: {
      privacy: "Политика конфиденциальности",
    },
    emailDialog: {
      title: "Получить доступ к STRAGY",
      description: "Введите адрес электронной почты, на которую мы предоставим доступ к сервису STRAGY. Следуйте инструкциям в письме.",
      placeholder: "your@email.com",
      consent: "Я согласен на обработку персональных данных в соответствии с",
      privacyLink: "Политикой конфиденциальности",
      submit: "Получить доступ",
      submitting: "Отправляем...",
      errorTitle: "Ошибка",
      errorDescription: "Пожалуйста, заполните все поля и дайте согласие на обработку данных",
      successTitle: "Успешно!",
      successDescription: "Проверьте почту - мы отправили инструкции для доступа к STRAGY",
      fallbackTitle: "Заявка принята!",
      fallbackDescription: "Мы свяжемся с вами в ближайшее время",
    },
    languageSelector: {
      title: "Выберите язык",
      subtitle: "Choose your language",
    },
  },
  en: {
    header: {
      tryFree: "Try for free",
    },
    hero: {
      title: "STRAGY. ONE SERVICE - ALL MARKETING",
      subtitle: "STRAGY — a smart SaaS platform for creating a marketing strategy in a few clicks.",
      benefits: {
        title: "You will get:",
        items: [
          "A ready-made marketing strategy with a step-by-step plan",
          "Accurate advertising budget calculation",
          "Market and competitor analysis",
          "Email notifications about market and competitor changes",
        ],
      },
    },
    features: {
      title: "Features",
      items: [
        {
          title: "Deep market and competitor analysis",
          description: "Get instant access to current information about products, prices and assortment of your competitors...",
        },
        {
          title: "Clear customer journey, step-by-step instructions",
          description: "STRAGY will determine where your customer is and provide a clear action plan from first contact to repeat purchase.",
        },
        {
          title: "Precise advertising tool settings",
          description: "Selection of parameters and recommendations for the best advertising channels for your business goals.",
        },
        {
          title: "Transparent budgeting",
          description: "STRAGY will tell you how much to spend on each campaign and launch.",
        },
        {
          title: "Relevance and efficiency",
          description: "We analyze only the most effective and fresh tools.",
        },
      ],
    },
    audience: {
      title: "Who is STRAGY for",
      marketers: {
        title: "For marketers",
        description: "From beginners to professionals. Save up to 70% of your time, stay up to date, optimize campaigns.",
      },
      owners: {
        title: "For business owners",
        description: "Get a strategy without the cost of hiring specialists, focus on business growth.",
      },
    },
    footer: {
      privacy: "Privacy Policy",
    },
    emailDialog: {
      title: "Get access to STRAGY",
      description: "Enter the email address where we will provide access to STRAGY service. Follow the instructions in the email.",
      placeholder: "your@email.com",
      consent: "I agree to the processing of personal data in accordance with the",
      privacyLink: "Privacy Policy",
      submit: "Get access",
      submitting: "Sending...",
      errorTitle: "Error",
      errorDescription: "Please fill in all fields and agree to data processing",
      successTitle: "Success!",
      successDescription: "Check your email - we sent instructions for accessing STRAGY",
      fallbackTitle: "Request accepted!",
      fallbackDescription: "We will contact you shortly",
    },
    languageSelector: {
      title: "Choose your language",
      subtitle: "Выберите язык",
    },
  },
  es: {
    header: {
      tryFree: "Probar gratis",
    },
    hero: {
      title: "STRAGY. UN SERVICIO - TODO EL MARKETING",
      subtitle: "STRAGY — una plataforma SaaS inteligente para crear una estrategia de marketing en unos pocos clics.",
      benefits: {
        title: "Obtendrás:",
        items: [
          "Una estrategia de marketing lista con un plan paso a paso",
          "Cálculo preciso del presupuesto publicitario",
          "Análisis de mercado y competidores",
          "Notificaciones por email sobre cambios en el mercado y competidores",
        ],
      },
    },
    features: {
      title: "Características",
      items: [
        {
          title: "Análisis profundo del mercado y competidores",
          description: "Obtén acceso instantáneo a información actual sobre productos, precios y surtido de tus competidores...",
        },
        {
          title: "Recorrido del cliente claro, instrucciones paso a paso",
          description: "STRAGY determinará dónde está tu cliente y proporcionará un plan de acción claro desde el primer contacto hasta la compra repetida.",
        },
        {
          title: "Configuración precisa de herramientas publicitarias",
          description: "Selección de parámetros y recomendaciones para los mejores canales publicitarios según los objetivos de tu negocio.",
        },
        {
          title: "Presupuesto transparente",
          description: "STRAGY te dirá cuánto gastar en cada campaña y lanzamiento.",
        },
        {
          title: "Relevancia y eficiencia",
          description: "Analizamos solo las herramientas más efectivas y actuales.",
        },
      ],
    },
    audience: {
      title: "¿Para quién es STRAGY?",
      marketers: {
        title: "Para marketers",
        description: "Desde principiantes hasta profesionales. Ahorra hasta un 70% de tu tiempo, mantente actualizado, optimiza campañas.",
      },
      owners: {
        title: "Para dueños de negocios",
        description: "Obtén una estrategia sin el costo de contratar especialistas, concéntrate en el crecimiento del negocio.",
      },
    },
    footer: {
      privacy: "Política de Privacidad",
    },
    emailDialog: {
      title: "Obtener acceso a STRAGY",
      description: "Ingresa la dirección de correo electrónico donde proporcionaremos acceso al servicio STRAGY. Sigue las instrucciones en el correo.",
      placeholder: "tu@email.com",
      consent: "Acepto el procesamiento de datos personales de acuerdo con la",
      privacyLink: "Política de Privacidad",
      submit: "Obtener acceso",
      submitting: "Enviando...",
      errorTitle: "Error",
      errorDescription: "Por favor, complete todos los campos y acepte el procesamiento de datos",
      successTitle: "¡Éxito!",
      successDescription: "Revisa tu correo - enviamos instrucciones para acceder a STRAGY",
      fallbackTitle: "¡Solicitud aceptada!",
      fallbackDescription: "Nos pondremos en contacto contigo pronto",
    },
    languageSelector: {
      title: "Elige tu idioma",
      subtitle: "Choose your language",
    },
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
