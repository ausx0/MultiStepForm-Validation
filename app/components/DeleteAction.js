import { useState } from "react";
import { Button, Loader, Modal } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import StyledButton from "./ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function DeleteAction() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEnter = () => {
    setTimeout(() => setRows(10), 1000);
  };

  return (
    <>
      <button
        className="btn btn-danger btn-sm "
        onClick={handleOpen}
        style={{
          height: "20%",
          borderRadius: "50%",
        }}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        onEntered={handleEnter}
        onExited={() => {
          setRows(0);
        }}
      >
        <Modal.Header>
          <Modal.Title style={{ color: "#2E5D7D", fontWeight: "bold" }}>
            Delete Report
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure Want Delete This ?</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary" color="red ">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
