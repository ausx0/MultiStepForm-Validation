import React, { useEffect } from "react";

import { Controller } from "react-hook-form";
import { SelectField } from "@/app/components/AddReportFields/SelectField";

import DateRangeInput from "@/app/components/AddReportFields/DateRangeField";
import TimeRangeField from "@/app/components/AddReportFields/TimeRangeField";
import SwitchField from "@/app/components/AddReportFields/SwitchField";

const RadiologyForm = ({ control, errors, watch }) => {
  const allTime = watch("Radiology.AllTime");

  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <span style={{ color: "#09131973" }}>
          In here you can select details
        </span>
        <h5 style={{ fontWeight: "bold", color: "#2E5D7D" }}>Radiology</h5>
      </div>

      <div className="d-flex w-100 justify-content-center">
        <div className="w-50 d-flex flex-column gap-4">
          <div className="d-flex flex-column">
            <DateRangeInput
              control={control}
              name="Radiology.Date"
              errors={
                errors.Radiology && errors.Radiology.Date
                  ? errors.Radiology.Date
                  : {}
              }
              label={"Date Range Selection"}
            />
          </div>
          <div className="d-flex flex-column">
            {!allTime && (
              <TimeRangeField
                control={control}
                name="Radiology.Time"
                errors={
                  errors.Radiology && errors.Radiology.Time
                    ? errors.Radiology.Time
                    : {}
                }
                label={"Time Range Selection"}
                disabled={allTime}
              />
            )}
            <SwitchField
              control={control}
              name="Radiology.AllTime"
              label="All the time"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RadiologyForm;
