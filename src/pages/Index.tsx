import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmailDialog } from "@/components/EmailDialog";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { BarChart3, Target, Settings, Calculator, TrendingUp } from "lucide-react";
import newBackground from "@/assets/new-background.jpg";
import laptopScreenshot from "@/assets/laptop-screenshot.png";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslations } from "@/lib/translations";

const Index = () => {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false);
  
  const { currentLang } = useLanguage();
  const t = getTranslations(currentLang);

  const featureIcons = [BarChart3, Target, Settings, Calculator, TrendingUp];

  return (
    <div className="min-h-screen font-inter relative overflow-hidden bg-background" style={{ backgroundImage: `url(${newBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-stragy-dark-text/[0.06]" />
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full border border-stragy-dark-text/[0.04]" />
        <div className="absolute top-10 right-20 w-48 h-48 rounded-full border border-primary/[0.05]" />
        
        {/* Left mid dots pattern */}
        <svg className="absolute top-1/4 -left-4 opacity-[0.07]" width="120" height="200" viewBox="0 0 120 200">
          {Array.from({ length: 40 }).map((_, i) => (
            <circle key={i} cx={(i % 5) * 28 + 14} cy={Math.floor(i / 5) * 28 + 14} r="3" fill="hsl(var(--stragy-dark-text))" />
          ))}
        </svg>

        {/* Right dots pattern */}
        <svg className="absolute top-[55%] right-0 opacity-[0.05]" width="100" height="160" viewBox="0 0 100 160">
          {Array.from({ length: 32 }).map((_, i) => (
            <circle key={i} cx={(i % 4) * 28 + 10} cy={Math.floor(i / 4) * 22 + 10} r="2.5" fill="hsl(var(--primary))" />
          ))}
        </svg>

        {/* Right mid abstract ring */}
        <div className="absolute top-[60%] -right-16 w-64 h-64 rounded-full border-2 border-dashed border-primary/[0.08]" />

        {/* Bottom-left large circles */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full border border-stragy-dark-text/[0.05]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-primary/[0.06]" />

        {/* Mid-page horizontal line */}
        <div className="absolute top-[45%] left-[5%] w-[30%] h-px bg-gradient-to-r from-transparent via-stragy-dark-text/[0.08] to-transparent" />
        <div className="absolute top-[80%] right-[5%] w-[25%] h-px bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent" />

        {/* Floating small shapes */}
        <div className="absolute top-[15%] left-[20%] w-3 h-3 rounded-full bg-primary/[0.1]" />
        <div className="absolute top-[40%] right-[15%] w-4 h-4 rounded-sm bg-stragy-dark-text/[0.06] rotate-45" />
        <div className="absolute top-[70%] left-[10%] w-5 h-5 rounded-full bg-primary/[0.07]" />
        <div className="absolute top-[85%] right-[25%] w-3 h-3 rounded-full bg-stragy-dark-text/[0.05]" />
        <div className="absolute top-[50%] left-[50%] w-2 h-2 rounded-full bg-primary/[0.08]" />
        <div className="absolute top-[25%] right-[40%] w-2 h-2 rounded-sm bg-primary/[0.06] rotate-12" />
        <div className="absolute top-[65%] left-[45%] w-3 h-3 rounded-full bg-stragy-dark-text/[0.04]" />
        <div className="absolute top-[90%] left-[60%] w-4 h-4 rounded-sm bg-primary/[0.05] -rotate-12" />

        {/* Cross marks */}
        <svg className="absolute top-[30%] right-[30%] opacity-[0.06]" width="24" height="24" viewBox="0 0 24 24">
          <line x1="0" y1="12" x2="24" y2="12" stroke="hsl(var(--stragy-dark-text))" strokeWidth="2" />
          <line x1="12" y1="0" x2="12" y2="24" stroke="hsl(var(--stragy-dark-text))" strokeWidth="2" />
        </svg>
        <svg className="absolute top-[75%] left-[35%] opacity-[0.05]" width="20" height="20" viewBox="0 0 20 20">
          <line x1="0" y1="10" x2="20" y2="10" stroke="hsl(var(--primary))" strokeWidth="2" />
          <line x1="10" y1="0" x2="10" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" />
        </svg>
        <svg className="absolute top-[10%] left-[60%] opacity-[0.04]" width="16" height="16" viewBox="0 0 16 16">
          <line x1="0" y1="8" x2="16" y2="8" stroke="hsl(var(--stragy-dark-text))" strokeWidth="1.5" />
          <line x1="8" y1="0" x2="8" y2="16" stroke="hsl(var(--stragy-dark-text))" strokeWidth="1.5" />
        </svg>

        {/* Diamond shapes */}
        <div className="absolute top-[35%] left-[8%] w-6 h-6 border border-primary/[0.08] rotate-45" />
        <div className="absolute top-[55%] right-[10%] w-4 h-4 border border-stragy-dark-text/[0.06] rotate-45" />

        {/* Curved line accent */}
        <svg className="absolute top-[20%] right-[5%] opacity-[0.05]" width="200" height="100" viewBox="0 0 200 100" fill="none">
          <path d="M0 80 Q100 0 200 50" stroke="hsl(var(--primary))" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative z-10">
      {/* Header */}
      <header className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-3xl font-bold text-stragy-dark-text">
              STRAGY
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Button 
                onClick={() => setEmailDialogOpen(true)}
                className="rounded-2xl h-10 px-6 font-medium"
              >
                {t.header.tryFree}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Tagline - centered */}
          <h1 className="text-2xl lg:text-3xl font-bold text-stragy-dark-text tracking-wide text-center">
            {t.hero.tagline}
          </h1>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Left column: text + how it works + CTA */}
            <div className="flex-1 space-y-6 text-left">
              <h2 className="text-xl lg:text-2xl font-bold text-stragy-dark-text tracking-wider uppercase leading-snug">
                {t.hero.subtitle}
              </h2>

              <div className="space-y-4">
                <p className="font-medium text-stragy-dark-text">{t.hero.howItWorks.title}</p>
                <p className="text-stragy-dark-text/80">{t.hero.howItWorks.description}</p>
                <ul className="space-y-3 list-none">
                  {t.hero.howItWorks.items.map((item, index) => (
                    <li key={index} className="bg-muted/50 backdrop-blur-sm rounded-2xl shadow-lg p-4 flex items-start space-x-3">
                      <div className="w-2 h-2 bg-stragy-dark-text rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-stragy-dark-text/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                onClick={() => setEmailDialogOpen(true)}
                size="lg" 
                className="rounded-2xl h-12 px-8 text-base font-medium"
              >
                {t.header.tryFree}
              </Button>
            </div>

            {/* Right column: laptop */}
            <div className="flex-1 w-full max-w-[600px]">
              <img 
                src={laptopScreenshot} 
                alt="STRAGY Platform" 
                className="w-full h-auto"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {t.features.items.map((feature, index) => {
              const Icon = featureIcons[index] || BarChart3;
              return (
                <Card key={index} className="border-0 shadow-lg rounded-2xl bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <Icon className="w-6 h-6 text-stragy-dark-text" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-stragy-dark-text text-lg">
                          {feature.title}
                        </h3>
                        <p className="text-stragy-dark-text/80 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-stragy-dark-text text-center mb-12">
            {t.audience.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl bg-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-stragy-dark-text mb-4">
                  {t.audience.marketers.title}
                </h3>
                <p className="text-stragy-dark-text/80 leading-relaxed">
                  {t.audience.marketers.description}
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg rounded-2xl bg-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-stragy-dark-text mb-4">
                  {t.audience.owners.title}
                </h3>
                <p className="text-stragy-dark-text/80 leading-relaxed">
                  {t.audience.owners.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent py-12 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="flex justify-center space-x-8 text-sm text-stragy-dark-text">
            <button 
              onClick={() => setPrivacyDialogOpen(true)}
              className="hover:text-white transition-colors"
            >
              {t.footer.privacy}
            </button>
            <a 
              href="mailto:hello@stragy.com" 
              className="hover:text-white transition-colors"
            >
              hello@stragy.com
            </a>
          </div>
        </div>
      </footer>

      {/* Dialogs */}
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
