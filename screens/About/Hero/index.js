"use client";

import { useState, useEffect } from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { motion } from "framer-motion";
import { Profile } from "@/components/Icons";
import CircularAnimation from "@/components/CircularAnimation";


export default function Hero() {
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
    <main className={cn("section-hero")}>
      <section className={cn("container")}>
        <div className={styles.hero_content}>
          <div className={styles.icon_container}>
            <Profile />
          </div>

          <div
            style={{ position: "relative", width: "100%", overflow: "hidden" }}
          >
            <h1 className={cn("hero", styles.title)}>
              {about?.heroTitle}
            </h1>

            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#fcfcfd",
                zIndex: 1,
              }}
            />
          </div>

          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.breakline}
          />
          <div className={styles.bottom_content}>
            <div>
              {/* <p className={cn("body-1")}>
                We design UI/UX, websites, and SaaS products for business owners building their brand and work white-label behind the scenes for agencies who need an extra design bench.
              </p> */}
              <p className={cn("body-1")}>
                {about?.heroDescription}
              </p>

              <motion.a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                className={cn("button", styles.button)}
              >
                Start your project
              </motion.a>
            </div>

            <CircularAnimation />
          </div>
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.breakline}
          />
        </div>
      </section>
    </main>
  );
}
