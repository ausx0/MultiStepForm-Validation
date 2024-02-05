import React, { useState } from "react";
import StyledButton from "./ui/Button";
import CirclePlusIcon from "./assets/PlusInCircleIcon";
import { Button, Modal } from "rsuite";
import AddReportForm from "./AddReportForm";

const AddReportModal = () => {
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
        style={{ marginLeft: "80px" }}
        variant={"primary"}
      >
        Add new Report
        <CirclePlusIcon />
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
        <Modal.Header className="px-4 py-2">
          <Modal.Title
            style={{ color: "#2E5D7D", fontWeight: "bold", fontSize: "30px" }}
          >
            Add Report
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-3 ">
          <AddReportForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddReportModal;
