import React from "react";
import { Controller } from "react-hook-form";
import get from "lodash/get";

export function RadioInput({
  control,
  label,
  name,
  options,
  errors,
  defaultValue,
  message,
}) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue} // add this line
      render={({ field }) => (
        <div className="d-flex flex-column">
          <label className="form-label">{label}</label>
          <div className="d-flex">
            {options.map((option, index) => (
              <label
                className="mb-4"
                key={index}
                style={{ marginRight: "10px" }}
              >
                <input
                  type="radio"
                  value={option.value}
                  checked={field.value === option.value}
                  onChange={() => field.onChange(option.value)}
                  style={{ display: "none" }}
                />
                <span
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "100px",
                    height: "90%",
                    padding: "10px",
                    border:
                      field.value === option.value
                        ? "3px solid #2E5D7D"
                        : "1px solid #C5C5C5",
                    borderRadius: "8px",
                    backgroundColor:
                      field.value === option.value ? "#fff9" : "#fff",
                    color: "#000",
                  }}
                >
                  {option.icon}
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          <span className="text-danger">
            {get(errors, `${name}.message`, "")}
          </span>
        </div>
      )}
    />
  );
}
