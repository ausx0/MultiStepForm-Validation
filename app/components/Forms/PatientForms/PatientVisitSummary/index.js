import React, { useEffect } from "react";

import { Controller } from "react-hook-form";
import { SelectField } from "@/app/components/AddReportFields/SelectField";

import DateRangeInput from "@/app/components/AddReportFields/DateRangeField";
import TimeRangeField from "@/app/components/AddReportFields/TimeRangeField";
import SwitchField from "@/app/components/AddReportFields/SwitchField";

const PatientVisitSummaryForm = ({ control, errors, watch }) => {
  const all_time = watch("pvs.all_time");

  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <span style={{ color: "#09131973" }}>
          In here you can select details
        </span>
        <h5 style={{ fontWeight: "bold", color: "#2E5D7D" }}>
          Patient Visit Summary
        </h5>
      </div>

      <div className="d-flex w-100 justify-content-center">
        <div className="w-50 d-flex flex-column gap-4">
          <div className="d-flex flex-column">
            <DateRangeInput
              control={control}
              name="pvs.Date"
              errors={errors.pvs && errors.pvs.Date ? errors.pvs.Date : {}}
              label={"Date Range Selection"}
            />
          </div>
          <div className="d-flex flex-column">
            {!all_time && (
              <TimeRangeField
                control={control}
                name="pvs.Time"
                errors={errors.pvs && errors.pvs.Time ? errors.pvs.Time : {}}
                label={"Time Range Selection"}
                disabled={all_time}
              />
            )}
            <SwitchField
              control={control}
              name="pvs.all_time"
              label="All the time"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientVisitSummaryForm;
