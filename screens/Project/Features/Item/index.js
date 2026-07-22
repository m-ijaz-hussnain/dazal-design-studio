import React from "react";
import styles from "./item.module.css";
import cn from "classnames";

export default function Item({ project, image, title, content }) {
  return (
    <div className={styles.container}>
      {image && (
        <div className={styles.image_container}>
          <img className={styles.image} src={image} alt={project.title} />
        </div>
      )}

      <div className={styles.title_container}>
        <div className={cn("body-1-bold", styles.title)}>{title}</div>

        <ul className={styles.items}>
          {content.map((item, index) => (
            <li key={index} className={styles.item}>
              <div className={cn("caption", styles.text)}>{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
