import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PDFFile = ({ refd }) => {
  const downloadPDF = () => {
    const input = document.getElementById("myDiv");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  return (
    <div ref={refd}>
      <h1>Hello</h1>
      <p>hisaf</p>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default PDFFile;
