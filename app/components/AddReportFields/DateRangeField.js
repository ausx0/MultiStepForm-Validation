import React from "react";
import { Controller } from "react-hook-form";
import ArrowRightIcon from "../assets/ArrowRightIcon";

const DateRangeInput = ({ control, label, name, errors }) => (
  <div className="d-flex flex-column">
    <label className="form-label">{label}</label>
    <div className="d-flex input-group">
      <Controller
        name={`${name}.start_date`}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            type="date"
            className="form-control"
            placeholder="Start Date"
          />
        )}
      />
      <span className="input-group-text" style={{ background: "#DDE1E6" }}>
        <ArrowRightIcon />
      </span>
      <Controller
        name={`${name}.end_date`}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            type="date"
            className="form-control"
            placeholder="End Date"
          />
        )}
      />
    </div>

    {errors && errors.start_date && (
      <p style={{ color: "red" }}>{errors.start_date.message}</p>
    )}
    {errors && errors.end_date && (
      <p style={{ color: "red" }}>{errors.end_date.message}</p>
    )}
  </div>
);

export default DateRangeInput;
