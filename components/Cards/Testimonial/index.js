import React from "react";
import styles from "./testimonial.module.css";
import cn from "classnames";

export default function Testimonial({ image, author, position, review }) {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <div className={styles.image_container}>
          <img className={styles.image} src={image} alt={author} />
        </div>

        <div>
          <div className={cn("body-2-semibold", styles.title)}>{author}</div>
          <div className={cn("caption", styles.text)}>{position}</div>
        </div>
      </div>

      <div className={cn("body-2", styles.subtitle)}>{review}</div>
    </div>
  );
}
