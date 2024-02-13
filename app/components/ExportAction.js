"use client";
import React, { useRef, useState } from "react";
import StyledButton from "./ui/Button";
import { useDispatch } from "react-redux";
import { downloadPDF } from "../Store/PdfSlice";
import PDFFile from "./PDF/PDFFile";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ReactToPrint from "react-to-print";
import printRX from "@/utils/printRX";

const printTrigger = () => {
  return (
    <StyledButton
      style={{
        background: "#E0BB1F",
        color: "#fff",
        border: "none",
      }}
      variant={"actions"}
      // onClick={downloadPDF}
    >
      Export
    </StyledButton>
  );
};

const ExportAction = () => {
  //   const component1Ref = useRef(null);

  const [component1Ref, setComponent1Ref] = useState(null);

  const downloadPDF = () => {
    const input = document.getElementById("myDiv");
    input.classList.remove("d-none");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
      input.classList.add("d-none");
    });
  };
  return (
    <>
      <div className="d-none">
        <PDFFile refd={setComponent1Ref} />
      </div>
      <ReactToPrint
        content={() => component1Ref}
        documentTitle="First component"
        trigger={printTrigger}
        print={(target) => printRX(target)}
      />
    </>
  );
};
export default ExportAction;
