import React, { useEffect } from "react";

import { Controller } from "react-hook-form";
import { SelectField } from "@components/Forms/Analytics/AddReportFields/SelectField";

import DateRangeInput from "@components/Forms/Analytics/AddReportFields/DateRangeField";
import TimeRangeField from "@components/Forms/Analytics/AddReportFields/TimeRangeField";
import SwitchField from "@components/Forms/Analytics/AddReportFields/SwitchField";

const RadiologyForm = ({ control, errors, watch }) => {
  const all_time = watch("radiology.all_time");

  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <span style={{ color: "#09131973" }}>
          In here you can select details
        </span>
        <h5 style={{ fontWeight: "bold", color: "#2E5D7D" }}>radiology</h5>
      </div>

      <div className="d-flex w-100 justify-content-center">
        <div className="w-50 d-flex flex-column gap-4">
          <div className="d-flex flex-column">
            <DateRangeInput
              control={control}
              name="radiology.Date"
              errors={
                errors.radiology && errors.radiology.Date
                  ? errors.radiology.Date
                  : {}
              }
              label={"Date Range Selection"}
            />
          </div>
          <div className="d-flex flex-column">
            {!all_time && (
              <TimeRangeField
                control={control}
                name="radiology.Time"
                errors={
                  errors.radiology && errors.radiology.Time
                    ? errors.radiology.Time
                    : {}
                }
                label={"Time Range Selection"}
                disabled={all_time}
              />
            )}
            <SwitchField
              control={control}
              name="radiology.all_time"
              label="All the time"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RadiologyForm;
