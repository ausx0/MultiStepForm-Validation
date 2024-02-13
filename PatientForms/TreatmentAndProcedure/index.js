import React from "react";

import { Controller } from "react-hook-form";
import { SelectField } from "@components/Forms/Analytics/AddReportFields/SelectField";

import DateRangeInput from "@components/Forms/Analytics/AddReportFields/DateRangeField";
import TimeRangeField from "@components/Forms/Analytics/AddReportFields/TimeRangeField";
import SwitchField from "@components/Forms/Analytics/AddReportFields/SwitchField";
import { RadioInput } from "@components/Forms/Analytics/AddReportFields/RadioField";

const TreatmentAndProcedureForm = ({ control, errors, watch }) => {
  const all_time = watch("tab.all_time");

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
              name="tab.radio_button"
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
              name="tab.Date"
              errors={errors.tab ? errors.tab.Date : {}}
              label={"Date Range Selection"}
            />
          </div>
          {!all_time && (
            <div className="d-flex flex-column">
              <TimeRangeField
                control={control}
                name="tab.Time"
                errors={errors.tab && errors.tab.Time ? errors.tab.Time : {}}
                label={"Time Range Selection"}
              />
            </div>
          )}
          <SwitchField
            control={control}
            name="tab.all_time"
            label="All the time"
          />
        </div>
      </div>
    </>
  );
};

export default TreatmentAndProcedureForm;
