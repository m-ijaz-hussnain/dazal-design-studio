import React from "react";

export default function Notion() {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Square */}
      <rect
        x="4"
        y="4.5"
        width="16"
        height="16"
        rx="2"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />

      {/* N */}
      <path
        d="M8 16.5V8.5L16 16.5V8.5"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}