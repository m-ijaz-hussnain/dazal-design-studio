"use client";

import React from "react";
import styles from "./carousel.module.css";
import cn from "classnames";

export default function Carousel({ images, interval = 2000 }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={cn({ [styles.active]: index === currentIndex })}
        />
      ))}

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={cn(styles.dot, {
              [styles.active]: index === currentIndex,
            })}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
