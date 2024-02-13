import React from "react";
import PolygonIcon from "@/app/components/assets/PolygonIcon";
import get from "lodash/get";

import { Controller } from "react-hook-form";
import { SelectField } from "@/app/components/AddReportFields/SelectField";
import { RadioInput } from "@/app/components/AddReportFields/RadioField";
import FemaleIcon from "@/app/components/assets/FemaleIcon";
import MaleIcon from "@/app/components/assets/MaleIcon";
import SwitchField from "@/app/components/AddReportFields/SwitchField";
import TimeRangeField from "@/app/components/AddReportFields/TimeRangeField";
import DateRangeInput from "@/app/components/AddReportFields/DateRangeField";

const RevenueForm = ({ control, errors, watch }) => {
  const all_time = watch("revenue.all_time");
  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <span style={{ color: "#09131973" }}>
          In here you can select details
        </span>
        <h5 style={{ fontWeight: "bold", color: "#2E5D7D" }}>revenue</h5>
      </div>

      <div className="d-flex w-100 justify-content-center">
        <div className="w-50 d-flex flex-column gap-4">
          <div className="d-flex flex-column">
            <label className="form-label">Select Patient</label>
            <Controller
              name="revenue.patient"
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
            <label className="form-label">province</label>
            <Controller
              name="revenue.province"
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
          <div className="d-flex flex-column ">
            <RadioInput
              control={control}
              label="Select Gender"
              name="revenue.select_gender"
              errors={errors}
              options={[
                { label: "Male", value: "male", icon: <MaleIcon /> },
                {
                  label: "Female",
                  value: "female",
                  icon: <FemaleIcon color="red" />,
                },
                { label: "Unknown", value: "unknown" },
                // Add more options here
              ]}
            />
          </div>
          <div className="d-flex flex-column">
            <DateRangeInput
              control={control}
              name="revenue.Date"
              errors={
                errors.revenue && errors.revenue.Date ? errors.revenue.Date : {}
              }
              label={"Date Range Selection"}
            />
          </div>
          <div className="d-flex flex-column">
            {!all_time && (
              <TimeRangeField
                control={control}
                name="revenue.Time"
                errors={
                  errors.revenue && errors.revenue.Time
                    ? errors.revenue.Time
                    : {}
                }
                label={"Time Range Selection"}
                disabled={all_time}
              />
            )}
            <SwitchField
              control={control}
              name="revenue.all_time"
              label="All the time"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RevenueForm;
