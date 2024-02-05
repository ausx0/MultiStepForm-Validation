import React, { useEffect } from "react";

import { Controller } from "react-hook-form";
import { SelectField } from "@/app/components/AddReportFields/SelectField";

import DateRangeInput from "@/app/components/AddReportFields/DateRangeField";
import TimeRangeField from "@/app/components/AddReportFields/TimeRangeField";
import SwitchField from "@/app/components/AddReportFields/SwitchField";

const CostAnalysisForm = ({ control, errors, watch }) => {
  const allTime = watch("CostAnalysis.AllTime");

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
            <label className="form-label">Select persons</label>
            <Controller
              name="CostAnalysis.Persons"
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
            <label className="form-label">Select Items</label>
            <Controller
              name="CostAnalysis.Items"
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
              name="CostAnalysis.Date"
              errors={
                errors.CostAnalysis && errors.CostAnalysis.Date
                  ? errors.CostAnalysis.Date
                  : {}
              }
              label={"Date Range Selection"}
            />
          </div>
          <div className="d-flex flex-column">
            {!allTime && (
              <TimeRangeField
                control={control}
                name="CostAnalysis.Time"
                errors={
                  errors.CostAnalysis && errors.CostAnalysis.Time
                    ? errors.CostAnalysis.Time
                    : {}
                }
                label={"Time Range Selection"}
                disabled={allTime}
              />
            )}
            <SwitchField
              control={control}
              name="CostAnalysis.AllTime"
              label="All the time"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CostAnalysisForm;
