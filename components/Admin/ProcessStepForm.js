"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "./ImageUploader";
import styles from "./ProcessForm.module.css";

export default function ProcessStepForm({ stepId }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!stepId) {
      return;
    }

    async function loadStep() {
      const response = await fetch(`/api/process/${stepId}`);
      const data = await response.json();

      setTitle(data.title || "");
      setDescription(data.description || "");
      setImage(data.image || null);
    }

    loadStep();
  }, [stepId]);

  async function uploadImage() {
    if (!image) {
      return null;
    }

    if (typeof image === "string") {
      return image;
    }

    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.image.url;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const uploadedImage = await uploadImage();

      const url = stepId ? `/api/process/${stepId}` : "/api/process/step";
      const method = stepId ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          image: uploadedImage,
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
      {/* Dynamic Header */}
      <div className={styles.titleContainer}>
        <span className={styles.subtitle}>PROCESS MANAGEMENT</span>
        <h1 className={styles.pageTitle}>
          {stepId ? "Edit Step" : "Create Step"}
        </h1>
      </div>

      {/* Form Card Container */}
      <div className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Title Field */}
          <div className={styles.field}>
            <label className={styles.label}>Title</label>
            <input
              type="text"
              className={styles.input}
              value={title}
              placeholder="Step Title"
              onChange={(e) => setTitle(e.target.value)}
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
              placeholder="Step Description..."
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Image Uploader Field */}
          <div className={styles.field}>
            <label className={styles.label}>Step Image</label>
            <ImageUploader
              title="Step Image"
              image={image}
              setImage={setImage}
            />
          </div>

          {/* Actions */}
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
              {loading ? "Saving..." : "Save Step"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}