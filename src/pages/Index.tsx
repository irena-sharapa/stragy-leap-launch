import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EmailDialog } from "@/components/EmailDialog";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SignalCard } from "@/components/SignalCard";
import { Check, ArrowRight } from "lucide-react";
import newBackground from "@/assets/new-background.jpg";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslations } from "@/lib/translations";

const Index = () => {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false);

  const { currentLang } = useLanguage();
  const t = getTranslations(currentLang);

  const platformShows = [
    "где теряется клиент",
    "какие каналы работают, а какие нет",
    "что изменить в коммуникации",
    "как перераспределить бюджет, чтобы маркетинг приносил максимальную прибыль",
  ];

  const solutionList = [
    "Где теряются клиенты",
    "Какие каналы теряют эффективность",
    "Какие действия необходимо выполнить",
    "Как перераспределить бюджет",
  ];

  const flow = [
    {
      title: "Входные данные",
      desc: "Бизнес вводит данные о продукте, аудитории, каналах и текущих маркетинговых показателях.",
    },
    {
      title: "Ядро STRAGY — 4 слоя платформы",
      layers: ["Market layer", "Business layer", "Decision layer", "Planning layer"],
    },
    {
      title: "Рекомендации",
      desc: "Приоритетные действия с объяснением причин.",
    },
    {
      title: "План действий",
      desc: "Медиаплан и коммуникационная карта по каждому каналу.",
    },
  ];

  const differences = {
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
  };

  const whoCards = [
    {
      num: "01",
      title: "SMB с digital-бюджетом от $500 в месяц",
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
  ];

  const pricing = [
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
  ];

  return (
    <div
      className="min-h-screen font-inter relative bg-background"
      style={{
        backgroundImage: `url(${newBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-stragy-dark-text/[0.08]" />
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full border border-stragy-dark-text/[0.05]" />
        <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full border border-primary/[0.06]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full border border-stragy-dark-text/[0.06]" />
        <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full border border-primary/[0.05]" />
        <div className="absolute top-[45%] left-[5%] w-[30%] h-px bg-gradient-to-r from-transparent via-stragy-dark-text/[0.10] to-transparent" />
        <div className="absolute top-[80%] right-[5%] w-[25%] h-px bg-gradient-to-r from-transparent via-primary/[0.07] to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Nav */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-stragy-dark-text/[0.06]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center h-[76px]">
              <div className="text-xl font-bold text-stragy-dark-text tracking-wide">STRAGY</div>
              <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stragy-dark-text/75">
                <a href="#product" className="hover:text-stragy-dark-text transition">Продукт</a>
                <a href="#how" className="hover:text-stragy-dark-text transition">Как это работает</a>
                <a href="#who" className="hover:text-stragy-dark-text transition">Кому подходит</a>
                <a href="#pricing" className="hover:text-stragy-dark-text transition">Тарифы</a>
              </div>
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <Button
                  onClick={() => setEmailDialogOpen(true)}
                  className="rounded-full h-10 px-5 text-sm font-semibold"
                >
                  {t.header.tryFree}
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header className="min-h-[calc(100vh-76px)] flex items-center py-12 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-[52%_48%] gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-[0.12em] uppercase mb-4 font-mono">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Marketing decision intelligence
                </div>
                <h1 className="text-[32px] md:text-[40px] font-bold text-stragy-dark-text leading-[1.15] tracking-tight">
                  Платформа, которая помогает вашему маркетингу всегда быть{" "}
                  <span className="text-primary">актуальным</span>
                </h1>
                <p className="mt-5 text-[16px] leading-[1.6] text-stragy-dark-text/70 max-w-xl">
                  STRAGY автоматически обнаруживает изменения на рынке, сопоставляет их
                  с показателями бизнеса, оценивает влияние на маркетинговую
                  эффективность и предлагает обновления стратегии с объяснением
                  причин.
                </p>

                <div className="mt-6 bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-stragy-dark-text/[0.05]">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-stragy-secondary-label mb-3">
                    Платформа показывает
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {platformShows.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[14px] text-stragy-dark-text/85 leading-snug">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-none" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    onClick={() => setEmailDialogOpen(true)}
                    className="rounded-full h-12 px-7 text-[15px] font-semibold shadow-lg shadow-primary/25"
                  >
                    {t.header.tryFree}
                  </Button>
                  <a
                    href="#how"
                    className="inline-flex items-center justify-center h-12 px-7 rounded-full text-[15px] font-semibold text-stragy-dark-text border border-stragy-dark-text/15 hover:border-primary hover:text-primary transition"
                  >
                    Как это работает <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center lg:h-[65vh]">
                <div className="w-[80%]">
                  <SignalCard />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* How it works */}
        <section id="how" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-12">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-[0.12em] uppercase mb-4 font-mono">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Как это работает
              </div>
              <h2 className="text-3xl md:text-[34px] font-bold text-stragy-dark-text leading-tight">
                От ваших данных — к готовому плану действий
              </h2>
              <p className="mt-4 text-[15.5px] text-stragy-dark-text/70">
                Одна система вместо десятка разрозненных инструментов и ручных отчётов.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {flow.map((step, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 shadow-md border border-stragy-dark-text/[0.05] ${
                    step.layers ? "bg-primary/10" : "bg-white/80"
                  } backdrop-blur-sm`}
                >
                  <h4 className="text-[15px] font-bold text-stragy-dark-text mb-2">{step.title}</h4>
                  {step.desc && (
                    <p className="text-[13px] text-stragy-dark-text/60 leading-[1.5]">{step.desc}</p>
                  )}
                  {step.layers && (
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {step.layers.map((layer, j) => (
                        <div key={j} className="bg-white rounded-lg px-3 py-2.5">
                          <div className="text-[10.5px] font-mono font-semibold text-primary">
                            0{j + 1}
                          </div>
                          <div className="text-[11.5px] font-bold text-stragy-dark-text mt-0.5">{layer}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary text-white rounded-2xl p-7 text-[14.5px] font-medium leading-[1.6]">
              AI сопоставляет внутренние изменения (падение эффективности рекламы, снижение конверсии, рост стоимости привлечения) с внешними событиями (рост активности конкурентов, изменение спроса, новые игроки на рынке) и формирует список приоритетных действий с объяснением причин.
            </div>
          </div>
        </section>

        {/* Differentiation — centered header */}
        <section id="diff" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-[0.12em] uppercase mb-4 font-mono">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Отличие
              </div>
              <h2 className="text-3xl md:text-[32px] font-bold text-stragy-dark-text leading-[1.25]">
                Большинство платформ помогают анализировать данные.
                <br />
                <span className="text-primary">STRAGY помогает принимать решения.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 text-center font-bold text-[15px] text-stragy-dark-text/60 shadow-md mb-4">
                  Большинство платформ
                </div>
                {differences.left.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/70 backdrop-blur-sm rounded-xl px-5 py-4 mb-3 flex items-center gap-3 text-[14px] font-medium text-stragy-dark-text/65 shadow-sm"
                  >
                    <span className="font-bold text-stragy-dark-text/50">—</span>
                    {item}
                  </div>
                ))}
              </div>
              <div>
                <div className="bg-primary rounded-2xl p-5 text-center font-bold text-[15px] text-white shadow-md mb-4">
                  STRAGY
                </div>
                {differences.right.map((item, i) => (
                  <div
                    key={i}
                    className="bg-primary/10 rounded-xl px-5 py-4 mb-3 flex items-center gap-3 text-[14px] font-bold text-stragy-dark-text"
                  >
                    <Check className="w-4 h-4 text-primary flex-none" strokeWidth={3} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who — centered header */}
        <section id="who" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-[0.12em] uppercase mb-4 font-mono">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Кому подходит
              </div>
              <h2 className="text-3xl md:text-[34px] font-bold text-stragy-dark-text leading-tight">
                Для тех, кто уже вкладывает в маркетинг
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {whoCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-7 shadow-md border border-stragy-dark-text/[0.05]"
                >
                  <div className="text-primary font-mono font-semibold text-[12.5px] mb-3">
                    {card.num}
                  </div>
                  <h3 className="text-[16px] font-bold text-stragy-dark-text mb-2.5 leading-[1.35]">
                    {card.title}
                  </h3>
                  <p className="text-[13.5px] text-stragy-dark-text/70 leading-[1.55] m-0">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing — centered header, no sub */}
        <section id="pricing" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-[0.12em] uppercase mb-4 font-mono">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Тарифы
              </div>
              <h2 className="text-3xl md:text-[34px] font-bold text-stragy-dark-text leading-tight">
                SaaS-подписка с подписочной моделью роста
              </h2>
            </div>

            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-[12.5px] px-4 py-2 rounded-full">
                💳 Годовая оплата — экономия 20%
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {pricing.map((plan, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-8 shadow-lg flex flex-col ${
                    plan.popular
                      ? "bg-primary text-white"
                      : "bg-white/85 backdrop-blur-sm border border-stragy-dark-text/[0.05]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-stragy-dark-text text-white text-[11px] font-bold px-4 py-1.5 rounded-full tracking-[0.03em]">
                      Рекомендуемый
                    </div>
                  )}
                  <div
                    className={`font-mono font-bold text-[13px] tracking-[0.08em] uppercase ${
                      plan.popular ? "text-white/80" : "text-stragy-dark-text/50"
                    }`}
                  >
                    {plan.tier}
                  </div>
                  <div
                    className={`font-bold text-[32px] mt-3 mb-1 ${
                      plan.popular ? "text-white" : "text-stragy-dark-text"
                    }`}
                  >
                    {plan.price}
                    <span className="text-[14px] font-medium">{plan.unit}</span>
                  </div>
                  <div className={`text-[12.5px] mb-5 ${plan.popular ? "text-white/70" : "text-stragy-dark-text/55"}`}>
                    {plan.sub}
                  </div>
                  <ul className="flex-1 space-y-2.5 mb-6">
                    {plan.items.map((item, j) => (
                      <li key={j} className="text-[13px] flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 flex-none mt-0.5 ${plan.popular ? "text-white" : "text-primary"}`}
                          strokeWidth={3}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setEmailDialogOpen(true)}
                    className={`rounded-full h-11 font-semibold text-[14px] transition ${
                      plan.popular
                        ? "bg-white text-primary hover:bg-white/90"
                        : "border border-stragy-dark-text/15 text-stragy-dark-text hover:border-primary hover:text-primary"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className="rounded-[32px] px-8 py-16 md:py-20 text-center text-white"
              style={{
                background:
                  "linear-gradient(135deg, #7A6CD6 0%, #B08FDB 55%, #E9A9C6 100%)",
              }}
            >
              <h2 className="text-3xl md:text-[34px] font-bold mb-4">
                Готовы избавиться от устаревших стратегий?
              </h2>
              <p className="text-[15.5px] text-white/85 mb-8 max-w-xl mx-auto">
                Запросите доступ и получите первую диагностику вашей
                маркетинговой стратегии.
              </p>
              <Button
                onClick={() => setEmailDialogOpen(true)}
                className="rounded-full h-12 px-8 text-[15px] font-semibold bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                {t.header.tryFree}
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-14 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="border-t border-stragy-dark-text/10 pt-8 flex flex-wrap justify-between items-center gap-5">
              <div className="text-lg font-bold text-stragy-dark-text tracking-wide">STRAGY</div>
              <div className="flex flex-wrap gap-6 text-[13.5px] text-stragy-dark-text/60">
                <a href="#product" className="hover:text-stragy-dark-text transition">Продукт</a>
                <a href="#pricing" className="hover:text-stragy-dark-text transition">Тарифы</a>
                <button
                  onClick={() => setPrivacyDialogOpen(true)}
                  className="hover:text-stragy-dark-text transition"
                >
                  {t.footer.privacy}
                </button>
                <a href="mailto:hello@stragy.com" className="hover:text-stragy-dark-text transition">
                  hello@stragy.com
                </a>
              </div>
              <div className="text-[12.5px] text-stragy-dark-text/50">© 2026 STRAGY</div>
            </div>
          </div>
        </footer>

        <EmailDialog
          open={emailDialogOpen}
          onOpenChange={setEmailDialogOpen}
          translations={t}
        />
        <PrivacyPolicy
          open={privacyDialogOpen}
          onOpenChange={setPrivacyDialogOpen}
        />
      </div>
    </div>
  );
};

export default Index;
