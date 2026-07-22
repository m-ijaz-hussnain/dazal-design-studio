"use client";

import React from "react";
import styles from "./faq-item.module.css";
import cn from "classnames";
import { Plus } from "@/components/Icons";
import { motion } from "framer-motion";

export default function FaqItem({ question, answer, isActive, onClick }) {
  const variants = {
    open: { opacity: 1, y: 0 },
    collapsed: { opacity: 0, y: 20 },
  };

  return (
    <div
      className={cn(styles.container, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      <div className={cn("body-2-semibold", styles.title)}>
        {question}
        <Plus />
      </div>

      <motion.div
        className={cn("caption", styles.text)}
        initial="collapsed"
        animate={isActive ? "open" : "collapsed"}
        variants={variants}
        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        {answer}
      </motion.div>
    </div>
  );
}
