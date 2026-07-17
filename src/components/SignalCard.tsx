import { useEffect, useState } from "react";

interface Signal {
  sig: string;
  imp: string;
  act: string;
}

const signals: Signal[] = [
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
];

export const SignalCard = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % signals.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const s = signals[current];

  const rows = [
    { icon: "СИГ", bg: "bg-stragy-pink/30 text-[#C0538E]", label: "Сигнал рынка", value: s.sig },
    { icon: "ВЛ", bg: "bg-primary/10 text-primary", label: "Влияние на бизнес", value: s.imp },
    { icon: "✓", bg: "bg-primary text-white", label: "Действие STRAGY", value: s.act },
  ];

  return (
    <div className="relative bg-white rounded-3xl shadow-xl p-7 overflow-hidden border border-stragy-dark-text/[0.05]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.05), transparent 50%)" }}
      />
      <div className="relative">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[11.5px] font-mono uppercase tracking-[0.08em] text-stragy-dark-text/55">
            Что изменилось на этой неделе
          </span>
          <div className="flex gap-1.5">
            {signals.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Signal ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-5 bg-primary" : "w-1.5 bg-stragy-dark-text/15"
                }`}
              />
            ))}
          </div>
        </div>
        <div key={current} className="divide-y divide-stragy-dark-text/8">
          {rows.map((row, i) => (
            <div
              key={i}
              className="flex gap-3.5 py-3.5 first:pt-0 last:pb-0 animate-in fade-in slide-in-from-bottom-1"
              style={{ animationDelay: `${i * 80}ms`, animationDuration: "500ms", animationFillMode: "backwards" }}
            >
              <div
                className={`w-9 h-9 rounded-[10px] flex-none flex items-center justify-center font-mono text-[12px] font-semibold ${row.bg}`}
              >
                {row.icon}
              </div>
              <div>
                <div className="text-[10.5px] font-mono uppercase tracking-[0.06em] text-stragy-dark-text/55 mb-0.5">
                  {row.label}
                </div>
                <div
                  className="text-[14px] font-medium text-stragy-dark-text leading-[1.4]"
                  dangerouslySetInnerHTML={{ __html: row.value }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
