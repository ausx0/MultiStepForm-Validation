import React from "react";
import PolygonIcon from "@/app/components/assets/PolygonIcon";

import { Controller } from "react-hook-form";
import { SelectField } from "@/app/components/AddReportFields/SelectField";
import { RadioInput } from "@/app/components/AddReportFields/RadioField";
import FemaleIcon from "@/app/components/assets/FemaleIcon";
import MaleIcon from "@/app/components/assets/MaleIcon";
import SwitchField from "@/app/components/AddReportFields/SwitchField";
import TimeRangeField from "@/app/components/AddReportFields/TimeRangeField";
import DateRangeInput from "@/app/components/AddReportFields/DateRangeField";

const AllergyForm = ({ control, errors, watch }) => {
  const all_time = watch("allergy.all_time");
  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <span style={{ color: "#09131973" }}>
          In here you can select details
        </span>
        <h5 style={{ fontWeight: "bold", color: "#2E5D7D" }}>allergy</h5>
      </div>

      <div className="d-flex w-100 justify-content-center">
        <div className="w-50 d-flex flex-column gap-4">
          <div className="d-flex flex-column">
            <label className="form-label">Select allergy</label>
            <Controller
              name="allergy.Select"
              control={control}
              render={({ field }) => (
                <SelectField
                  {...field}
                  options={["Option 1", "Option 2", "Option 3"]}
                  error={
                    errors.allergy && errors.allergy.Select
                      ? errors.allergy.Select.message
                      : null
                  } // pass the error message here
                />
              )}
            />
          </div>
          <div className="d-flex flex-column">
            <DateRangeInput
              control={control}
              name="allergy.Date"
              errors={
                errors.allergy && errors.allergy.Date ? errors.allergy.Date : {}
              }
              label={"Date Range Selection"}
            />
          </div>
          <div className="d-flex flex-column">
            {!all_time && (
              <TimeRangeField
                control={control}
                name="allergy.Time"
                errors={
                  errors.allergy && errors.allergy.Time
                    ? errors.allergy.Time
                    : {}
                }
                label={"Time Range Selection"}
                disabled={all_time}
              />
            )}
            <SwitchField
              control={control}
              name="allergy.all_time"
              label="All the time"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllergyForm;
