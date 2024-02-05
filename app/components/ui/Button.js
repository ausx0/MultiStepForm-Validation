import React, { useState } from "react";
import styles from "./StyledButton.module.css";

const StyledButton = ({
  children,
  onClick,
  style,
  type,
  variant,
  className,
}) => {
  const [clicked, setClicked] = useState(false);
  const isPrimary = variant === "primary";
  const isActions = variant === "actions";

  const handleClick = (e) => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // Remove the class after 0.3s
    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${
        clicked ? styles.clicked : ""
      } ${className}`}
      type={type}
      style={{
        backgroundColor: isPrimary ? "#2E5D7D" : "#fff",
        padding: isActions ? "4px 40px" : "4px 20px",
        color: isPrimary ? "#fff" : "#2E5D7D",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        gap: "8px",
        height: "30px",
        cursor: "pointer",
        borderRadius: "8px",
        border: isPrimary ? "none" : "1px solid  #2E5D7D",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default StyledButton;
