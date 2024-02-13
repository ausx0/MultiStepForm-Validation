import React, { useState } from "react";
import StyledButton from "./ui/Button";
import { Modal } from "rsuite";
import PDFFile from "./PDF/PDFFile";

const ViewAction = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEnter = () => {
    setTimeout(() => setRows(10), 1000);
  };
  return (
    <>
      <StyledButton
        onClick={handleOpen}
        style={{
          background: "#7493A8",
          color: "#fff",
          border: "none",
        }}
        variant={"actions"}
      >
        View
      </StyledButton>

      <Modal
        size={"lg"}
        open={open}
        onClose={handleClose}
        onEntered={handleEnter}
        onExited={() => {
          setRows(0);
        }}
      >
        <Modal.Header className="px-4 py-2"></Modal.Header>
        <Modal.Body className="px-3  " style={{ height: "100vh" }}>
          <PDFFile />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewAction;
