import React from "react";
import styles from "./features.module.css";
import cn from "classnames";
import Item from "./Item";

export default function Features({ project }) {
  return (
    <section className={cn("section", styles.section)}>
      <div className={styles.container}>
        <div className={styles.items}>
          <Item
            project={project}
            image={project.images?.[3]?.url}
            title="Benefits"
            content={project.benefits}
          />
        </div>
      </div>
    </section>
  );
}
