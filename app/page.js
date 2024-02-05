"use client";
import React from "react";
import Table from "./components/Table";
import SearchInput from "./components/ui/SearchInput";
import StyledButton from "./components/ui/Button";
import {
  faPlusCircle,
  faTrash,
  faTrashAlt,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlusInCircleIcon from "./components/assets/PlusInCircleIcon";
import CirclePlusIcon from "./components/assets/PlusInCircleIcon";
import DeleteAction from "./components/DeleteAction";
import AddReportModal from "./components/AddReportModal";

const columns = [
  {
    key: "id",
    title: "ID",
    width: 10,
  },
  {
    key: "reportName",
    title: "Report Name",
    width: 200,
  },
  {
    key: "typeOfReport",
    title: "Type Of Report",
    width: 200,
    render: (_, { typeOfReport }) =>
      typeOfReport === "Financial" ? (
        <span style={{ color: "#FFC107" }}>{typeOfReport}</span>
      ) : (
        <span style={{ color: "#2E5D7D" }}>{typeOfReport}</span>
      ),
  },
  {
    key: "pages",
    title: "Pages",
    width: 50,
  },
  {
    // key: "tags",
    title: "Actions",
    width: 300,
    render: () => (
      <>
        <div className="d-flex justify-content-center align-items-center gap-4">
          <StyledButton
            style={{
              background: "#7493A8",
              color: "#fff",
              border: "none",
            }}
            variant={"actions"}
          >
            View
          </StyledButton>

          <StyledButton
            style={{
              background: "#E0BB1F",
              color: "#fff",
              border: "none",
            }}
            variant={"actions"}
          >
            Export
          </StyledButton>
          <DeleteAction />
        </div>
      </>
    ),
  },
];

const data = [
  {
    id: 1,
    reportName: "Francisco Mendes",
    typeOfReport: "Financial",
    pages: 12,
    tags: ["designer", "photographer"],
  },
  {
    id: 2,
    reportName: "Ricardo Malva",
    typeOfReport: "Patient",
    pages: 12,
    tags: ["designer", "photographer"],
  },
  {
    id: 3,
    reportName: "Francisco Mendes",
    typeOfReport: "Financial",
    pages: 12,
    tags: ["designer", "photographer"],
  },
  {
    id: 4,
    reportName: "Ricardo Malva",
    typeOfReport: "Patient",
    pages: 12,
    tags: ["designer", "photographer"],
  },
];

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <h4 className="d-flex align-items-center gap-2">
            Reports<span className="fw-bold fs-2"> 122</span>
          </h4>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <SearchInput placeholder={"Search for reports..."} />
          <StyledButton style={{ marginLeft: "10px" }}>Search</StyledButton>
          <div>
            <AddReportModal />
          </div>
        </div>
      </div>
      <div className="m-4">
        <Table data={data} columns={columns} />
      </div>
    </>
  );
};

export default Home;
