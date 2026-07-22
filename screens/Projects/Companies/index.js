"use client";

import React from "react";
import styles from "./companies.module.css";
import cn from "classnames";
import { facts } from "@/mocks/facts";
import { Fact } from "@/components/Cards";
import { companies } from "@/mocks/companies";
import { motion } from "framer-motion";

export default function Companies() {
  const continuousCompanies = [
    ...companies,
    ...companies,
    ...companies,
    ...companies,
  ];

  const singleSetWidth = 1024;

  const startPosition = -singleSetWidth / 2;

  const scrollVariants = {
    animate: {
      x: [startPosition, startPosition + singleSetWidth],
      transition: {
        x: {
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className={cn("section")}>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.title_container}>
            <span className={cn("hairline-2", styles.text)}>Client</span>
            <h1 className={cn("h2", styles.title)}>
              I’ve worked with great names.
            </h1>
          </div>

          <div className={styles.facts}>
            {facts.map((fact, index) => (
              <Fact key={index} {...fact} />
            ))}
          </div>
        </div>

        <motion.div
          variants={scrollVariants}
          animate="animate"
          className={styles.companies}
        >
          {continuousCompanies.map((company, index) => (
            <div key={index} className={styles.company}>
              {company.logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
