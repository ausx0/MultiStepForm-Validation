import React from "react";

const CirclePlusIcon = ({ color = "white", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11.5" cy="12" r="10.5" stroke={color} strokeWidth="1.5" />
    <path
      d="M14.6496 12L11.4996 12M11.4996 12L8.34961 12M11.4996 12L11.4996 8.85001M11.4996 12L11.4996 15.15"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default CirclePlusIcon;
