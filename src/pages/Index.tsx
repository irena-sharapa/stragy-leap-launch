import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmailDialog } from "@/components/EmailDialog";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { BarChart3, Target, Settings, Calculator, TrendingUp } from "lucide-react";
import laptopImage from "@/assets/laptop.png";
import laptopVideo from "@/assets/laptop-video.mp4";
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
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex flex-col items-start space-y-8 max-w-xl lg:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-bold text-stragy-dark-text leading-tight">
                {t.hero.title}
              </h1>
              <div className="space-y-4">
                <p className="text-stragy-dark-text/80 leading-relaxed">
                  {t.hero.subtitle}
                </p>
                <div className="text-stragy-dark-text/80 space-y-3">
                  <p className="font-medium">{t.hero.benefits.title}</p>
                  <ul className="space-y-3 list-none">
                    {t.hero.benefits.items.map((item, index) => (
                      <li key={index} className="bg-muted/50 backdrop-blur-sm rounded-2xl shadow-lg p-4 flex items-start space-x-3">
                        <div className="w-2 h-2 bg-stragy-dark-text rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button 
                onClick={() => setEmailDialogOpen(true)}
                size="lg" 
                className="rounded-2xl h-12 px-8 text-base font-medium"
              >
                {t.header.tryFree}
              </Button>
            </div>

            {/* Laptop with video */}
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="relative w-full max-w-[700px]">
                <img
                  src={laptopImage}
                  alt="Laptop"
                  className="w-full h-auto block"
                  draggable={false}
                />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute object-cover"
                  style={{
                    top: '5.5%',
                    left: '11.8%',
                    width: '76.5%',
                    height: '79%',
                    borderRadius: '4px',
                  }}
                >
                  <source src={laptopVideo} type="video/mp4" />
                </video>
              </div>
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
