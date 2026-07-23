import React from "react";
import styles from "./features.module.css";
import cn from "classnames";
import { features } from "@/mocks/features";
import { Feature } from "@/components/Cards";

export default function Features() {
  return (
    <section className={cn("section")}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <span className={cn("hairline-2", styles.text)}>Features</span>
          <h1 className={cn("h2", styles.title)}>Unmatched functionality. </h1>
        </div>

        <div className={styles.features}>
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
