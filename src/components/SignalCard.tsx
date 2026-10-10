import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

// Example reports only: settings are neutral placeholders, never real targeting data.
const COPY = {
  ru: {
    titles: ["Где вы теряете клиентов", "Готова ли аудитория покупать", "Каналы · этап «Незнание»", "Что изменилось на этой неделе", "Что изменилось на этой неделе"],
    stages: ["Незнание", "Знание", "Сравнение", "Покупка", "Лояльность", "Адвокаты"], loss: "Здесь теряете",
    checks: ["Разрыв интента", "Барьеры перехода", "Конкурентный риск"], badges: ["Норма", "Критическая точка", "Средний"],
    barrier: "27% ищут по цене или условиям и не идут дальше", reason: "Цена может быть реальным барьером",
    readiness: "Готовность к покупке", high: "Высокая", barriers: "Барьеры", low: "Низкие", queries: "Коммерческие запросы", count: "45 из 45",
    demand: "Спрос сфокусирован на подборе, сравнении цен и прямых транзакционных запросах.", next: "Следующий шаг: проверить конверсию на этапе бронирования.",
    paid: "Платные", free: "Бесплатные", budget: "при бюджете > $3500",
    channels: [["Медийные баннеры", "РСЯ · баннеры по интересам", "интересы и темы"], ["Таргетированная реклама", "Instagram · видеоконтент", "аудитория, креативы"], ["DOOH / офлайн", "экраны, баннеры, аудио", "площадки, аудитория"], ["SEO и контент", "статьи «десять лучших мест»", "темы и запросы"], ["Партнёрские коллаборации", "кросс-промо", "партнёры, площадки"], ["Органика в видео", "Reels · видео-обзоры", "сюжеты и локации"]],
    labels: ["Сигнал рынка", "Влияние на бизнес", "Действие STRAGY"], icons: ["СИГ", "ВЛ", "✓"],
    signals: [["Появился новый конкурент в вашей категории", "Стоимость привлечения клиента выросла на 18%", "Перераспределить 12% бюджета на органические каналы"], ["Конкурент снизил цену на ключевую позицию", "CTR в поиске снизился на 14%", "Скорректировать оффер и ставки в течение 48 часов"]],
    example: "Пример отчёта STRAGY", hidden: "настройки скрыты", slide: "Слайд",
  },
  en: {
    titles: ["Where you lose customers", "Is your audience ready to buy", "Channels · awareness stage", "What changed this week", "What changed this week"],
    stages: ["Unaware", "Aware", "Compare", "Purchase", "Loyalty", "Advocates"], loss: "Loss here",
    checks: ["Intent gap", "Transition barriers", "Competitive risk"], badges: ["Normal", "Critical point", "Medium"],
    barrier: "27% search by price or terms and go no further", reason: "Price may be a real barrier",
    readiness: "Purchase readiness", high: "High", barriers: "Barriers", low: "Low", queries: "Commercial queries", count: "45 of 45",
    demand: "Demand focuses on selection, price comparisons and direct transactional searches.", next: "Next step: check conversion at the booking stage.",
    paid: "Paid", free: "Free", budget: "with a budget > $3500",
    channels: [["Display banners", "Yandex Ads · interest banners", "interests and topics"], ["Targeted advertising", "Instagram · video content", "audience, creatives"], ["DOOH / offline", "screens, banners, audio", "placements, audience"], ["SEO and content", "‘top ten places’ articles", "topics and queries"], ["Partner collaborations", "cross-promotion", "partners, placements"], ["Organic video", "Reels · video reviews", "stories and locations"]],
    labels: ["Market signal", "Business impact", "STRAGY action"], icons: ["SIG", "IMP", "✓"],
    signals: [["A new competitor entered your category", "Customer acquisition cost rose by 18%", "Reallocate 12% of the budget to organic channels"], ["A competitor cut the price of a key offering", "Search CTR fell by 14%", "Adjust the offer and bids within 48 hours"]],
    example: "Example STRAGY report", hidden: "settings hidden", slide: "Slide",
  },
  es: {
    titles: ["Dónde pierdes clientes", "¿Está tu audiencia lista para comprar?", "Canales · etapa de desconocimiento", "Qué cambió esta semana", "Qué cambió esta semana"],
    stages: ["Desconoce", "Conoce", "Compara", "Compra", "Lealtad", "Promotores"], loss: "Pérdida aquí",
    checks: ["Brecha de intención", "Barreras de transición", "Riesgo competitivo"], badges: ["Normal", "Punto crítico", "Medio"],
    barrier: "El 27% busca por precio o condiciones y no avanza", reason: "El precio puede ser una barrera real",
    readiness: "Disposición a comprar", high: "Alta", barriers: "Barreras", low: "Bajas", queries: "Consultas comerciales", count: "45 de 45",
    demand: "La demanda se centra en la selección, la comparación de precios y las búsquedas transaccionales directas.", next: "Siguiente paso: comprobar la conversión en la etapa de reserva.",
    paid: "De pago", free: "Gratuitos", budget: "con presupuesto > $3500",
    channels: [["Banners de display", "Yandex Ads · por intereses", "intereses y temas"], ["Publicidad segmentada", "Instagram · contenido en vídeo", "audiencia, creatividades"], ["DOOH / exterior", "pantallas, banners, audio", "ubicaciones, audiencia"], ["SEO y contenido", "artículos ‘diez mejores lugares’", "temas y consultas"], ["Colaboraciones", "promoción cruzada", "socios, ubicaciones"], ["Vídeo orgánico", "Reels · reseñas en vídeo", "historias y lugares"]],
    labels: ["Señal del mercado", "Impacto en el negocio", "Acción de STRAGY"], icons: ["SEÑ", "IMP", "✓"],
    signals: [["Un nuevo competidor entró en tu categoría", "El coste de adquisición aumentó un 18%", "Reasignar el 12% del presupuesto a canales orgánicos"], ["Un competidor bajó el precio de una oferta clave", "El CTR en búsquedas cayó un 14%", "Ajustar la oferta y las pujas en 48 horas"]],
    example: "Ejemplo de informe STRAGY", hidden: "configuración oculta", slide: "Diapositiva",
  },
};

