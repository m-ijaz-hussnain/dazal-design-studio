"use client";

import React from "react";
import styles from "./sidebar.module.css";
import cn from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Sidebar({ links, socials }) {
  const [visible, setVisible] = React.useState(false);
  const pathname = usePathname();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const socialsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={cn(styles.sidebar, { [styles.sidebar_open]: visible })}>
      <button
        className={cn(styles.burger, {
          [styles.burger_active]: !visible,
        })}
        onClick={() => setVisible(!visible)}
      ></button>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.links}
      >
        {/* Yahan humne filter ko trim() ke saath improve kiya hai */}
        {links
          .filter((item) => item.title.toLowerCase().trim() !== "store")
          .map((item, index) => (
            <Link href={item.url} key={index}>
              <motion.button
                variants={itemVariant}
                className={cn("btn-2", styles.button, {
                  [styles.active]: pathname === item.url,
                })}
              >
                {item.icon}
                <motion.span
                  animate={{ opacity: visible ? 0 : 1 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {item.title}
                </motion.span>
              </motion.button>
            </Link>
          ))}
      </motion.div>

      <motion.div
        variants={socialsVariants}
        className={styles.socials}
        animate={visible ? "hidden" : "visible"}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {socials.map((item, index) => (
          <motion.a
            key={index}
            className={styles.social}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}