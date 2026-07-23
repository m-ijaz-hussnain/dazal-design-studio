import React from "react";
import styles from "./introduction.module.css";
import cn from "classnames";

export default function Introduction() {
  return (
    <div className={cn("section section-gray")}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <span className={cn("hairline-2", styles.text)}>About</span>
          <h1 className={cn("h2", styles.title)}>About Us.</h1>
        </div>

        <div className={styles.breakline} />

        <div>
          <div className={styles.image_container}>
            <img src="/intro.jpeg" className={styles.image} />
          </div>

          <p className={cn("body-2", styles.subtitle)}>
            We work two ways: directly with founders and business owners who need a website, app, or product designed from the ground up  and white-label alongside agencies who need senior-level UI/UX without the cost of hiring in-house. Either way, you get the same thing: clean, considered design, delivered on time, with no back-and-forth chasing revisions.
          </p>
        </div>
      </div>
    </div>
  );
}
