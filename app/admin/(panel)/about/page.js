import Link from "next/link";
import cn from "classnames";
import { prisma } from "@/lib/prisma";
import styles from "./AboutPage.module.css";

export default async function AboutPage() {
  const about = await prisma.about.findFirst();

  return (
    <section className={cn("section", styles.page)}>
      {/* Top Bar Section */}
      <div className={styles.topBar}>
        <h1 className={cn("h2", styles.pageTitle)}>About Page</h1>
        <Link href="/admin/about/edit" className={styles.editButton}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          Edit About
        </Link>
      </div>

      {/* Content Container Card */}
      <div className={styles.card}>
        <div className={styles.block}>
          <span className={cn("hairline-2", styles.label)}>Hero Title</span>
          <h2 className={cn("h2", styles.valueTitle)}>{about?.heroTitle || "—"}</h2>
        </div>

        <div className={styles.block}>
          <span className={cn("hairline-2", styles.label)}>Hero Description</span>
          <p className={styles.valueText}>{about?.heroDescription || "—"}</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.block}>
          <span className={cn("hairline-2", styles.label)}>Section Title</span>
          <h3 className={cn("body-2-semibold", styles.valueTitle)}>{about?.sectionTitle || "—"}</h3>
        </div>

        <div className={styles.block}>
          <span className={cn("hairline-2", styles.label)}>Section Subtitle</span>
          <p className={styles.valueText}>{about?.sectionSubtitle || "—"}</p>
        </div>

        <div className={styles.divider} />

        {/* Gallery / Images Section */}
        <div className={styles.block}>
          <span className={cn("hairline-2", styles.label)}>Images</span>
          <div className={styles.imagesGrid}>
            <img
              src={about?.imageOne || "/images/about/1.jpg"}
              alt="About 1"
              className={styles.image}
            />
            <img
              src={about?.imageTwo || "/images/about/2.jpg"}
              alt="About 2"
              className={styles.image}
            />
            <img
              src={about?.imageThree || "/images/about/3.jpg"}
              alt="About 3"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}