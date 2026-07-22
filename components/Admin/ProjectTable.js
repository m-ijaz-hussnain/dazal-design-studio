"use client";

import Link from "next/link";
import cn from "classnames";
import styles from "./ProjectTable.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProjectTable({ projects }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Project deleted successfully.");
      router.refresh();
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  }

  // Filter logic
  const filteredProjects = projects?.filter(
    (project) =>
      project.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={cn("section", styles.wrapper)}>
      <div className={styles.titleContainer}>
        <span className={cn("hairline-2", styles.subtitle)}>Overview</span>
        <h1 className={cn("h2", styles.pageTitle)}>Projects</h1>
      </div>

      {/* 2. Top Bar (Search + Add Button) */}
      <div className={styles.topBar}>
        <input
          className={styles.search}
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Link href="/admin/projects/create" className={styles.addButton}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Project
        </Link>
      </div>

      {/* 3. Table Data Container */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Project</th>
              <th>Description</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProjects && filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>
                    <strong>{project.title}</strong>
                  </td>
                  <td>{project.description}</td>
                  <td>{project.images?.length || 0}</td>
                  <td>
                    <div className={styles.actions}>
                      <Link
                        href={`/admin/projects/${project.id}/edit`}
                        className={styles.editButton}
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(project.id)}
                        className={styles.deleteButton}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  style={{
                    textAlign: "center",
                    padding: "32px",
                    color: "var(--n4)",
                  }}
                >
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}