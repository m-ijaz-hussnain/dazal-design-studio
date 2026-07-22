"use client";

import Sidebar from "@/components/Admin/Sidebar";
import styles from "./admin.module.css";

export default function AdminPanelLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}