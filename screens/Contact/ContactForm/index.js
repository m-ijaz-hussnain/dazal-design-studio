"use client";

import React from "react";
import styles from "./contact-form.module.css";
import cn from "classnames";
import { Instagram, LinkedIn, X, Youtube } from "@/components/Icons";
import Form from "@/components/Form";

const socials = [
  {
    icon: <Instagram />,
    url: "",
  },
  {
    icon: <X />,
    url: "",
  },
  {
    icon: <LinkedIn />,
    url: "",
  },
  {
    icon: <Youtube />,
    url: "",
  },
];

export default function ContactForm() {
  return (
    <section className={cn("section")}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <span className={cn("hairline-2", styles.text)}>Get in touch</span>
          <h1 className={cn("h2", styles.title)}>Feel free to reach out!</h1>
        </div>

        <div className={styles.contact_form}>
          <Form />

          <div className={styles.socials}>
            {socials.map((social, index) => (
              <div key={index} className={styles.social}>
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
