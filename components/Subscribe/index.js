import React from "react";
import styles from "./subscribe.module.css";
import cn from "classnames";
import TextInput from "../TextInput";
import { ArrowRight } from "../Icons";

export default function Subscribe({ className }) {
  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.content}>
        <TextInput />

        <button className={cn("", styles.button)}>
          <ArrowRight className={styles.icon} />
        </button>
      </div>

      <p className={cn("caption", styles.placeholder)}>
        Stay updated! No spam, only the good stuff.
      </p>
    </div>
  );
}
