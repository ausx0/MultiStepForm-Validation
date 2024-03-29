"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css"; // Import bootstrap CSS
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import pdfReducer from "../app/Store/PdfSlice";

const inter = Inter({ subsets: ["latin"] });

const store = configureStore({
  reducer: {
    pdf: pdfReducer,
  },
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-0 m-4`}>
        <MantineProvider>
          <Provider store={store}>{children}</Provider>
        </MantineProvider>
      </body>
    </html>
  );
}
