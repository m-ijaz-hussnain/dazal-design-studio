"use client";

import Link from "next/link";
import cn from "classnames";
import { useRouter, usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  async function logout() {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      router.push("/admin/login");
    }
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.topSection}>
        {/* Brand Header */}
        <div className={styles.logoContainer}>
          <div className={cn("hairline-2", styles.logoBrand)}>Admin Panel</div>
          <h2 className={styles.logoTitle}>Dazal Design</h2>
        </div>

        {/* Navigation Menu */}
        <nav className={styles.nav}>
          {/* Dashboard Link */}
          <Link
            href="/admin/dashboard"
            className={cn(
              styles.link,
              pathname === "/admin/dashboard" && styles.active
            )}
          >
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
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Dashboard
          </Link>

          {/* Projects Link */}
          <Link
            href="/admin/projects"
            className={cn(
              styles.link,
              pathname.startsWith("/admin/projects") && styles.active
            )}
          >
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
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            Projects
          </Link>

          {/* About Link */}
          <Link
            href="/admin/about"
            className={cn(
              styles.link,
              pathname.startsWith("/admin/about") && styles.active
            )}
          >
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
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            About
          </Link>
          {/* Process Link */}
          <Link
            href="/admin/process"
            className={cn(
              styles.link,
              pathname.startsWith("/admin/process") && styles.active
            )}
          >
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
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            Process
          </Link>
        </nav>
      </div>

      {/* Logout Action */}
      <button className={styles.logoutButton} onClick={logout}>
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
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
        Logout
      </button>
    </aside>
  );
}