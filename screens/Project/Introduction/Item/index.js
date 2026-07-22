import React from "react";
import styles from "./item.module.css";
import cn from "classnames";

export default function Item({ title, project, image, content }) {
  return (
    <div className={styles.container}>
      {image && (
        <div className={styles.image_container}>
          <img className={styles.image} src={image} alt={project.title} />
        </div>
      )}

      <div className={cn("h4", styles.title)}>{title}</div>
      <div className={styles.items}>
        {content.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={cn("body-2-semibold", styles.text)}>
              {item.title}
            </div>
            <div className={cn("caption", styles.subtitle)}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