export const SignalCard = () => {
  const { currentLang } = useLanguage();
  const t = COPY[currentLang];
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const touch = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(query.matches);
    query.addEventListener("change", change);
    return () => query.removeEventListener("change", change);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setInterval(() => setCurrent((n) => (n + 1) % 5), 6000);
    return () => window.clearInterval(timer);
  }, [paused, reduced, current]);

  const body = (slide: number) => {
    if (slide === 0) return <div className="report-loss">
      <div className="report-funnel">{t.stages.map((stage, i) => <div key={stage} className="report-stage">
        <span className={i === 1 ? "report-loss-marker" : "report-loss-marker invisible"}>{t.loss}</span>
        <span className={`report-square ${i === 1 ? "report-square-critical" : ""}`}>{i + 1}</span><span className="report-stage-name">{stage}</span>
      </div>)}</div>
      <div className="report-checks">{t.checks.map((label, i) => <div key={label} className="report-check">
        <div className="report-check-heading"><span className="report-main">{label}</span><span className={`report-badge report-badge-${["success", "critical", "warning"][i]}`}>{t.badges[i]}</span></div>
        {i === 1 && <><p className="report-main report-barrier">{t.barrier}</p><p className="report-explanation">{t.reason}</p></>}
      </div>)}</div>
    </div>;
    if (slide === 1) return <div className="report-readiness">
      <div className="report-tiles"><div className="report-tile report-tile-success"><span className="report-label">{t.readiness}</span><strong className="report-main">{t.high}</strong></div><div className="report-tile report-tile-blue"><span className="report-label">{t.barriers}</span><strong className="report-main">{t.low}</strong></div></div>
      <div><div className="report-progress-label"><span className="report-label">{t.queries}</span><span className="report-explanation">{t.count}</span></div><div className="report-progress" role="progressbar" aria-label={t.queries} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}><span /></div></div>
      <p className="report-main">{t.demand}</p><p className="report-explanation">{t.next}</p>
    </div>;
    if (slide === 2) return <div className="report-channels">{[t.paid, t.free].map((heading, col) => <div key={heading} className={`report-channel-column report-channel-column-${col}`}>
      <h4 className="report-label">{heading}</h4>{t.channels.slice(col * 3, col * 3 + 3).map(([name, format, placeholder], i) => <div key={name} className="report-channel">
        <div className="report-main">{name}</div>{col === 0 && i === 2 && <span className="report-budget">{t.budget}</span>}
        <p className="report-explanation">{format}</p><p className="report-placeholder" aria-hidden="true">{placeholder}</p>
      </div>)}
    </div>)}</div>;
    return <div className="report-signals">{t.signals[slide - 3].map((value, i) => <div key={value} className="report-signal-row">
      <div className={`report-icon report-icon-${i}`} aria-hidden="true">{t.icons[i]}</div><div><div className="report-label">{t.labels[i]}</div><p className="report-main">{value}</p></div>
    </div>)}</div>;
  };

  return <section className="report-carousel" aria-roledescription="carousel" aria-label={t.example}
    onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
    onFocusCapture={() => setPaused(true)} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false); }}
    onTouchStart={(e) => { const point = e.touches[0]; if (point) touch.current = { x: point.clientX, y: point.clientY }; setPaused(true); }}
    onTouchEnd={(e) => { const point = e.changedTouches[0]; if (point && touch.current) { const dx = point.clientX - touch.current.x; const dy = point.clientY - touch.current.y; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) setCurrent((n) => (n + (dx < 0 ? 1 : 4)) % 5); } touch.current = null; setPaused(false); }}
    onTouchCancel={() => { touch.current = null; setPaused(false); }}>
    <div className="report-slides">{t.titles.map((title, i) => <article key={i} className={`report-slide ${i === current ? "report-slide-active" : ""}`} aria-hidden={i !== current} aria-roledescription="slide" aria-label={`${i + 1} / 5`}>
      <h3 className="report-label report-title">{title}</h3><div className="report-body">{body(i)}</div><p className="report-footer">{t.example}{i === 2 ? ` · ${t.hidden}` : ""}</p>
    </article>)}</div>
    <div className="report-dots">{t.titles.map((title, i) => <Button key={i} type="button" variant="ghost" className="report-dot-button" aria-label={`${t.slide} ${i + 1}: ${title}`} aria-pressed={current === i} onClick={() => setCurrent(i)}><span className={`report-dot ${current === i ? "report-dot-active" : ""}`} /></Button>)}</div>
  </section>;
};
