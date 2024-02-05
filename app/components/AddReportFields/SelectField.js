import React from "react";
import styles from "./styles.module.css";
import PolygonIcon from "../assets/PolygonIcon";
import Select, { components } from "react-select";
import get from "lodash/get";

// Override the DropdownIndicator component
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <PolygonIcon />
    </components.DropdownIndicator>
  );
};
export function SelectField({
  options,
  onChange,
  onBlur,
  selected,
  error,
  name, // add this line
  ...rest
}) {
  // Convert options to the format expected by react-select
  const selectOptions = options.map((value) => ({ label: value, value }));

  // Extract the specific error message for this field
  const errorMessage = get(error, `${name}.message`);

  return (
    <>
      <Select
        {...rest}
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: "8px", // Add this line to set the border radius
          }),
        }}
        onChange={(option) => onChange(option.value)} // react-select uses an object for the selected option
        onBlur={onBlur}
        value={selectOptions.find((option) => option.value === selected)} // find the selected option object
        options={selectOptions}
        components={{ DropdownIndicator, IndicatorSeparator: () => null }} // use the custom DropdownIndicator
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </>
  );
}
