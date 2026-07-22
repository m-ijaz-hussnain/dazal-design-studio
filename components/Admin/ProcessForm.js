"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./ProcessForm.module.css";

export default function ProcessForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function load() {
      const response = await fetch("/api/process");
      const data = await response.json();
      setTitle(data?.title || "Development process.");
      setDescription(
        data?.description ||
          "A brief insight into how I craft custom digital solutions."
      );
    }
    load();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      router.push("/admin/process");
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <div className={styles.wrapper}>
      {/* Title Header Section */}
      <div className={styles.titleContainer}>
        <span className={styles.subtitle}>SETTINGS</span>
        <h1 className={styles.pageTitle}>Edit Process</h1>
      </div>

      {/* Main Form Card Container */}
      <div className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Title Field */}
          <div className={styles.field}>
            <label className={styles.label}>Title</label>
            <input
              type="text"
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
          </div>

          {/* Description Field */}
          <div className={styles.field}>
            <label className={styles.label}>Description</label>
            <textarea
              className={styles.textarea}
              rows="6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter process description..."
              required
            />
          </div>

          {/* Form Actions */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={() => router.push("/admin/process")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.saveButton}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}