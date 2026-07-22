"use client";

import React, { useEffect, useState } from "react";
import styles from "./process.module.css";
import cn from "classnames";
import { Step } from "@/components/Cards";

export default function Process() {

  const [process, setProcess] = useState(null);

  useEffect(() => {

    async function loadProcess() {

      try {

        const response = await fetch("/api/process");

        const data = await response.json();

        setProcess(data);

      } catch (error) {

        console.log(error);

      }

    }

    loadProcess();

  }, []);

  return (

    <section className={cn("section")}>

      <div className={styles.container}>

        <div className={styles.title_container}>

          <span className={cn("hairline-2", styles.text)}>
            Process
          </span>

          <h1 className={cn("h2", styles.title)}>
            {process?.title || "Development process."}
          </h1>

          <p className={cn("body-2", styles.subtitle)}>
            {
              process?.description ||
              "A brief insight into how I craft custom digital solutions, emphasizing efficient collaboration and technological excellence."
            }
          </p>

        </div>

        <div className={styles.process_container}>

          {process?.steps?.map((step, index) => (

            <Step
              key={step.id}
              {...step}
              withBackground={index === 1}
            />

          ))}

        </div>

      </div>

    </section>

  );

}