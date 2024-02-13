import React from "react";
import { Controller } from "react-hook-form";
import ArrowRightIcon from "../assets/ArrowRightIcon";

const TimeRangeField = ({ control, label, name, errors, disabled }) => (
  <div className="d-flex flex-column">
    <label className="form-label">{label}</label>
    <div className="d-flex input-group">
      <Controller
        name={`${name}.start_time`}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            type="time"
            className="form-control"
            placeholder="Start Time"
            disabled={disabled}
          />
        )}
      />
      <span className="input-group-text" style={{ background: "#DDE1E6" }}>
        <ArrowRightIcon />
      </span>
      <Controller
        name={`${name}.end_time`}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            type="time"
            className="form-control"
            placeholder="End Time"
            disabled={disabled}
          />
        )}
      />
    </div>
    {errors && errors.start_time && (
      <p style={{ color: "red" }}>{errors.start_time.message}</p>
    )}
    {errors && errors.end_time && (
      <p style={{ color: "red" }}>{errors.end_time.message}</p>
    )}
  </div>
);

export default TimeRangeField;
