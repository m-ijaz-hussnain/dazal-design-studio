import React from "react";
import styles from "./latest-posts.module.css";
import cn from "classnames";
import { Article } from "@/components/Cards";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function LatestPosts() {
  const posts = getPosts();

  return (
    <section className={cn("section")}>
      <div className={styles.container}>
        <span className={cn("hairline-2", styles.text)}>Latest posts</span>
        <h1 className={cn("h2", styles.title)}>
          Take a look at the <br /> latest articles.
        </h1>
        <Link href="/writings">
          <button className={cn("button")}>Explore all posts</button>
        </Link>

        <div className={styles.articles}>
          {posts.slice(0, 3).map((article) => (
            <Article {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
