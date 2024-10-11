import React from 'react';
import styles from './Arrow.module.scss';

type ArrowProps = {
  direction: 'left' | 'right';
  handleClick: () => void;
};

const Arrow: React.FC<ArrowProps> = ({ direction, handleClick }) => {
  return (
    <div
      className={`${styles.arrow} ${direction === 'left' ? styles.left : styles.right}`}
      onClick={handleClick}
    >
      {direction === 'left' ? '<' : '>'}
    </div>
  );
};

export default Arrow;
