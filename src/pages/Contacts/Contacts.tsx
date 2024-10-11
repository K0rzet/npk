import Meta from "../../utils/Meta";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <Meta title="Контакты">
      <section className={styles.contactsSection}>
        <h2>Контакты</h2>
        <div className={styles.contactsContainer}>
          <div className={styles.contactInfo}>
            <ul className={styles.contactAddress}>
              <li>
                <p>111141, Москва, Зеленый пр-кт., д. 5/12, офис 236</p>
              </li>
            </ul>
            <ul className={styles.contactNumber}>
              <li>
                <a href="tel:+7 (495) 229-89-80">+7 (495) 229-89-80</a>
              </li>
              <li>
                <a href="tel:+7 (495) 229-89-85">+7 (495) 229-89-85</a>
              </li>
              <li>
                <a href="tel:+7 (495) 368-66-07">+7 (495) 368-66-07</a>
              </li>
            </ul>
            <ul className={styles.contactMail}>
              <li>
                <a href="mailto:npk_olimp@mail.ru">npk_olimp@mail.ru</a>
              </li>
              <li>
                <a href="mailto:info@npkolimp.ru">info@npkolimp.ru</a>
              </li>
            </ul>
            <ul className={styles.socialIcons}>
              <li>
                <a
                  href="https://www.youtube.com/@user-nk7wj8xy4v"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/ytico.svg" alt="Youtube" />
                </a>
              </li>
              <li>
                <a
                  href="https://vk.com/mebelfactoryolimp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/vkico.svg" alt="VK" />
                </a>
              </li>
            </ul>
            <p className={styles.greeting}>
              Всегда рады ответить на ваши вопросы!
            </p>
          </div>
          <div className={styles.contactsImg}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3A5fd873b26244c5702c94c0e1fa5832c251c162f85f4538fa6bd41b630a28e220"
              allowFullScreen={true}
              width="100%"
              height="520px"
              style={{ display: "block" }}
            ></iframe>
          </div>
        </div>
      </section>
    </Meta>
  );
};

export default Contacts;
