import React from "react";
import styles from "./product.module.css";
import cn from "classnames";
import { RightUp } from "@/components/Icons";
import Link from "next/link";

export default function Product({ product, isNew }) {
  return (
    <Link href={`/products/${product.title}`}>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <img className={styles.image} src={product.images[0]} alt="product" />
        </div>

        <div className={styles.overlay}>
          <div className={styles.icon}>
            <RightUp />
          </div>

          <div className={styles.content}>
            <div>
              <div className={styles.title_container}>
                <div className={cn("body-2-semibold", styles.title)}>
                  {product.title}
                </div>

                {isNew && (
                  <div className={styles.status}>
                    {product.status.map((status, index) => (
                      <span key={index} className={cn("hairline-2")}>
                        {status.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <p className={cn("caption", styles.description)}>
                {product.description}
              </p>
            </div>

            <p className={cn("body-2-semibold", styles.price)}>
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
