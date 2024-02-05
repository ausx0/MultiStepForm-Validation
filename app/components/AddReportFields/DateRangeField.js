import React from "react";
import { Controller } from "react-hook-form";
import ArrowRightIcon from "../assets/ArrowRightIcon";

const DateRangeInput = ({ control, label, name, errors }) => (
  <div className="d-flex flex-column">
    <label className="form-label">{label}</label>
    <div className="d-flex input-group">
      <Controller
        name={`${name}.startDate`}
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
        name={`${name}.endDate`}
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

    {errors && errors.startDate && (
      <p style={{ color: "red" }}>{errors.startDate.message}</p>
    )}
    {errors && errors.endDate && (
      <p style={{ color: "red" }}>{errors.endDate.message}</p>
    )}
  </div>
);

export default DateRangeInput;
