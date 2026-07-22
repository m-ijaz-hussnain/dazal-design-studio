import React from "react";
import styles from "./fact.module.css";
import cn from "classnames";

export default function Fact({ number, description }) {
  return (
    <div className={styles.container}>
      <div className={cn("h4", styles.number)}>{number}</div>
      <div className={cn("caption", styles.description)}>{description}</div>
    </div>
  );
}
