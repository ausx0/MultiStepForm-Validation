import React, { useEffect } from "react";

import { Controller } from "react-hook-form";
import { SelectField } from "@/app/components/AddReportFields/SelectField";

import DateRangeInput from "@/app/components/AddReportFields/DateRangeField";
import TimeRangeField from "@/app/components/AddReportFields/TimeRangeField";
import SwitchField from "@/app/components/AddReportFields/SwitchField";

const UtilizationForm = ({ control, errors, watch }) => {
  const allTime = watch("Utilization.AllTime");

  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <span style={{ color: "#09131973" }}>
          In here you can select details
        </span>
        <h5 style={{ fontWeight: "bold", color: "#2E5D7D" }}>Cost Analysis</h5>
      </div>

      <div className="d-flex w-100 justify-content-center">
        <div className="w-50 d-flex flex-column gap-4">
          <div className="d-flex flex-column">
            <label className="form-label">Select items</label>
            <Controller
              name="Utilization.Items"
              control={control}
              render={({ field }) => (
                <SelectField
                  {...field}
                  options={["Option 1", "Option 2", "Option 3"]}
                  error={errors}
                />
              )}
            />
          </div>
          <div className="d-flex flex-column">
            <DateRangeInput
              control={control}
              name="Utilization.Date"
              errors={
                errors.Utilization && errors.Utilization.Date
                  ? errors.Utilization.Date
                  : {}
              }
              label={"Date Range Selection"}
            />
          </div>
          <div className="d-flex flex-column">
            {!allTime && (
              <TimeRangeField
                control={control}
                name="Utilization.Time"
                errors={
                  errors.Utilization && errors.Utilization.Time
                    ? errors.Utilization.Time
                    : {}
                }
                label={"Time Range Selection"}
                disabled={allTime}
              />
            )}
            <SwitchField
              control={control}
              name="Utilization.AllTime"
              label="All the time"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UtilizationForm;
