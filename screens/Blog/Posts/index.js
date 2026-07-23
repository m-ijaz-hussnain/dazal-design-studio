"use client";

import React from "react";
import styles from "./posts.module.css";
import cn from "classnames";
import { Article } from "@/components/Cards";

export default function Posts({ posts }) {
  const [activeTab, setActiveTab] = React.useState("all");
  const navRefs = React.useRef([]);

  const addToRefs = (el) => {
    if (el && !navRefs.current.includes(el)) {
      navRefs.current.push(el);
    }
  };

  const tabs = ["all", "design", "development", "technology", "branding"];

  const handleClickTab = (tab) => {
    setActiveTab(tab);

    const tabRef = navRefs.current.find(
      (el) => el.textContent.toLowerCase() === tab
    );

    if (tabRef) {
      tabRef.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const filteredPosts =
    activeTab === "all"
      ? posts
      : posts.filter((article) => article.type === activeTab);

  return (
    <section className={cn("section", styles.section)}>
      <div className={styles.container}>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <div
              ref={addToRefs}
              data-url={tab}
              key={index}
              className={cn("btn-2", styles.tab, {
                [styles.active]: activeTab === tab,
              })}
              onClick={() => handleClickTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>

        <div className={styles.articles}>
          {filteredPosts.map((article) => (
            <Article key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
