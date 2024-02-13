import React, { useEffect } from "react";

import { Controller } from "react-hook-form";
import { SelectField } from "@components/Forms/Analytics/AddReportFields/SelectField";

import DateRangeInput from "@components/Forms/Analytics/AddReportFields/DateRangeField";
import TimeRangeField from "@components/Forms/Analytics/AddReportFields/TimeRangeField";
import SwitchField from "@components/Forms/Analytics/AddReportFields/SwitchField";

const ExpenseForm = ({ control, errors, watch }) => {
  // const all_time = watch("all_time");

  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <span style={{ color: "#09131973" }}>
          In here you can select details
        </span>
        <h5 style={{ fontWeight: "bold", color: "#2E5D7D" }}>expense</h5>
      </div>

      <div className="d-flex w-100 justify-content-center">
        <div className="w-50 d-flex flex-column gap-4">
          {/* <div className="d-flex flex-column">
            <label className="form-label">Select Items</label>
            <Controller
              name="select"
              control={control}
              render={({ field }) => (
                <SelectField
                  {...field}
                  options={["Option 1", "Option 2", "Option 3"]}
                  error={errors}
                />
              )}
            />
          </div> */}
          <div className="d-flex flex-column">
            <DateRangeInput
              control={control}
              name="date"
              errors={errors.date}
              label={"Date Range Selection"}
            />
          </div>
          <div className="d-flex flex-column">
            {/* {!all_time && (
              <TimeRangeField
                control={control}
                name="time"
                errors={errors.time || {}}
                label={"Time Range Selection"}
                disabled={all_time}
              /> */}
            {/* )} */}
            {/* <SwitchField
              control={control}
              name="all_time"
              label="All the time"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseForm;
