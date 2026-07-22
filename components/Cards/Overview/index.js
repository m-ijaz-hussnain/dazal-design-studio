import React from "react";
import styles from "./overview.module.css";
import cn from "classnames";
import Icon from "@/components/Icon";

export default function Overview({ product }) {
  return (
    <div className={styles.container}>
      <div>
        <div className={cn("body-2-semibold", styles.title)}>Overview</div>
        <div className={cn("caption", styles.description)}>
          {product.overview}
        </div>
      </div>

      <div className={styles.breakline} />

      <div className={styles.features}>
        <div className={cn("body-2-semibold", styles.text)}>Key features:</div>

        {product.features.map((feature, index) => (
          <div key={index} className={cn("caption", styles.feature)}>
            <Icon name="check-bold" size={18} /> {feature.title}
          </div>
        ))}
      </div>

      <div className={styles.breakline} />

      <div className={styles.features}>
        <div className={cn("body-2-semibold", styles.text)}>
          Template includes:
        </div>

        {product.extras.map((extra, index) => (
          <div key={index} className={cn("caption", styles.feature)}>
            <Icon name="check-bold" size={18} /> {extra.title}
          </div>
        ))}
      </div>

      <div className={styles.buttons}>
        <button className={cn("button-stroke", styles.button)}>
          Live demo
        </button>

        <button className={cn("button")}>Buy Now - ${product.price}</button>
      </div>
    </div>
  );
}
