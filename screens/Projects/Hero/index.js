"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { motion } from "framer-motion";
import { Project } from "@/components/Cards";
import { Bag } from "@/components/Icons";

export default function Hero({
  projects,
}) {
  return (
    <main className={cn("section-hero")}>
      <section className={cn("container")}>
        <div className={styles.hero_content}>
          <div className={styles.icon_container}>
            <Bag />
          </div>

          <div
            style={{ position: "relative", width: "100%", overflow: "hidden" }}
          >
            <h1 className={cn("hero", styles.title)}>Handcrafted ideas.</h1>

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

        </div>

        <div className={styles.projects_container}>
          <div className={styles.projects}>
            {projects.map((project, index) => (
              <Project
                key={project.title}
                project={project}
                isNew={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
