import React from "react";

const InputField = ({ label, name, register, errors, ...rest }) => {
  return (
    <>
      <label>{label}</label>
      <input className="form-control" {...register(name)} {...rest} />
      {errors[name] && (
        <span className="text-danger">{errors[name].message}</span>
      )}
    </>
  );
};

export default InputField;
