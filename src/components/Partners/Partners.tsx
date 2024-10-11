import React from 'react';
import PartnerCard from './PartnerCard';
import styles from './Partners.module.scss';

const partnersData = [
  { id: 1, logo: '/partners/partner1.png', name: 'Донстрой' },
  { id: 2, logo: '/partners/partner2.png', name: 'Pioneer' },
  { id: 3, logo: '/partners/partner3.png', name: '' },
  { id: 4, logo: '/partners/fsk-logo.png', name: '' },
  { id: 5, logo: '/partners/ingrad-logo.png', name: '' },
  { id: 6, logo: '/partners/logo-lsr.png', name: '' },
  { id: 7, logo: '/partners/mosedu-logo.png', name: '' },
  { id: 8, logo: '/partners/pik-logo.png', name: '' },
  { id: 8, logo: '/partners/samolet-logo.png', name: '' },
];

const Partners: React.FC = () => {
  return (
    <section className={styles.partners}>
      <h2>Партнеры</h2>
      <div className={styles.partnersContent}>

        {partnersData.map(partner => (
          <PartnerCard
            key={partner.id}
            logo={partner.logo}
            name={partner.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;
