"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import cn from "classnames";

export default function Section() {
  const [about, setAbout] = useState(null);

useEffect(() => {

  async function loadAbout() {

      try {

        const response = await fetch("/api/about");

        const data = await response.json();

        setAbout(data);

      } catch (error) {

        console.log(error);

      }

    }

    loadAbout();

  }, []);
  return (
    <section className={cn("section", styles.section)}>
      <div className={styles.container}>
        <div className={styles.images}>
          <div className={styles.inner_images}>
            <div className={styles.image_container}>
              <img
                src={
                    about?.imageOne ||
                    "/images/about/1.jpg"
                }
                className={styles.image}
                alt="Lapse-1"
              />
            </div>

            <div className={styles.image_container}>
              <img
                src={
                    about?.imageTwo ||
                    "/images/about/2.jpg"
                }
                className={styles.image}
                alt="Lapse-1"
              />
            </div>
          </div>

          <div className={styles.image_container}>
            <img
                src={
                    about?.imageThree ||
                    "/images/about/3.jpg"
                }
                className={styles.image}
                alt="Lapse-1"
              />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.title_container}>
            <span className={cn("hairline-2", styles.text)}>WHAT WE DO</span>
            <h4 className={cn("h4", styles.title)}>
              {about?.sectionTitle}
            </h4>
          </div>

          <div>
            <div className={cn("caption", styles.subtitle)}>
              {about?.sectionSubtitle}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
