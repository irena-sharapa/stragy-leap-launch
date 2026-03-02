import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmailDialog } from "@/components/EmailDialog";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { BarChart3, Target, Settings, Calculator, TrendingUp } from "lucide-react";
import newBackground from "@/assets/new-background.jpg";
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
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo */}
            <img 
              src="/lovable-uploads/35722fd0-37d9-4aae-b7f1-bf47541e3125.png" 
              alt="STRAGY Logo" 
              className="h-16 lg:h-20"
              draggable={false}
            />
            
            {/* Tagline */}
            <h1 className="text-2xl lg:text-3xl font-bold text-stragy-dark-text tracking-wide">
              {t.hero.tagline}
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-stragy-dark-text/80 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* How it works */}
            <div className="space-y-4 w-full max-w-xl">
              <p className="font-medium text-stragy-dark-text">{t.hero.howItWorks.title}</p>
              <p className="text-stragy-dark-text/80">{t.hero.howItWorks.description}</p>
              <ul className="space-y-3 list-none text-left">
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
