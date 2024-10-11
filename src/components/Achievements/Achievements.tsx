import styles from './Achievements.module.scss';

const achievementsData = [
  { number: 15, label: 'Поликлиник' },
  { number: 71, label: 'Гос заказов' },
  { number: 47, label: 'Школ' },
  { number: 95, label: 'ДОУ' },
];

const Achievements = () => {
  return (
    <section className={styles.achievements}>
      <h2>На нашем счету</h2>
      <div className={styles.achievementsContent}>

        {achievementsData.map((item, index) => (
          <div key={index} className={styles.achievement}>
            <div className={styles.number}>{item.number}</div>
            <div className={styles.label}>{item.label}</div>
            {index < achievementsData.length - 1 && <div className={styles.separator}></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
