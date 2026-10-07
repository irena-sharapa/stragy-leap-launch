import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type Lang = "ru" | "en" | "es";

const TX = {
  ru: {
    segments: { Starter: "До 3 сегментов аудитории", Growth: "До 8 сегментов аудитории", Pro: "До 12 сегментов аудитории", Business: "Больше 12 — по запросу" } as Record<string, string>,
    tip: "Один workspace = один сегмент аудитории: точная группа клиентов со своими характеристиками (например: молодожены 25–40 лет; семейные пары с детьми школьного возраста).",
    q1: "Сколько сегментов аудитории вы обслуживаете?",
    q1hint: "Сегмент — это точная группа клиентов, например: молодожены 25–40 лет.",
    q2: "Планируете добавить новые в ближайшие полгода?",
    yes: "Да",
    no: "Нет",
    rec: "Рекомендуемый тариф:",
    faqTitle: "Частые вопросы",
    faq: [
      ["Что такое workspace?", "Один workspace — это одна стратегия для одного сегмента аудитории, а не для всего бизнеса. Сегмент — это точная группа клиентов со своими характеристиками, например: молодожены 25–40 лет или семейные пары с детьми школьного возраста. Для каждого сегмента нужен свой workspace."],
      ["Сколько пользователей может работать в аккаунте?", "В тарифах Starter и Growth — 1 пользователь, в Pro — 2, в Business — 5."],
      ["Чем отличаются ежемесячные и еженедельные корректировки?", "Ежемесячное обновление стратегии (рынок, конкуренты, поведение аудитории) входит во все тарифы. Еженедельная сверка хода реализации с целями и корректировки стратегии и рекламы доступны в тарифах Pro и Business."],
    ],
  },
  en: {
    segments: { Starter: "Up to 3 audience segments", Growth: "Up to 8 audience segments", Pro: "Up to 12 audience segments", Business: "More than 12 — on request" } as Record<string, string>,
    tip: "One workspace = one audience segment: a precise group of customers with its own characteristics (e.g. newlyweds aged 25–40; couples with school-age children).",
    q1: "How many audience segments do you serve?",
    q1hint: "A segment is a precise group of customers, e.g. newlyweds aged 25–40.",
    q2: "Planning to add new ones in the next six months?",
    yes: "Yes",
    no: "No",
    rec: "Recommended plan:",
    faqTitle: "FAQ",
    faq: [
      ["What is a workspace?", "One workspace is one strategy for one audience segment, not for the whole business. A segment is a precise group of customers with its own characteristics, e.g. newlyweds aged 25–40 or couples with school-age children. Each segment needs its own workspace."],
      ["How many users can work in an account?", "Starter and Growth — 1 user, Pro — 2, Business — 5."],
      ["What's the difference between monthly and weekly adjustments?", "A monthly strategy update (market, competitors, audience behavior) is included in all plans. Weekly progress checks against goals and strategy and ad adjustments are available in Pro and Business."],
    ],
  },
  es: {
    segments: { Starter: "Hasta 3 segmentos de audiencia", Growth: "Hasta 8 segmentos de audiencia", Pro: "Hasta 12 segmentos de audiencia", Business: "Más de 12 — a consultar" } as Record<string, string>,
    tip: "Un workspace = un segmento de audiencia: un grupo preciso de clientes con sus propias características (por ejemplo: recién casados de 25–40 años; parejas con hijos en edad escolar).",
    q1: "¿Cuántos segmentos de audiencia atiendes?",
    q1hint: "Un segmento es un grupo preciso de clientes, por ejemplo: recién casados de 25–40 años.",
    q2: "¿Planeas añadir nuevos en los próximos seis meses?",
    yes: "Sí",
    no: "No",
    rec: "Plan recomendado:",
    faqTitle: "Preguntas frecuentes",
    faq: [
      ["¿Qué es un workspace?", "Un workspace es una estrategia para un segmento de audiencia, no para todo el negocio. Un segmento es un grupo preciso de clientes con sus propias características, por ejemplo: recién casados de 25–40 años o parejas con hijos en edad escolar. Cada segmento necesita su propio workspace."],
      ["¿Cuántos usuarios pueden trabajar en una cuenta?", "En Starter y Growth — 1 usuario, en Pro — 2, en Business — 5."],
      ["¿En qué se diferencian los ajustes mensuales y semanales?", "La actualización mensual de la estrategia (mercado, competidores, comportamiento de la audiencia) está incluida en todos los planes. La revisión semanal del avance frente a los objetivos y los ajustes de estrategia y publicidad están disponibles en Pro y Business."],
    ],
  },
};

