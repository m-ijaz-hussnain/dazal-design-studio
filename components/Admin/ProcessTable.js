"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./ProcessTable.module.css";

export default function ProcessTable() {
  const [process, setProcess] = useState(null);

  useEffect(() => {
    async function loadProcess() {
      const response = await fetch("/api/process");
      const data = await response.json();
      setProcess(data);
    }

    loadProcess();
  }, []);

  async function handleDelete(id) {
    const ok = confirm("Delete step?");

    if (!ok) {
      return;
    }

    await fetch(`/api/process/${id}`, {
      method: "DELETE",
    });

    window.location.reload();
  }

  return (
    <div className={styles.wrapper}>
      {/* Title Container */}
      <div className={styles.titleContainer}>
        <span className={styles.subtitle}>SETTINGS</span>
        <h1 className={styles.pageTitle}>Process Settings</h1>
      </div>

      {/* 1. TOP CARD: Process Details (Card Ke Andar Edit Button) */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.valueTitle}>Process Details</h2>
          <Link href="/admin/process/edit" className={styles.addButton}>
            Edit Header
          </Link>
        </div>

        <div className={styles.block}>
          <span className={styles.label}>Title</span>
          <h3 className={styles.valueTitle}>
            {process?.title || "Development process."}
          </h3>
        </div>

        <div className={styles.divider} />

        <div className={styles.block}>
          <span className={styles.label}>Description</span>
          <p className={styles.valueText}>
            {process?.description ||
              "A brief insight into how I craft custom digital solutions."}
          </p>
        </div>
      </div>

      {/* 2. PROCESS STEPS TABLE SECTION */}
      <div className={styles.card}>
        <div className={styles.topBar}>
          <h2 className={styles.valueTitle}>Process Steps</h2>
          <Link href="/admin/process/create" className={styles.addButton}>
            Add Step
          </Link>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {process?.steps && process.steps.length > 0 ? (
                process.steps.map((step) => (
                  <tr key={step.id}>
                    <td>{step.id}</td>
                    <td>
                      <strong>{step.title}</strong>
                    </td>
                    <td>{step.description}</td>
                    <td>
                      <div className={styles.actions}>
                        <Link
                          href={`/admin/process/${step.id}/edit`}
                          className={styles.editButton}
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(step.id)}
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
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No steps found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}