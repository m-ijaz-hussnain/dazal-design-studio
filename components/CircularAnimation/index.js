import React from "react";
import styles from "./circular-animation.module.css";
import cn from "classnames";

export default function CircularAnimation() {
  return (
    <div className={styles.circular_container}>
      <svg className={styles.rotated_text} viewBox="0 0 200 200">
        <defs>
          <path
            id="circle"
            d={`
              M 100, 100
              m -75, 0
              a 75,75 0 1,0 150,0
              a 75,75 0 1,0 -150,0
            `}
          />
        </defs>
        <text width="400" textLength={Math.PI * 150}>
          <textPath
            alignmentBaseline="top"
            xlinkHref="#circle"
            className={cn("caption", styles.text)}
            textLength={Math.PI * 150}
          >
            Business Ready ・ Agency Partner ・ Conversion Driven 
          </textPath>
        </text>
      </svg>

      <svg
        className={styles.vector}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.66006 23.9791L0.102417 21.4214L17.6406 3.88327H1.92931V0.229492H23.852V22.1522H20.1982V6.44091L2.66006 23.9791Z"
          fill="#080708"
        />
      </svg>
    </div>
  );
}
