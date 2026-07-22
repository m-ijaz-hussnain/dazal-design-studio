"use client";

import styles from "./DynamicList.module.css";

export default function DynamicList({
  title,
  items,
  setItems,
}) {

  function addItem() {

    setItems([
      ...items,
      {
        title: "",
      },
    ]);
  }

  function updateItem(index, value) {

    const copy = [...items];

    copy[index].title = value;

    setItems(copy);
  }

  function removeItem(index) {

    const copy = items.filter(
      (_, i) => i !== index
    );

    setItems(copy);
  }

  return (

    <div className={styles.wrapper}>

      <h3>{title}</h3>

      {

        items.map((item, index) => (

          <div
            key={index}
            className={styles.row}
          >

            <input
              value={item.title}
              placeholder={`${title} ${index + 1}`}
              onChange={(e) =>
                updateItem(
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
        + Add
      </button>

    </div>

  );
}

