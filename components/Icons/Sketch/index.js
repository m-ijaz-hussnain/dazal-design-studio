import React from "react";

export default function Sketch() {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Diamond Outline */}
      <path
        d="M7 3.5H17L21 8.5L12 21.5L3 8.5L7 3.5Z"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Top Facets */}
      <path
        d="M7 3.5L12 8.5L17 3.5"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Middle Line */}
      <path
        d="M3 8.5H21"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Center Line */}
      <path
        d="M12 8.5V21.5"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}