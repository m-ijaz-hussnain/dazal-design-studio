"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { motion } from "framer-motion";
import { Project } from "@/components/Cards";
import Link from "next/link";
import CircularAnimation from "@/components/CircularAnimation";

// export default function Hero({ projects }) {
export default function Hero({ projects = [] }) {
  return (
    <main className={cn("section-hero")}>
      <section className={cn("container")}>
        <div className={styles.hero_content}>
          <div className={styles.author}>
            <div className={styles.avatar_container}>
              <img
                className={styles.avatar_image}
                src="/logo.png"
                alt="avatar"
              />
            </div>
            <div>
              <p className={cn("body-2-semibold", styles.caption)}>
                Dazal
              </p>
              <p className={cn("caption", styles.profession)}>Design Studio</p>
            </div>
          </div>

          <div
            style={{ position: "relative", width: "100%", overflow: "hidden" }}
          >
            <h1 className={cn("hero", styles.title, styles.typing_effect)}>
              Design that grows your product and your client's.
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
              <p className={cn("body-1")}>
                We design UI/UX, websites, and SaaS products for business owners building their brand and work white-label behind the scenes for agencies who need an extra design bench.
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
        </div>

        {/* Yahan humne products container ko projects container se replace kar diya */}
        <div className={styles.products_container}>
          <div className={styles.products}>
            {/* {projects.slice(0, 4).map((project, index) => ( */}
            {projects?.slice(0, 4)?.map((project, index) => (
              <Project
                key={project.title}
                project={project}
                isNew={index === 0}
              />
            ))}
          </div>

          {/* See all button ab /projects page par redirect karega */}
          <Link href="/projects">
            <button className={cn("button-stroke", styles.secondary_button)}>
              See all projects
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}