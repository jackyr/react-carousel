import React, { memo } from 'react';
import { classNames, useAccessibility } from '../utils';
import type { IndicatorPropsType } from '../types.d';
import styles from './dot.module.css';

const Dot: React.FC<IndicatorPropsType> = ({
  uid,
  itemCount,
  activeIndex,
  goTo,
}) => {
  // make accessibility
  const handleKeyDown = useAccessibility();

  return (
    <ul
      className={styles.indicator}
      role="tablist"
    >
      {Array.from({ length: itemCount }).map((_, i) => (
        <li
          key={i}
          id={`carousel-indicator-${uid}-${i}`}
          role="tab"
          aria-label={`change to page ${i + 1}`}
          aria-controls={`carousel-item-${uid}-${i}`}
          aria-selected={activeIndex === i}
          tabIndex={activeIndex === i ? 0 : -1}
          className={classNames(styles.indicator_item, {[styles.active]: activeIndex === i})}
          onClick={() => goTo(i)}
          onKeyDown={handleKeyDown}
        ></li>
      ))}
    </ul>
  );
};

export default memo(Dot);