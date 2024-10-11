import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import { ApiService } from '../../services/api.service';
import { IContactForm } from '../../types/types';


const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IContactForm>();

  const onSubmit: SubmitHandler<IContactForm> = async (data) => {
    try {
      await ApiService.postContact(data);
      alert('Форма успешно отправлена!');
    } catch (error) {
      console.error('Error submitting the form', error);
      alert('Произошла ошибка при отправке формы.');
    }
  };

  return (
    <div className={styles.contactContainer}>
      <p className={styles.formText}>
        Есть вопросы? Мы вам поможем – закажите обратный звонок и мы свяжемся с вами в ближайшее время!
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label>Имя</label>
          <input
            type="text"
            placeholder='Иван'
            {...register('name', { required: 'Введите ваше имя' })}
          />
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        </div>
        <div className={styles.formGroup}>
          <label>E-mail</label>
          <input
            type="email"
            placeholder='example@mail.ru'
            {...register('email', {
              required: 'Введите ваш email',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Неверный формат email'
              }
            })}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>
        <div className={styles.formGroup}>
          <label>Телефон</label>
          <input
            type="tel"
            placeholder='+79999999999'
            {...register('phone', { required: 'Введите ваш номер телефона' })}
          />
          {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
        </div>
        <div className={styles.formGroup}>
          <label>Сообщение</label>
          <textarea
            placeholder='Что вас интересует?'
            {...register('message', { required: 'Введите ваше сообщение' })}
          />
          {errors.message && <span className={styles.error}>{errors.message.message}</span>}
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default ContactForm;
