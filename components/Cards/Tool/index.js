import React from "react";
import styles from "./tool.module.css";
import cn from "classnames";
import { RightUp } from "@/components/Icons";

export default function Tool({ icon, title, text, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={styles.container}>
        <div className={styles.arrow_up}>
          <RightUp />
        </div>
        <div className={styles.icon_container}>{icon}</div>
        <div className={styles.title_container}>
          <div className={cn("body-2-semibold", styles.title)}>{title}</div>
          <p className={cn("caption", styles.text)}>{text}</p>
        </div>
      </div>
    </a>
  );
}
