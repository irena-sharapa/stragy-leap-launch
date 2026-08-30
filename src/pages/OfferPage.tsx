import { Helmet } from "react-helmet-async";

const OfferPage = () => (
  <>
    <Helmet>
      <title>Договор публичной оферты — STRAGY</title>
      <meta
        name="description"
        content="Условия предоставления доступа к платформе STRAGY: предмет договора, порядок оплаты по счёту и права сторон."
      />
      <link rel="canonical" href="https://stragy.lovable.app/offer" />
    </Helmet>

    <main className="min-h-screen bg-background font-inter px-5 py-14">
      <article className="max-w-3xl mx-auto space-y-6 text-stragy-gray-text">
        <h1 className="text-3xl font-bold text-stragy-dark-text">Договор публичной оферты</h1>
        <p className="text-sm">
          <strong>Редакция от:</strong> 29 августа 2026 г.
        </p>

        <p>
          Настоящий документ является публичной офертой STRAGY (далее — Исполнитель) и содержит
          условия предоставления доступа к платформе STRAGY (далее — Платформа) любому лицу,
          принявшему её условия (далее — Заказчик).
        </p>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">1. Предмет договора</h2>
          <p>
            Исполнитель предоставляет Заказчику доступ к функциональности Платформы в объёме
            выбранного тарифного плана, а Заказчик оплачивает такой доступ в порядке, установленном
            настоящим Договором.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">2. Порядок заключения</h2>
          <p>
            Заказчик оставляет заявку на Сайте с указанием тарифа, email и телефона. Менеджер
            Исполнителя связывается с Заказчиком, уточняет реквизиты и выставляет счёт. Оплата счёта
            является акцептом настоящей оферты и означает полное согласие с её условиями.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">
            3. Стоимость и порядок расчётов
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Стоимость доступа определяется тарифом, указанным на Сайте на момент выставления счёта.</li>
            <li>Оплата производится безналичным перечислением по выставленному счёту.</li>
            <li>При годовой оплате применяется скидка, указанная на странице тарифов.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">
            4. Предоставление доступа
          </h2>
          <p>
            Доступ к Платформе открывается после поступления оплаты; данные для входа направляются
            на email, указанный в заявке. Срок доступа соответствует оплаченному периоду.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">5. Права и обязанности</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Исполнитель обеспечивает работоспособность Платформы и поддержку Заказчика.</li>
            <li>
              Заказчик обязуется не передавать доступ третьим лицам и использовать Платформу в
              рамках применимого законодательства.
            </li>
            <li>
              Исполнитель вправе изменять функциональность Платформы, не ухудшая существенно объём
              оплаченного тарифа.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">
            6. Персональные данные
          </h2>
          <p>
            Обработка персональных данных осуществляется в соответствии с{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Политикой обработки персональных данных
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stragy-dark-text mb-2">
            7. Изменения условий и контакты
          </h2>
          <p>
            Актуальная редакция оферты всегда публикуется на этой странице. Вопросы:{" "}
            <a href="mailto:hello.stragy@gmail.com" className="text-primary hover:underline">
              hello.stragy@gmail.com
            </a>
            .
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

export default OfferPage;
