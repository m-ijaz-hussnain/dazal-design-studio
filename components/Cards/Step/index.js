import React from "react";
import styles from "./step.module.css";
import cn from "classnames";

export default function Step({
  icon,
  image,
  title,
  description,
  withBackground,
}) {
  return (
    <>
      {withBackground ? (
        <div className={styles.withBackground}>
          <div className={styles.icon_container}>{icon}</div>
          <div className={styles.content}>
            <div className={cn("body-2-semibold", styles.title)}>{title}</div>

            <p className={cn("caption", styles.description)}>{description}</p>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.image_container}>
            <img className={styles.image} src={image} alt="step" />
          </div>

          <div className={styles.overlay}>
            <div className={styles.content}>
              <div className={cn("body-2-semibold", styles.title)}>{title}</div>

              <p className={cn("caption", styles.description)}>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
