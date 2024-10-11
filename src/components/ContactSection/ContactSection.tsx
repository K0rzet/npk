import React from "react";
import styles from "./ContactSection.module.scss";
import ContactForm from "../../ui/ContactForm/ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <h2>Связаться с нами</h2>
      <div className={styles.contactFormContent}>
        <ContactForm />
        <div className={styles.contactInfo}>
          <h2>Контакты</h2>
          <ul className={styles.contactAddress}>
            <li>
              <p>111141, Москва, Зеленый пр-кт., д. 5/12, офис 236</p>
            </li>
            <li>
              <p></p>
            </li>
            <li>
              <p></p>
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
              <a href="mail:npk_olimp@mail.ru">npk_olimp@mail.ru</a>
            </li>
            <li>
              <a href="mail:info@npkolimp.ru">info@npkolimp.ru</a>
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
      </div>
    </section>
  );
};

export default ContactSection;
