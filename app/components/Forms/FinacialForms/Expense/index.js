import React, { useEffect } from "react";

import { Controller } from "react-hook-form";
import { SelectField } from "@/app/components/AddReportFields/SelectField";

import DateRangeInput from "@/app/components/AddReportFields/DateRangeField";
import TimeRangeField from "@/app/components/AddReportFields/TimeRangeField";
import SwitchField from "@/app/components/AddReportFields/SwitchField";

const ExpenseForm = ({ control, errors, watch }) => {
  const all_time = watch("expense.all_time");

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
          <div className="d-flex flex-column">
            <label className="form-label">Select Items</label>
            <Controller
              name="expense.Select"
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
              name="expense.Date"
              errors={
                errors.expense && errors.expense.Date ? errors.expense.Date : {}
              }
              label={"Date Range Selection"}
            />
          </div>
          <div className="d-flex flex-column">
            {!all_time && (
              <TimeRangeField
                control={control}
                name="expense.Time"
                errors={
                  errors.expense && errors.expense.Time
                    ? errors.expense.Time
                    : {}
                }
                label={"Time Range Selection"}
                disabled={all_time}
              />
            )}
            <SwitchField
              control={control}
              name="expense.all_time"
              label="All the time"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseForm;