const tx = (lang: string) => TX[(lang as Lang) in TX ? (lang as Lang) : "ru"];

export const recommendPlan = (segments: number, growth: boolean) => {
  if (segments >= 13) return "Business";
  if (segments >= 6) return "Pro";
  if (segments >= 3) return growth ? "Pro" : "Growth";
  return growth ? "Growth" : "Starter";
};

export const SegmentLine = ({ lang, tier, inverted }: { lang: string; tier: string; inverted?: boolean }) => {
  const t = tx(lang);
  const text = t.segments[tier];
  if (!text) return null;
  return (
    <div className={`text-[12.5px] flex items-center gap-1.5 -mt-1 mb-3 ml-[26px] ${inverted ? "text-white/80" : "text-stragy-dark-text/60"}`}>
      <span>{text}</span>
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            aria-label="?"
            onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).click()}
            className={`w-4 h-4 rounded-full border text-[10px] font-bold leading-none flex items-center justify-center ${
              inverted ? "border-white/60 text-white" : "border-stragy-dark-text/30 text-stragy-dark-text/60"
            }`}
          >
            ?
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-64 text-[12.5px] leading-relaxed text-stragy-dark-text">{t.tip}</PopoverContent>
      </Popover>
    </div>
  );
};

export const PlanCalculator = ({
  lang,
  segments,
  setSegments,
  growth,
  setGrowth,
}: {
  lang: string;
  segments: number;
  setSegments: (n: number) => void;
  growth: boolean;
  setGrowth: (b: boolean) => void;
}) => {
  const t = tx(lang);
  const rec = recommendPlan(segments, growth);
  return (
    <div className="w-full mb-10 rounded-2xl bg-white/80 backdrop-blur-sm border border-stragy-dark-text/[0.06] shadow-lg p-5 md:p-6 text-stragy-dark-text">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="md:flex-1">
          <label className="text-[13.5px] font-semibold block mb-2">{t.q1}</label>
          <input
            type="number"
            min={1}
            value={segments}
            onChange={(e) => setSegments(Math.max(1, Number(e.target.value) || 1))}
            className="w-28 h-10 rounded-xl border border-stragy-dark-text/15 bg-white px-3 text-[14px] focus:outline-none focus:border-primary"
          />
          <p className="text-[11.5px] text-stragy-dark-text/45 mt-1.5">{t.q1hint}</p>
        </div>
        {segments < 6 && (
          <div className="md:flex-1">
            <div className="text-[13.5px] font-semibold mb-2">{t.q2}</div>
            <div className="inline-flex p-1 rounded-full bg-stragy-dark-text/[0.05]">
              {[true, false].map((v) => (
                <button
                  key={String(v)}
                  type="button"
                  onClick={() => setGrowth(v)}
                  className={`rounded-full px-4 py-1.5 text-[12.5px] font-semibold transition ${
                    growth === v ? "bg-primary text-white" : "text-stragy-dark-text/60"
                  }`}
                >
                  {v ? t.yes : t.no}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="md:ml-auto inline-flex items-center gap-2 self-start md:self-auto rounded-full px-4 py-2.5 bg-stragy-dark-text/[0.04] text-[14px]">
          <span className="text-stragy-dark-text/60">{t.rec}</span>
          <span className="font-bold text-stragy-purple-deep">{rec}</span>
        </div>
      </div>
    </div>
  );
};

export const PricingFaq = ({ lang }: { lang: string }) => {
  const t = tx(lang);
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="mt-12 max-w-3xl mx-auto">
      <h3 className="text-center text-xl md:text-2xl font-extrabold text-stragy-dark-text mb-6">{t.faqTitle}</h3>
      <div className="space-y-3">
        {t.faq.map(([q, a], i) => (
          <div key={i} className="rounded-2xl bg-white/85 backdrop-blur-sm border border-stragy-dark-text/[0.05] shadow-sm">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-[14.5px] font-semibold text-stragy-dark-text"
            >
              {q}
              <ChevronDown className={`w-4 h-4 shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <p className="px-5 pb-4 text-[13.5px] leading-relaxed text-stragy-dark-text/70">{a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
