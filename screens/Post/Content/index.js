import React from "react";
import styles from "./content.module.css";
import cn from "classnames";
import Link from "next/link";

export default function Content({ contentHtml, frontmatter }) {
  return (
    <section className={cn("section")}>
      <div className={styles.container}>
        <Link href="/writings">
          <button className={cn("button-stroke", styles.button)}>
            Go back
          </button>
        </Link>
        <div className={cn("h2", styles.title)}>{frontmatter.title}</div>
        <div className={cn("caption", styles.date)}>{frontmatter.date}</div>

        <div className={styles.image_container}>
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className={styles.image}
          />
        </div>

        <div
          className={styles.markdown}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </section>
  );
}
