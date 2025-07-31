import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PrivacyPolicyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PrivacyPolicy = ({ open, onOpenChange }: PrivacyPolicyProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-y-auto font-inter">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-stragy-dark-text">
            Политика конфиденциальности
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 text-stragy-gray-text">
          <p className="text-sm">
            <strong>Дата вступления в силу:</strong> 30 июня 2025 г.
          </p>
          
          <p>
            STRAGY уважает вашу конфиденциальность и обязуется защищать ваши персональные данные. 
            Настоящая Политика конфиденциальности объясняет, какие данные мы собираем и как мы их используем.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-stragy-dark-text mb-2">1. Какие данные мы собираем</h3>
            <p>
              Мы собираем только ваш адрес электронной почты, который вы предоставляете при регистрации на нашем лендинге.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stragy-dark-text mb-2">2. Цель сбора данных</h3>
            <p>Мы используем ваш email только для следующих целей:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Для отправки кода доступа к тестированию сервиса STRAGY.</li>
              <li>Для обеспечения последующего входа в сервис STRAGY.</li>
            </ul>
            <p className="mt-2">
              Мы не используем ваш email для рекламных или маркетинговых рассылок без вашего отдельного согласия.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stragy-dark-text mb-2">3. Хранение и защита данных</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Ваш email хранится в защищённой таблице Google Sheets с ограниченным доступом.</li>
              <li>
                Мы принимаем необходимые технические и организационные меры для защиты ваших данных 
                от несанкционированного доступа, утраты или изменения.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stragy-dark-text mb-2">4. Передача данных третьим лицам</h3>
            <p>
              Мы не передаём и не продаём ваши персональные данные третьим лицам. Доступ к данным имеют только 
              сотрудники STRAGY, ответственные за поддержку пользователей и техническое обеспечение доступа.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stragy-dark-text mb-2">5. Ваши права</h3>
            <p>Вы имеете право в любой момент:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Запросить информацию о том, какие данные мы храним.</li>
              <li>Потребовать удалить ваши данные.</li>
              <li>Отозвать своё согласие на обработку персональных данных.</li>
            </ul>
            <p className="mt-2">
              Для реализации этих прав свяжитесь с нами: hello.stragy@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stragy-dark-text mb-2">6. Использование cookie</h3>
            <p>
              На сайте могут использоваться cookie-файлы только для корректной работы формы регистрации 
              и аутентификации. Cookie не используются для рекламы или аналитики.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stragy-dark-text mb-2">7. Изменения Политики</h3>
            <p>
              В случае изменений мы опубликуем обновлённую версию Политики конфиденциальности на нашем сайте. 
              Рекомендуем время от времени проверять актуальность.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stragy-dark-text mb-2">Контакты</h3>
            <p>
              По вопросам защиты персональных данных: 📧{" "}
              <a href="mailto:hello@stragy.com" className="text-primary hover:underline">
                hello@stragy.com
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};