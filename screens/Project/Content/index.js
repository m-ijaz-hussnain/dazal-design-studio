  import React from "react";
  import styles from "./content.module.css";
  import cn from "classnames";
  import Link from "next/link";
  import Icon from "@/components/Icon";

  export default function Content({ project }) {
    return (
      <section className={cn("section")}>
        <div className={styles.container}>
          <div className={styles.title_container}>
            <Link href="/projects">
              <button className={cn("button-stroke", styles.button)}>
                Go back
              </button>
            </Link>

            <div className={cn("h2", styles.title)}>{project.title}</div>
            <div className={cn("body-2", styles.description)}>
              {project.description}
            </div>

            <div className={cn("body-2-semibold", styles.text)}>
              Key features:
            </div>

            <div className={styles.features}>
              {project.features.map((feature, index) => (
                <div key={index} className={cn("caption", styles.feature)}>
                  <Icon name="check-bold" size={18} /> {feature.title}
                </div>
              ))}
            </div>
          </div>

          {project.images?.[0]?.url && (
            <div className={styles.image_container}>
              <img
                className={styles.image}
                src={project.images[0].url}
                alt={project.title}
              />
            </div>
          )}
        </div>
      </section>
    );
  }
