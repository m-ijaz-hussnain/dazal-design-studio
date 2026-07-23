"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { motion } from "framer-motion";
import { Product } from "@/components/Cards";
import { Store } from "@/components/Icons";
import { products } from "@/mocks/products";
import CircularAnimation from "@/components/CircularAnimation";

export default function Hero() {
  return (
    <main className={cn("section-hero")}>
      <section className={cn("container")}>
        <div className={styles.hero_content}>
          <div className={styles.icon_container}>
            <Store />
          </div>

          <div
            style={{ position: "relative", width: "100%", overflow: "hidden" }}
          >
            <h1 className={cn("hero", styles.title)}>Premium templates.</h1>

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
                Premium apps, templates and components.
              </p>
              <motion.a
                href="https://ui8.net/users/angel-uriostegui?status=6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                className={cn("button", styles.button)}
              >
                Get template
              </motion.a>
            </div>

            <CircularAnimation />
          </div>
        </div>

        <div className={styles.products}>
          {products.map((product, index) => (
            <Product
              key={product.title}
              product={product}
              isNew={index === 0}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
