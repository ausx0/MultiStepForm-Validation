import React from "react";
import { Clinic360Icon } from "../../assets/Clinc360Icon";
import StyledButton from "../../ui/Button";

export const LastStep = ({ handleClose }) => {
  return (
    <>
      <div className="d-flex flex-column gap-5 ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="mx-1 d-flex">
            <Clinic360Icon />
            <div className="mx-2">
              <span className="fw-bold">Clinic 360 </span>
              <p>Report</p>
            </div>
          </div>

          <div className="mx-1 d-flex flex-column align-items-end">
            <div className="mx-2">
              <span>Report No.: </span>
              <span className="fw-bold">#001</span>
            </div>
            <div className="mx-2">
              <span>Date: </span>
              <span className="fw-bold">
                1 January -1 December 2023, 9:00 AM - 5:00 PM
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="d-flex justify-content-between gap-5 p-4 rounded-4 shadow-sm"
            style={{ background: "#F2F4F8" }}
          >
            <div>
              <p>Assigned by</p>
              <span className="fw-bold">Mhamad Kamal </span>
            </div>
            <div>
              <hr
                style={{
                  borderLeft: "1px solid #000",
                  height: "100%",
                  width: "0",
                  margin: "0 10px",
                  color: "#DDE1E6",
                }}
              />
            </div>
            <div>
              <p>Types of Report</p>
              <span className="fw-bold">Sales Report</span>
            </div>
            <div>
              <hr
                style={{
                  borderLeft: "1px solid #000",
                  height: "100%",
                  width: "0",
                  margin: "0 10px",
                  color: "#DDE1E6",
                }}
              />
            </div>
            <div>
              <p>Include</p>
              <span className="fw-bold">Profit and Loss Statement </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-center align-items-center position-absolute gap-5"
        style={{ left: "0", right: "0", bottom: "0" }}
      >
        <div>
          <StyledButton variant={"primary"}>Download as PDF</StyledButton>
        </div>

        <div>
          <StyledButton onClick={handleClose}>Close</StyledButton>
        </div>
      </div>
    </>
  );
};
