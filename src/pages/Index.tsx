import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { EmailDialog } from "@/components/EmailDialog";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SignalCard } from "@/components/SignalCard";
import { Check, ArrowRight, Menu, X } from "lucide-react";
import newBackground from "@/assets/new-background.jpg";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslations, getPathForLanguage } from "@/lib/translations";

const SITE_URL = "https://stragy.lovable.app";

const Index = () => {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [annual, setAnnual] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Starter");

  const { currentLang } = useLanguage();
  const t = getTranslations(currentLang);
  const canonical = `${SITE_URL}${getPathForLanguage(currentLang)}`;
  const htmlLang = currentLang === "en" ? "en" : currentLang === "es" ? "es" : "ru";

  const selfServePlans = t.pricing.plans.filter((p) => !p.separate);
  const businessPlan = t.pricing.plans.find((p) => p.separate);

  const displayPrice = (price: string) => {
    if (!annual) return price;
    const amount = Number(price.replace(/[^\d.]/g, ""));
    if (!amount) return price;
    return price.replace(/[\d.]+/, String(Math.round(amount * 0.8)));
  };

  const openRequest = (plan: string) => {
    setSelectedPlan(plan);
    setRequestOpen(true);
  };

  const renderPlanCard = (plan: PricingPlan, i: number) => (
    <div
      key={i}
      className={`relative rounded-2xl p-7 md:p-8 shadow-lg flex flex-col w-full ${
        plan.popular
          ? "bg-primary text-white"
          : plan.separate
            ? "bg-white/55 backdrop-blur-sm border border-dashed border-stragy-dark-text/25 shadow-none"
            : "bg-white/85 backdrop-blur-sm border border-stragy-dark-text/[0.05]"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-stragy-dark-text text-white text-[11px] font-bold px-4 py-1.5 rounded-full tracking-[0.03em]">
          {t.pricing.recommended}
        </div>
      )}
      {plan.separate && plan.altLabel && (
        <div className="text-[10.5px] font-semibold uppercase tracking-[0.09em] text-stragy-dark-text/40 mb-2 leading-snug">
          {plan.altLabel}
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
        {displayPrice(plan.price)}
        <span className="text-[14px] font-medium">{plan.unit}</span>
      </div>
      <div className={`text-[12.5px] mb-5 ${plan.popular ? "text-white/70" : "text-stragy-dark-text/55"}`}>
        {annual ? `${plan.sub} · ${t.pricing.perYearNote}` : plan.sub}
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
        onClick={() => openRequest(plan.tier)}
        className={`rounded-full h-11 font-semibold text-[14px] transition ${
          plan.popular
            ? "bg-white text-primary hover:bg-white/90"
            : "border border-stragy-dark-text/15 text-stragy-dark-text hover:border-primary hover:text-primary"
        }`}
      >
        {plan.cta}
      </button>
    </div>
  );


  return (
    <>
      <Helmet>
        <html lang={htmlLang} />
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={t.seo.title} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={htmlLang === "en" ? "en_US" : htmlLang === "es" ? "es_ES" : "ru_RU"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.seo.title} />
        <meta name="twitter:description" content={t.seo.description} />
        <link rel="alternate" hrefLang="ru" href={`${SITE_URL}/ru`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/eng`} />
        <link rel="alternate" hrefLang="es" href={`${SITE_URL}/es`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "STRAGY",
            description: t.seo.description,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "49", priceCurrency: "USD" },
          })}
        </script>
      </Helmet>

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
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
              <div className="flex justify-between items-center h-[68px] md:h-[76px]">
                <a href={getPathForLanguage(currentLang)} className="text-xl font-bold text-stragy-dark-text tracking-wide">
                  STRAGY
                </a>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stragy-dark-text/75">
                  <a href="#how" className="hover:text-stragy-dark-text transition">{t.nav.how}</a>
                  <a href="#who" className="hover:text-stragy-dark-text transition">{t.nav.who}</a>
                  <a href="#pricing" className="hover:text-stragy-dark-text transition">{t.nav.pricing}</a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <LanguageSwitcher />
                  <Button
                    onClick={() => setEmailDialogOpen(true)}
                    className="hidden sm:inline-flex rounded-full h-10 px-5 text-sm font-semibold"
                  >
                    {t.header.tryFree}
                  </Button>
                  <button
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-stragy-dark-text/80 hover:bg-white/70 transition"
                    onClick={() => setMobileNavOpen((v) => !v)}
                    aria-label="Menu"
                  >
                    {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              {mobileNavOpen && (
                <div className="md:hidden pb-4 flex flex-col gap-2 text-sm font-medium text-stragy-dark-text/85">
                  <a href="#how" onClick={() => setMobileNavOpen(false)} className="py-2">{t.nav.how}</a>
                  <a href="#who" onClick={() => setMobileNavOpen(false)} className="py-2">{t.nav.who}</a>
                  <a href="#pricing" onClick={() => setMobileNavOpen(false)} className="py-2">{t.nav.pricing}</a>
                  <Button
                    onClick={() => { setEmailDialogOpen(true); setMobileNavOpen(false); }}
                    className="rounded-full h-11 mt-2 text-sm font-semibold"
                  >
                    {t.header.tryFree}
                  </Button>
                </div>
              )}
            </div>
          </nav>

          {/* Hero */}
          <header className="min-h-[calc(100vh-76px)] flex items-center py-10 md:py-12 px-5 sm:px-6">
            <div className="max-w-6xl mx-auto w-full">
              <div className="grid lg:grid-cols-[52%_48%] gap-8 lg:gap-10 items-center">
                <div>
                  {t.hero.badge && (
                    <div className="inline-flex items-center gap-2 text-primary text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase mb-4 font-mono">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {t.hero.badge}
                    </div>
                  )}
                  <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-stragy-dark-text leading-[1.15] tracking-tight">
                    {t.hero.titleStart}{" "}
                    <span className="text-primary">{t.hero.titleHighlight}</span>
                  </h1>
                  <p className="mt-5 text-[15px] md:text-[16px] leading-[1.6] text-stragy-dark-text/70 max-w-xl">
                    {t.hero.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-stragy-secondary-label mb-3">
                      {t.hero.platformShowsLabel}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {t.hero.platformShows.map((item, i) => (
                        <li
                          key={i}
                          className="bg-white/75 backdrop-blur-sm rounded-xl p-3.5 shadow-sm border border-stragy-dark-text/[0.05] hover:shadow-md hover:border-primary/20 transition"
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-none" />
                            <div>
                              <div className="text-[13px] font-semibold text-stragy-dark-text leading-snug">{item.title}</div>
                              <div className="text-[12px] text-stragy-dark-text/65 leading-snug mt-0.5">{item.desc}</div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                      onClick={() => setEmailDialogOpen(true)}
                      className="rounded-full h-12 px-6 md:px-7 text-[14px] md:text-[15px] font-semibold shadow-lg shadow-primary/25"
                    >
                      {t.header.tryFree}
                    </Button>
                    <a
                      href="#how"
                      className="inline-flex items-center justify-center h-12 px-6 md:px-7 rounded-full text-[14px] md:text-[15px] font-semibold text-stragy-dark-text border border-stragy-dark-text/15 hover:border-primary hover:text-primary transition"
                    >
                      {t.hero.ctaSecondary} <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:h-[65vh] mt-4 lg:mt-0">
                  <div className="w-full sm:w-[85%] lg:w-[85%]">
                    <SignalCard />
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* How it works */}
          <section id="how" className="py-16 md:py-20 px-5 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-2xl mb-10 md:mb-12">
                <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-[0.12em] uppercase mb-4 font-mono">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {t.how.badge}
                </div>
                <h2 className="text-[26px] sm:text-3xl md:text-[34px] font-bold text-stragy-dark-text leading-tight">
                  {t.how.title}
                </h2>
                <p className="mt-4 text-[15px] md:text-[15.5px] text-stragy-dark-text/70">
                  {t.how.subtitle}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {t.how.flow.map((step, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl p-6 shadow-md border border-stragy-dark-text/[0.05] ${
                      step.layers ? "bg-primary/10 md:col-span-3" : "bg-white/80"
                    } backdrop-blur-sm`}
                  >
                    <div className="text-primary font-mono font-semibold text-[12px] mb-2">
                      0{i + 1}
                    </div>
                    <h4 className="text-[16px] font-bold text-stragy-dark-text mb-2">{step.title}</h4>
                    {step.desc && (
                      <p className="text-[13px] text-stragy-dark-text/65 leading-[1.55]">{step.desc}</p>
                    )}
                    {step.bullets && (
                      <ul className="mt-1 space-y-2">
                        {step.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-[13px] text-stragy-dark-text/80 leading-snug">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-none" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.layers && (
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mt-4">
                        {step.layers.map((layer, j) => (
                          <div key={j} className="bg-white rounded-xl p-4 shadow-sm border border-stragy-dark-text/[0.04]">
                            <div className="text-[11px] font-mono font-semibold text-primary">
                              0{j + 1}
                            </div>
                            <div className="text-[13.5px] font-bold text-stragy-dark-text mt-1">{layer.name}</div>
                            <div className="text-[12px] text-stragy-dark-text/65 leading-snug mt-1.5">{layer.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary text-white rounded-2xl p-6 md:p-7 text-[14px] md:text-[14.5px] font-medium leading-[1.6]">
                {t.how.aiExplanation}
              </div>
            </div>
          </section>

          {/* Differentiation */}
          <section id="diff" className="py-16 md:py-20 px-5 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
                <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-[0.12em] uppercase mb-4 font-mono">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {t.diff.badge}
                </div>
                <h2 className="text-[24px] sm:text-3xl md:text-[32px] font-bold text-stragy-dark-text leading-[1.25]">
                  {t.diff.titleLine1}
                  <br />
                  <span className="text-primary">{t.diff.titleLine2}</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 text-center font-bold text-[15px] text-stragy-dark-text/60 shadow-md mb-4">
                    {t.diff.leftHeader}
                  </div>
                  {t.diff.left.map((item, i) => (
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
                    {t.diff.rightHeader}
                  </div>
                  {t.diff.right.map((item, i) => (
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

          {/* Who */}
          <section id="who" className="py-16 md:py-20 px-5 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
                <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-[0.12em] uppercase mb-4 font-mono">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {t.who.badge}
                </div>
                <h2 className="text-[26px] sm:text-3xl md:text-[34px] font-bold text-stragy-dark-text leading-tight">
                  {t.who.title}
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {t.who.cards.map((card, i) => (
                  <div
                    key={i}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-7 shadow-md border border-stragy-dark-text/[0.05]"
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

          {/* Pricing */}
          <section id="pricing" className="py-16 md:py-20 px-5 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center mb-8 md:mb-10">
                <div className="inline-flex items-center p-1 rounded-full bg-white/70 backdrop-blur-sm border border-stragy-dark-text/[0.07] shadow-sm">
                  <button
                    type="button"
                    onClick={() => setAnnual(false)}
                    className={`rounded-full px-4 py-2 text-[12.5px] font-semibold transition ${
                      annual ? "text-stragy-dark-text/60" : "bg-primary text-white"
                    }`}
                  >
                    {t.pricing.monthly}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAnnual(true)}
                    className={`rounded-full px-4 py-2 text-[12.5px] font-semibold transition ${
                      annual ? "bg-primary text-white" : "text-stragy-dark-text/60"
                    }`}
                  >
                    {t.pricing.annual}
                  </button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-stretch gap-5 lg:gap-6">
                {/* Self-serve plans */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:basis-[72%]">
                  {selfServePlans.map((plan, i) => renderPlanCard(plan, i))}
                </div>

                {/* Separator */}
                <div className="hidden lg:block w-px self-stretch bg-stragy-dark-text/15" />
                <div className="lg:hidden h-px w-full bg-stragy-dark-text/15 mt-6 mb-2" />

                {/* Business */}
                {businessPlan && (
                  <div className="lg:basis-[20%] flex">{renderPlanCard(businessPlan, 99)}</div>
                )}
              </div>
            </div>
          </section>


          {/* Final CTA */}
          <section id="cta" className="py-16 md:py-20 px-5 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div
                className="rounded-[24px] md:rounded-[32px] px-6 sm:px-8 py-14 md:py-20 text-center text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #7A6CD6 0%, #B08FDB 55%, #E9A9C6 100%)",
                }}
              >
                <h2 className="text-2xl md:text-[34px] font-bold mb-4">
                  {t.finalCta.title}
                </h2>
                <p className="text-[14.5px] md:text-[15.5px] text-white/85 mb-8 max-w-xl mx-auto">
                  {t.finalCta.subtitle}
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
          <footer className="py-12 md:py-14 px-5 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="border-t border-stragy-dark-text/10 pt-8 flex flex-wrap justify-between items-center gap-5">
                <div className="text-lg font-bold text-stragy-dark-text tracking-wide">STRAGY</div>
                <div className="flex flex-wrap gap-4 md:gap-6 text-[13.5px] text-stragy-dark-text/60">
                  <a href="#how" className="hover:text-stragy-dark-text transition">{t.nav.how}</a>
                  <a href="#pricing" className="hover:text-stragy-dark-text transition">{t.footer.pricing}</a>
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
                <div className="text-[12.5px] text-stragy-dark-text/50">{t.footer.copyright}</div>
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
    </>
  );
};

export default Index;
