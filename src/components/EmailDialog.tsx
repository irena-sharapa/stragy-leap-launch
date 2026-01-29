import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Translations } from "@/lib/translations";

interface EmailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  translations: Translations;
}

export const EmailDialog = ({ open, onOpenChange, translations }: EmailDialogProps) => {
  const [email, setEmail] = useState("");
  const [isConsented, setIsConsented] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const t = translations.emailDialog;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !isConsented) {
      toast({
        title: t.errorTitle,
        description: t.errorDescription,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Отправка на API endpoint
      const response = await fetch("https://stragy.work.gd/api/user/request-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      toast({
        title: t.successTitle,
        description: t.successDescription,
        className: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-32 text-lg z-50",
      });
      
      setEmail("");
      setIsConsented(false);
      onOpenChange(false);
    } catch (error) {
      console.log("Email collected:", email);
      toast({
        title: t.fallbackTitle,
        description: t.fallbackDescription,
        className: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-32 text-lg z-50",
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
      <DialogContent className="sm:max-w-2xl max-w-4xl font-inter p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-stragy-dark-text">
            {t.title}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <p className="text-stragy-gray-text text-sm leading-relaxed">
              {t.description}
            </p>
            
            <Input
              type="email"
              placeholder={t.placeholder}
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
                {t.consent}{" "}
                <a 
                  href="#privacy" 
                  className="text-primary hover:underline"
                  onClick={(e) => e.preventDefault()}
                >
                  {t.privacyLink}
                </a>
              </label>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 text-base font-medium rounded-2xl"
            disabled={!email || !isConsented || isLoading}
          >
            {isLoading ? t.submitting : t.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
