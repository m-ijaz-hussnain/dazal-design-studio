import React from "react";
import styles from "./service.module.css";
import cn from "classnames";

export default function Service({ title, cost, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <div className={styles.cost}>
          <span className={cn("hairline-2", styles.text)}>{cost}</span>
        </div>

        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={cn("h4", styles.title)}>{title}</div>
      <p className={cn("body-2", styles.text)}>{cost}</p>
    </div>
  );
}
