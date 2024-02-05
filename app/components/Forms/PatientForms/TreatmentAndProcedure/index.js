import React from "react";

import { Controller } from "react-hook-form";
import { SelectField } from "@/app/components/AddReportFields/SelectField";

import DateRangeInput from "@/app/components/AddReportFields/DateRangeField";
import TimeRangeField from "@/app/components/AddReportFields/TimeRangeField";
import SwitchField from "@/app/components/AddReportFields/SwitchField";
import { RadioInput } from "@/app/components/AddReportFields/RadioField";

const TreatmentAndProcedureForm = ({ control, errors, watch }) => {
  const allTime = watch("TAP.AllTime");

  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <span style={{ color: "#09131973" }}>
          In here you can select details
        </span>
        <h5 style={{ fontWeight: "bold", color: "#2E5D7D" }}>
          Treatment and Procedure
        </h5>
      </div>

      <div className="d-flex w-100 justify-content-center">
        <div className="w-50 d-flex flex-column gap-4">
          <div className="d-flex flex-column ">
            <RadioInput
              label="Which one do you want?"
              control={control}
              defaultValue="treatment" // pass the default value here
              errors={errors} // pass the errors object directly
              name="TAP.RadioButton"
              options={[
                { label: "Treatment", value: "treatment" },
                {
                  label: "Procedure",
                  value: "procedure",
                },
              ]}
            />
          </div>
          <div className="d-flex flex-column">
            <DateRangeInput
              control={control}
              name="TAP.Date"
              errors={errors.TAP ? errors.TAP.Date : {}}
              label={"Date Range Selection"}
            />
          </div>
          {!allTime && (
            <div className="d-flex flex-column">
              <TimeRangeField
                control={control}
                name="TAP.Time"
                errors={errors.TAP && errors.TAP.Time ? errors.TAP.Time : {}}
                label={"Time Range Selection"}
              />
            </div>
          )}
          <SwitchField
            control={control}
            name="TAP.AllTime"
            label="All the time"
          />
        </div>
      </div>
    </>
  );
};

export default TreatmentAndProcedureForm;
