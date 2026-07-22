import React from "react";
import styles from "./feature.module.css";
import cn from "classnames";

export default function Feature({ icon, title, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>
        <div className={styles.icon}>{icon}</div>
      </div>

      <h3 className={cn("body-2-semibold", styles.title)}>{title}</h3>
      <p className={cn("caption", styles.description)}>{description}</p>
    </div>
  );
}
