import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmailDialog } from "@/components/EmailDialog";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { BarChart3, Target, Settings, Calculator, TrendingUp } from "lucide-react";

const Index = () => {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false);

  const features = [
    {
      icon: BarChart3,
      title: "Глубокий анализ рынка и конкурентов",
      description: "Получите мгновенный доступ к актуальной информации о продуктах, ценах и ассортименте ваших конкурентов..."
    },
    {
      icon: Target,
      title: "Четкий путь клиента, пошаговые инструкции",
      description: "STRAGY определит, где находится ваш клиент, и предоставит четкий план действий от первого контакта до повторной покупки."
    },
    {
      icon: Settings,
      title: "Точные настройки рекламных инструментов",
      description: "Подбор параметров и рекомендаций для лучших рекламных каналов под цели вашего бизнеса."
    },
    {
      icon: Calculator,
      title: "Прозрачное бюджетирование",
      description: "STRAGY подскажет, сколько потратить на каждую кампанию и запуск."
    },
    {
      icon: TrendingUp,
      title: "Актуальность и эффективность",
      description: "Мы анализируем только самые эффективные и свежие инструменты."
    }
  ];

  return (
    <div className="min-h-screen font-inter bg-gradient-hero">
      {/* Header */}
      <header className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-stragy-dark-text">
              STRAGY
            </div>
            <Button 
              onClick={() => setEmailDialogOpen(true)}
              className="rounded-2xl h-10 px-6 font-medium"
            >
              Попробовать бесплатно
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-stragy-dark-text leading-tight">
                STRAGY — ваш личный помощник по маркетингу
              </h1>
              <p className="text-lg text-stragy-gray-text leading-relaxed">
                STRAGY — это умная SaaS-платформа, которая разработает маркетинговую стратегию с пошаговым планом 
                (как, где и что именно делать), чтобы добиться именно твоих маркетинг и бизнес целей, составит 
                бюджет, проанализирует конкурентов.
              </p>
              <Button 
                onClick={() => setEmailDialogOpen(true)}
                size="lg" 
                className="rounded-2xl h-12 px-8 text-base font-medium"
              >
                Попробовать бесплатно
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <img 
                  src="/lovable-uploads/bf46a8fd-1dce-4003-ba57-af527f082346.png" 
                  alt="STRAGY Dashboard"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl bg-white/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <feature.icon className="w-6 h-6 text-stragy-dark-text" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-stragy-dark-text text-center mb-12">
            Для кого STRAGY
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl bg-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-stragy-dark-text mb-4">
                  Для маркетологов
                </h3>
                <p className="text-stragy-dark-text/80 leading-relaxed">
                  От новичков до профессионалов. Экономьте до 70% времени, будьте в курсе новинок, 
                  оптимизируйте кампании.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg rounded-2xl bg-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-stragy-dark-text mb-4">
                  Для владельцев бизнеса
                </h3>
                <p className="text-stragy-dark-text/80 leading-relaxed">
                  Получите стратегию без затрат на найм специалистов, сосредоточьтесь на росте бизнеса.
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
              Политика конфиденциальности
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
      />
      <PrivacyPolicy 
        open={privacyDialogOpen} 
        onOpenChange={setPrivacyDialogOpen} 
      />
    </div>
  );
};

export default Index;
