import React, { useState, useEffect, useRef, useContext } from 'react';
import styles from './Slider.module.css';

import arrowLight from '../../assets/images/arrow.svg';
import arrowDark from '../../assets/images/arrow-dark.svg';

import { ThemeContext } from '../themeContext/ThemeContext';

const Slider = () => {
  const { isDark } = useContext(ThemeContext);
  const arrow = isDark ? arrowDark : arrowLight;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);
  const sliderListRef = useRef(null);
  const sliderItemsRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  // Touch swipe state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const items = [
    'Java', 'JavaScript', 'Python', 'C++', 'Ruby', 'Go', 'Swift', 'PHP',
    'TypeScript', 'Kotlin', 'Rust', 'Scala', 'Perl', 'Lua', 'Elixir',
    'Haskell', 'Shell'
  ];

  // Calculate how many items can fit, and update maxSlide
  const calculateMaxSlide = () => {
    if (!sliderItemsRef.current || !sliderListRef.current) return 0;
    const visibleWidth = sliderItemsRef.current.offsetWidth;
    const firstItem = sliderListRef.current.querySelector('li');
    const currentItemWidth = firstItem ? firstItem.offsetWidth + 10 : 110;
    const visibleItemsCount = Math.floor(visibleWidth / currentItemWidth);
    setItemWidth(currentItemWidth);
    return Math.max(0, items.length - visibleItemsCount);
  };

  useEffect(() => {
    const updateMaxSlide = () => {
      const newMaxSlide = calculateMaxSlide();
      setMaxSlide(newMaxSlide);
      if (currentSlide > newMaxSlide) {
        setCurrentSlide(newMaxSlide);
      }
    };
    updateMaxSlide();
    window.addEventListener('resize', updateMaxSlide);
    return () => window.removeEventListener('resize', updateMaxSlide);
  }, [currentSlide]);

  // Swipe logic
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) < 50) return; // threshold
    if (distance > 0) handleNext(); // swipe left
    else handlePrev(); // swipe right
  };

  const handleNext = () => {
    if (currentSlide < maxSlide) setCurrentSlide(currentSlide + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const getTransform = () => `translateX(-${currentSlide * itemWidth}px)`;

  return (
    <div className={styles.sliderContainer}>
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={handlePrev}
        disabled={currentSlide === 0}
      >
        <img src={arrow} alt="Previous" />
      </button>

      <div
        className={styles.sliderItems}
        ref={sliderItemsRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ul
          className={styles.sliderList}
          style={{ transform: getTransform() }}
          ref={sliderListRef}
        >
          {items.map((item, index) => (
            <li key={index} className={styles.sliderItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={handleNext}
        disabled={currentSlide === maxSlide}
      >
        <img src={arrow} alt="Next" />
      </button>
    </div>
  );
};

export default Slider;
