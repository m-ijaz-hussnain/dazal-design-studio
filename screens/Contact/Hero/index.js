"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { motion } from "framer-motion";
import { Email, Profile } from "@/components/Icons";
import CircularAnimation from "@/components/CircularAnimation";

export default function Hero() {
  return (
    <main className={cn("section-hero")}>
      <section className={cn("container", styles.container)}>
        <div className={styles.hero_content}>
          <div className={styles.icon_container}>
            <Email />
          </div>

          <div
            style={{ position: "relative", width: "100%", overflow: "hidden" }}
          >
            <h1 className={cn("hero", styles.title)}>
              Let’s build something great.
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

          <p className={cn("body-1")}>
            Have questions or project ideas? I'm just an email away. Reach out!
          </p>
        </div>
      </section>
    </main>
  );
}
