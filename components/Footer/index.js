"use client";

import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import { footerLinks } from "@/mocks/footerLinks";
import { Dribbble, Instagram, Plus, X } from "../Icons";
import Subscribe from "../Subscribe";
import { motion } from "framer-motion";

export default function Footer({ title }) {
  const [visible, setVisible] = React.useState(null);

  const toggleIndex = (index) => {
    if (visible === index) {
      setVisible(null);
    } else {
      setVisible(index);
    }
  };

  return (
    <footer
      className={cn(styles.section, {
        [styles.section_margin]: title,
      })}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              className={cn(styles.block, {
                [styles.active]: visible === index,
              })}
            >
              <div
                className={cn("body-2-semibold", styles.title)}
                onClick={() => toggleIndex(index)}
              >
                {section.title}
                <Plus />
              </div>
              <motion.div className={styles.links}>
                {section.links.map((link, index) => (
                  <motion.a
                    key={index}
                    className={cn("btn-2", styles.link)}
                    href={link.href}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className={styles.newsletter}>
          <div className={cn("body-2-semibold", styles.title)}>Newsletter</div>

          <Subscribe className={styles.subscribe} />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={cn("caption", styles.copyright)}>
          Dazal Studio © 2026
        </div>

        <div className={styles.socials}>
          <Instagram />
          <X />
          <Dribbble />
        </div>
      </div>
    </footer>
  );
}
