"use client";

import styles from "./ComplexList.module.css";

export default function ComplexList({
  title,
  items,
  setItems,
}) {

  function addItem() {

    setItems([
      ...items,
      {
        title: "",
        description: "",
      },
    ]);
  }

  function updateTitle(index, value) {

    const copy = [...items];

    copy[index].title = value;

    setItems(copy);
  }

  function updateDescription(index, value) {

    const copy = [...items];

    copy[index].description = value;

    setItems(copy);
  }

  function removeItem(index) {

    setItems(
      items.filter(
        (_, i) => i !== index
      )
    );
  }

  return (

    <div className={styles.wrapper}>

      <h3>{title}</h3>

      {

        items.map((item, index) => (

          <div
            key={index}
            className={styles.card}
          >

            <input
              placeholder={`${title} title`}
              value={item.title}
              onChange={(e) =>
                updateTitle(
                  index,
                  e.target.value
                )
              }
            />

            <textarea
              rows="4"
              placeholder={`${title} description`}
              value={item.description}
              onChange={(e) =>
                updateDescription(
                  index,
                  e.target.value
                )
              }
            />

            <button
              type="button"
              onClick={() =>
                removeItem(index)
              }
            >
              Remove
            </button>

          </div>

        ))

      }

      <button
        type="button"
        className={styles.add}
        onClick={addItem}
      >
        + Add {title}
      </button>

    </div>

  );
}