"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./form.module.css";
import cn from "classnames";

export default function Form() {
  const [state, handleSubmit] = useForm("mbjvvgbp");

  if (state.succeeded) {
    return <p className={cn("caption")}>Thanks for reaching out!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.inputs}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          className={cn("caption", styles.input)}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <input
          id="name"
          type="name"
          name="name"
          placeholder="Your name"
          className={cn("caption", styles.input)}
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className={styles.textarea_container}>
        <textarea
          id="message"
          name="message"
          className={cn("caption", styles.textarea)}
          placeholder="Your message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className={cn("button", styles.button)}
      >
        Submit
      </button>
    </form>
  );
}
