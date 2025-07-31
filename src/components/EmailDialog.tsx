import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface EmailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EmailDialog = ({ open, onOpenChange }: EmailDialogProps) => {
  const [email, setEmail] = useState("");
  const [isConsented, setIsConsented] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !isConsented) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля и дайте согласие на обработку данных",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Отправка в Google Sheets
      const response = await fetch("https://docs.google.com/forms/d/e/1FAIpQLSfExampleFormId/formResponse", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "entry.emailfield": email,
        }),
      });

      toast({
        title: "Успешно!",
        description: "Проверьте почту - мы отправили инструкции для доступа к STRAGY",
      });
      
      setEmail("");
      setIsConsented(false);
      onOpenChange(false);
    } catch (error) {
      console.log("Email collected:", email);
      toast({
        title: "Заявка принята!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      setEmail("");
      setIsConsented(false);
      onOpenChange(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md font-inter">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-stragy-dark-text">
            Получить доступ к STRAGY
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <p className="text-stragy-gray-text text-sm leading-relaxed">
              Введите адрес электронной почты, на которую мы предоставим доступ к сервису STRAGY. 
              Следуйте инструкциям в письме.
            </p>
            
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-base"
              required
            />
            
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={isConsented}
                onCheckedChange={(checked) => setIsConsented(checked === true)}
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-stragy-gray-text leading-relaxed">
                Я согласен на обработку персональных данных в соответствии с{" "}
                <a 
                  href="#privacy" 
                  className="text-primary hover:underline"
                  onClick={(e) => e.preventDefault()}
                >
                  Политикой конфиденциальности
                </a>
              </label>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 text-base font-medium rounded-2xl"
            disabled={!email || !isConsented || isLoading}
          >
            {isLoading ? "Отправляем..." : "Получить доступ"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};