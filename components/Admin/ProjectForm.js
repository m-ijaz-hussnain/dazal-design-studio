"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./ProjectForm.module.css";
import ImageUploader from "./ImageUploader";
import DynamicList from "./DynamicList";
import ComplexList from "./ComplexList";

export default function ProjectForm({ projectId = null }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [introduction, setIntroduction] = useState("");

  const [features, setFeatures] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [introductionImage, setIntroductionImage] = useState(null);
  const [problemImage, setProblemImage] = useState(null);
  const [solutionImage, setSolutionImage] = useState(null);
  const [benefitsImage, setBenefitsImage] = useState(null);
  const [stepsImage, setStepsImage] = useState(null);

  const [steps, setSteps] = useState([]);
  const [problems, setProblems] = useState([]);
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    if (!projectId) return;

    async function fetchProject() {
      try {
        const response = await fetch(`/api/projects/${projectId}`);
        const project = await response.json();

        setTitle(project.title || "");
        setDescription(project.description || "");
        setIntroduction(project.introduction || "");

        setFeatures(
          project.features?.map((item) => ({
            title: item.title,
          })) || []
        );

        setBenefits(
          project.benefits?.map((item) => ({
            title: item.title,
          })) || []
        );

        setSteps(
          project.steps?.map((item) => ({
            title: item.title,
          })) || []
        );

        setProblems(
          project.problems?.map((item) => ({
            title: item.title,
            description: item.description,
          })) || []
        );

        setSolutions(
          project.solutions?.map((item) => ({
            title: item.title,
            description: item.description,
          })) || []
        );

        const getImageByType = (type) => {
          return (
            project.images?.find((image) => image.type === type) || null
          );
        };

        setCoverImage(getImageByType("COVER"));
        setIntroductionImage(getImageByType("INTRODUCTION"));
        setProblemImage(getImageByType("PROBLEM"));
        setSolutionImage(getImageByType("SOLUTION"));
        setBenefitsImage(getImageByType("BENEFITS"));
        setStepsImage(getImageByType("STEPS"));
      } catch (error) {
        console.log("Error loading project:", error);
      }
    }

    fetchProject();
  }, [projectId]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    async function uploadImage(image, type) {
      if (!image) return null;

      // Agar image pehle se DB mein hai
      if (image.url) {
        return {
          url: image.url,
          type: image.type,
        };
      }

      const formData = new FormData();
      formData.append("image", image);
      formData.append("type", type);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      return data.image;
    }

    try {
      if (!coverImage && !projectId) {
        alert("Cover image is required.");
        setLoading(false);
        return;
      }

      const uploadedImages = [];

      const cover = await uploadImage(coverImage, "COVER");
      if (cover) uploadedImages.push(cover);

      const intro = await uploadImage(introductionImage, "INTRODUCTION");
      if (intro) uploadedImages.push(intro);

      const problem = await uploadImage(problemImage, "PROBLEM");
      if (problem) uploadedImages.push(problem);

      const solution = await uploadImage(solutionImage, "SOLUTION");
      if (solution) uploadedImages.push(solution);

      const benefitsImg = await uploadImage(benefitsImage, "BENEFITS");
      if (benefitsImg) uploadedImages.push(benefitsImg);

      const stepsImg = await uploadImage(stepsImage, "STEPS");
      if (stepsImg) uploadedImages.push(stepsImg);

      const response = await fetch(
        projectId ? `/api/projects/${projectId}` : "/api/projects",
        {
          method: projectId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            introduction,
            features,
            benefits,
            steps,
            problems,
            solutions,
            images: uploadedImages,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert(
        projectId
          ? "Project updated successfully."
          : "Project created successfully."
      );
      window.location.href = "/admin/projects";

      setTitle("");
      setDescription("");
      setIntroduction("");
      setFeatures([]);
      setBenefits([]);
      setSteps([]);
      setProblems([]);
      setSolutions([]);
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      {/* Title Header Section */}
      <div className={styles.titleContainer}>
        <span className={styles.subtitle}>SETTINGS</span>
        <h1 className={styles.pageTitle}>
          {projectId ? "Edit Project" : "Create Project"}
        </h1>
      </div>

      {/* Main Form Card Container */}
      <div className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Section: Basic Info */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Basic Information</h2>
          </div>

          {/* Project Title Field */}
          <div className={styles.field}>
            <label className={styles.label}>Project Title *</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Short Description Field */}
          <div className={styles.field}>
            <label className={styles.label}>Short Description *</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Cover Image Upload */}
          <ImageUploader
            title="Cover Image *"
            image={coverImage}
            setImage={setCoverImage}
          />

          {/* Introduction Textarea */}
          <div className={styles.field}>
            <label className={styles.label}>Introduction *</label>
            <textarea
              className={styles.textarea}
              rows="6"
              placeholder="Project introduction..."
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
              required
            />
          </div>

          {/* Introduction Image */}
          <ImageUploader
            title="Introduction Image"
            image={introductionImage}
            setImage={setIntroductionImage}
          />

          {/* Features Dynamic List */}
          <DynamicList
            title="Features"
            items={features}
            setItems={setFeatures}
          />

          {/* Benefits Dynamic List & Image */}
          <DynamicList
            title="Benefits"
            items={benefits}
            setItems={setBenefits}
          />
          <ImageUploader
            title="Benefits Image"
            image={benefitsImage}
            setImage={setBenefitsImage}
          />

          {/* Steps Dynamic List & Image */}
          <DynamicList title="Steps" items={steps} setItems={setSteps} />
          <ImageUploader
            title="How It Works Image"
            image={stepsImage}
            setImage={setStepsImage}
          />

          {/* Problems Complex List & Image */}
          <ComplexList
            title="Problems"
            items={problems}
            setItems={setProblems}
          />
          <ImageUploader
            title="Problem Image"
            image={problemImage}
            setImage={setProblemImage}
          />

          {/* Solutions Complex List & Image */}
          <ComplexList
            title="Solutions"
            items={solutions}
            setItems={setSolutions}
          />
          <ImageUploader
            title="Solution Image"
            image={solutionImage}
            setImage={setSolutionImage}
          />

          {/* Form Actions */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={() => router.push("/admin/projects")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.saveButton}
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : projectId
                ? "Update Project"
                : "Save Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}