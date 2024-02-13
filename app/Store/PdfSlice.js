import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadPDF = createAsyncThunk(
  "pdf/downloadPDF",
  async (_, { dispatch }) => {
    const input = document.getElementById("myDiv");
    await html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  }
);

export const pdfSlice = createSlice({
  name: "pdf",
  initialState: {},
  reducers: {},
});

export default pdfSlice.reducer;
