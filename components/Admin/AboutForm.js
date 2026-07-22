"use client";

import { useState, useEffect } from "react";
import styles from "./AboutForm.module.css";
import { useRouter } from "next/navigation";
import ImageUploader from "./ImageUploader";

export default function AboutForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [heroTitle, setHeroTitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionSubtitle, setSectionSubtitle] = useState("");
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [imageThree, setImageThree] = useState(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const response = await fetch("/api/about");
        const data = await response.json();

        if (!data) return;

        setHeroTitle(data.heroTitle || "");
        setHeroDescription(data.heroDescription || "");
        setSectionTitle(data.sectionTitle || "");
        setSectionSubtitle(data.sectionSubtitle || "");
        setImageOne(data.imageOne || "");
        setImageTwo(data.imageTwo || "");
        setImageThree(data.imageThree || "");
      } catch (error) {
        console.log(error);
      }
    }

    fetchAbout();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    async function uploadImage(image) {
      if (!image) return null;
      if (typeof image === "string") return image;

      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      return data.image.url;
    }

    try {
      const uploadedImageOne = await uploadImage(imageOne);
      const uploadedImageTwo = await uploadImage(imageTwo);
      const uploadedImageThree = await uploadImage(imageThree);

      const response = await fetch("/api/about", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          heroTitle,
          heroDescription,
          sectionTitle,
          sectionSubtitle,
          imageOne: uploadedImageOne,
          imageTwo: uploadedImageTwo,
          imageThree: uploadedImageThree,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("About updated successfully.");
      router.push("/admin/about");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      {/* Title Header Section */}
      <div className={styles.titleContainer}>
        <span className={styles.subtitle}>SETTINGS</span>
        <h1 className={styles.pageTitle}>About Settings</h1>
      </div>

      {/* Main Form Card Container */}
      <div className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Hero Title Field */}
          <div className={styles.field}>
            <label className={styles.label}>Hero Title</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Hero title"
              value={heroTitle}
              onChange={(e) => setHeroTitle(e.target.value)}
              required
            />
          </div>

          {/* Hero Description Field */}
          <div className={styles.field}>
            <label className={styles.label}>Hero Description</label>
            <textarea
              className={styles.textarea}
              rows="5"
              placeholder="Hero description"
              value={heroDescription}
              onChange={(e) => setHeroDescription(e.target.value)}
              required
            />
          </div>

          {/* Section Title Field */}
          <div className={styles.field}>
            <label className={styles.label}>Section Title</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Section title"
              value={sectionTitle}
              onChange={(e) => setSectionTitle(e.target.value)}
              required
            />
          </div>

          {/* Section Description Field */}
          <div className={styles.field}>
            <label className={styles.label}>Section Description</label>
            <textarea
              className={styles.textarea}
              rows="6"
              placeholder="Section description"
              value={sectionSubtitle}
              onChange={(e) => setSectionSubtitle(e.target.value)}
              required
            />
          </div>

          {/* Image Uploaders Section */}
          <div className={styles.uploadersGroup}>
            <ImageUploader
              title="Image One"
              image={imageOne}
              setImage={setImageOne}
            />
            <ImageUploader
              title="Image Two"
              image={imageTwo}
              setImage={setImageTwo}
            />
            <ImageUploader
              title="Image Three"
              image={imageThree}
              setImage={setImageThree}
            />
          </div>

          {/* Form Actions */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={() => router.push("/admin/about")}
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