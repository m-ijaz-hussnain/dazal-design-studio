"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import cn from "classnames";
import TextInput from "@/components/TextInput";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      router.push("/admin/dashboard");
    } catch (error) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Header Title Section */}
        <div className={styles.header}>
          <span className={cn("hairline-2", styles.subtitle)}>
            Dazal Design Studio
          </span>
          <h1 className={cn("h2", styles.title)}>Admin Login</h1>
        </div>

        {/* Form Section */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <span className={styles.inputLabel}>Email Address</span>
            <TextInput
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.inputLabel}>Password</span>
            <TextInput
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message Alert Box */}
          {error && (
            <div className={styles.error}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            className={styles.button}
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className={styles.spinner}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    strokeOpacity="0.25"
                  ></circle>
                  <path
                    d="M12 2 a10 10 0 0 1 10 10"
                    strokeLinecap="round"
                  ></path>
                </svg>
                Logging in...
              </>
            ) : (
              <>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Login
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}