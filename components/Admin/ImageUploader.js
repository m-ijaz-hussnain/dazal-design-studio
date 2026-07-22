"use client";

import styles from "./ImageUploader.module.css";

export default function ImageUploader({

  title,

  image,

  setImage,

}) {

  function handleChange(event) {

    const file = event.target.files[0];

    if (file) {

      setImage(file);

    }
  }

  function removeImage() {

    setImage(null);

  }

  return (

    <div className={styles.wrapper}>

      <h3>{title}</h3>

      <label className={styles.uploadBox}>

        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          hidden
        />

        <span>

          Click to upload image

        </span>

      </label>

      {

        image && (

          <div className={styles.grid}>

            <div className={styles.card}>

              <img

                src={
                  typeof image === "string"
                    ? image
                    : image?.url
                      ? image.url
                      : URL.createObjectURL(image)
                }

                alt=""
              />

              <button
                type="button"
                onClick={removeImage}
              >

                Remove

              </button>

            </div>

          </div>

        )

      }

    </div>

  );
}