import { Helmet } from "react-helmet-async";

const PrivacyPage = () => (
  <>
    <Helmet>
      <title>Политика обработки персональных данных — STRAGY</title>
      <meta
        name="description"
        content="Как STRAGY собирает, использует и защищает персональные данные пользователей платформы."
      />
      <link rel="canonical" href="https://stragy.lovable.app/privacy" />
    </Helmet>

    <main className="min-h-screen bg-background font-inter px-5 py-14">
      <article className="max-w-3xl mx-auto space-y-6 text-stragy-gray-text">
        <h1 className="text-3xl font-bold text-stragy-dark-text">
          Политика обработки персональных данных
        </h1>
        <p className="text-sm">
          <strong>Редакция от:</strong> 29 августа 2026 г.
        </p>

        <p>
          STRAGY уважает вашу конфиденциальность и обязуется защищать ваши персональные данные.
          Настоящая Политика объясняет, какие данные мы собираем и как мы их используем.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">
            1. Какие данные мы собираем
          </h2>
          <p>
            Адрес электронной почты и номер телефона, которые вы указываете в форме заявки, а также
            выбранный тариф, дату и время заявки и факт вашего согласия с документами.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">2. Цель обработки</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Связь менеджера с вами для уточнения реквизитов и выставления счёта.</li>
            <li>Предоставление доступа к платформе STRAGY после оплаты.</li>
          </ul>
          <p className="mt-2">
            Мы не используем ваши контакты для рекламных рассылок без отдельного согласия.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">3. Хранение и защита</h2>
          <p>
            Данные хранятся в защищённых системах с ограниченным доступом. Мы принимаем необходимые
            технические и организационные меры для защиты данных от несанкционированного доступа,
            утраты или изменения.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">
            4. Передача третьим лицам
          </h2>
          <p>
            Мы не продаём ваши данные. Доступ имеют только сотрудники STRAGY, отвечающие за поддержку
            пользователей и техническое обеспечение доступа.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">5. Ваши права</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Запросить информацию о хранимых данных.</li>
            <li>Потребовать удаления данных.</li>
            <li>Отозвать согласие на обработку персональных данных.</li>
          </ul>
          <p className="mt-2">
            Для реализации прав напишите на{" "}
            <a href="mailto:hello.stragy@gmail.com" className="text-primary hover:underline">
              hello.stragy@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">6. Cookie</h2>
          <p>
            Cookie используются для корректной работы форм и аутентификации, а также веб-аналитики
            сайта.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">7. Изменения</h2>
          <p>
            Обновлённые редакции Политики публикуются на этой странице с указанием даты редакции.
          </p>
        </section>

        <p>
          <a href="/" className="text-primary hover:underline">
            ← Вернуться на сайт
          </a>
        </p>
      </article>
    </main>
  </>
);

export default PrivacyPage;
