import React, { useEffect, useRef } from "react";
import styles from "./modal.module.css";
const Modal = ({ isOpen, toggleModal, closeOnOutsideClick, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        closeOnOutsideClick &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        toggleModal();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeOnOutsideClick, toggleModal]);
  return (
    <div className={styles.modal} style={isOpen ? { display: "none" } : null}>
      <div className={styles.modal__wrapper} ref={modalRef}>
        {children}
      </div>
    </div>
  );
};
export default Modal;
