import React, { useEffect } from "react";

import { Controller } from "react-hook-form";
import { SelectField } from "@/app/components/AddReportFields/SelectField";

import DateRangeInput from "@/app/components/AddReportFields/DateRangeField";
import TimeRangeField from "@/app/components/AddReportFields/TimeRangeField";
import SwitchField from "@/app/components/AddReportFields/SwitchField";

const DiagnosisForm = ({ control, errors, watch }) => {
  const allTime = watch("Diagnosis.AllTime");

  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <span style={{ color: "#09131973" }}>
          In here you can select details
        </span>
        <h5 style={{ fontWeight: "bold", color: "#2E5D7D" }}>Diagnosis</h5>
      </div>

      <div className="d-flex w-100 justify-content-center">
        <div className="w-50 d-flex flex-column gap-4">
          <div className="d-flex flex-column">
            <DateRangeInput
              control={control}
              name="Diagnosis.Date"
              errors={
                errors.Diagnosis && errors.Diagnosis.Date
                  ? errors.Diagnosis.Date
                  : {}
              }
              label={"Date Range Selection"}
            />
          </div>
          <div className="d-flex flex-column">
            {!allTime && (
              <TimeRangeField
                control={control}
                name="Diagnosis.Time"
                errors={
                  errors.Diagnosis && errors.Diagnosis.Time
                    ? errors.Diagnosis.Time
                    : {}
                }
                label={"Time Range Selection"}
                disabled={allTime}
              />
            )}
            <SwitchField
              control={control}
              name="Diagnosis.AllTime"
              label="All the time"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosisForm;
