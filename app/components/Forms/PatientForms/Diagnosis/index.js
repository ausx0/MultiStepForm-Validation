import React, { useEffect } from "react";

import { Controller } from "react-hook-form";
import { SelectField } from "@/app/components/AddReportFields/SelectField";

import DateRangeInput from "@/app/components/AddReportFields/DateRangeField";
import TimeRangeField from "@/app/components/AddReportFields/TimeRangeField";
import SwitchField from "@/app/components/AddReportFields/SwitchField";

const DiagnosisForm = ({ control, errors, watch }) => {
  const all_time = watch("diagnosis.all_time");

  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <span style={{ color: "#09131973" }}>
          In here you can select details
        </span>
        <h5 style={{ fontWeight: "bold", color: "#2E5D7D" }}>diagnosis</h5>
      </div>

      <div className="d-flex w-100 justify-content-center">
        <div className="w-50 d-flex flex-column gap-4">
          <div className="d-flex flex-column">
            <DateRangeInput
              control={control}
              name="diagnosis.Date"
              errors={
                errors.diagnosis && errors.diagnosis.Date
                  ? errors.diagnosis.Date
                  : {}
              }
              label={"Date Range Selection"}
            />
          </div>
          <div className="d-flex flex-column">
            {!all_time && (
              <TimeRangeField
                control={control}
                name="diagnosis.Time"
                errors={
                  errors.diagnosis && errors.diagnosis.Time
                    ? errors.diagnosis.Time
                    : {}
                }
                label={"Time Range Selection"}
                disabled={all_time}
              />
            )}
            <SwitchField
              control={control}
              name="diagnosis.all_time"
              label="All the time"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosisForm;
