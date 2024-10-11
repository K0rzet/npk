import React from 'react';
import PropTypes from 'prop-types';
import styles from './PartnerCard.module.scss';

interface PartnerCardProps {
  logo: string;
  name: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ logo, name }) => {
  return (
    <div className={styles.partnerCard}>
      <img src={logo} alt={name} className={styles.partnerLogo} />
    </div>
  );
};

PartnerCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PartnerCard;
