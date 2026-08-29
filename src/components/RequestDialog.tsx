import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Translations } from "@/lib/translations";
import { CheckCircle2 } from "lucide-react";

/** Version of the legal documents the consent refers to (kept with each request). */
export const LEGAL_DOCS_VERSION = "2026-08-29";

const API_URL = "https://stragy.work.gd/api/user/request-access";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const isValidPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15;
};

interface RequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  translations: Translations;
  plan: string;
  onPlanChange: (plan: string) => void;
}

export const RequestDialog = ({
  open,
  onOpenChange,
  translations,
  plan,
  onPlanChange,
}: RequestDialogProps) => {
  const t = translations.requestForm;
  const plans = translations.pricing.plans.map((p) => p.tier);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState(""); // honeypot
  const [touched, setTouched] = useState<{ email?: boolean; phone?: boolean }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      setSuccess(false);
      setError(false);
      setTouched({});
    }
  }, [open]);

  const emailValid = emailRe.test(email.trim());
  const phoneValid = isValidPhone(phone);
  const canSubmit = emailValid && phoneValid && consent && !isLoading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, phone: true });
    if (!canSubmit) return;
    if (company) return; // bot caught by honeypot

    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          phone: phone.trim(),
          plan,
          requested_at: new Date().toISOString(),
          consent: true,
          consent_documents_version: LEGAL_DOCS_VERSION,
        }),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      setSuccess(true);
      setEmail("");
      setPhone("");
      setConsent(false);
      setTouched({});
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg font-inter p-6 sm:p-8">
        {success ? (
          <div className="text-center py-4 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto" strokeWidth={1.75} />
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-stragy-dark-text text-center">
                {t.successTitle}
              </DialogTitle>
            </DialogHeader>
            <p className="text-sm text-stragy-gray-text leading-relaxed">{t.successText}</p>
            <Button
              type="button"
              className="w-full h-11 rounded-2xl"
              onClick={() => onOpenChange(false)}
            >
              {t.close}
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-stragy-dark-text">
                {t.title.replace("{plan}", plan)}
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[12.5px] font-medium text-stragy-gray-text">
                  {t.planLabel}
                </label>
                <Select value={plan} onValueChange={onPlanChange}>
                  <SelectTrigger className="h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    {plans.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="req-email" className="text-[12.5px] font-medium text-stragy-gray-text">
                  {t.emailLabel}
                </label>
                <Input
                  id="req-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  maxLength={255}
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched((s) => ({ ...s, email: true }))}
                  className="h-11"
                  required
                />
                {touched.email && !emailValid && (
                  <p className="text-[12px] text-destructive">{t.emailError}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="req-phone" className="text-[12.5px] font-medium text-stragy-gray-text">
                  {t.phoneLabel}
                </label>
                <Input
                  id="req-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  maxLength={25}
                  placeholder={t.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^\d+()\-\s]/g, ""))}
                  onBlur={() => setTouched((s) => ({ ...s, phone: true }))}
                  className="h-11"
                  required
                />
                {touched.phone && !phoneValid && (
                  <p className="text-[12px] text-destructive">{t.phoneError}</p>
                )}
              </div>

              {/* honeypot */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="hidden"
                aria-hidden="true"
              />

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="req-consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked === true)}
                  className="mt-0.5"
                />
                <label
                  htmlFor="req-consent"
                  className="text-[12.5px] text-stragy-gray-text leading-relaxed"
                >
                  {t.consentPrefix}
                  <a
                    href="/offer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t.offerLink}
                  </a>
                  {t.consentMid}
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t.privacyLink}
                  </a>
                </label>
              </div>

              {error && (
                <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-3">
                  <p className="text-[13px] font-semibold text-destructive">{t.errorTitle}</p>
                  <p className="text-[12.5px] text-stragy-gray-text mt-1">{t.errorText}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 text-base font-medium rounded-2xl"
                disabled={!canSubmit}
              >
                {isLoading ? t.submitting : error ? t.retry : t.submit}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
