import { Controller } from "react-hook-form";
import { Switch } from "@mantine/core";

const SwitchField = ({ control, name, label }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={false}
      render={({ field }) => (
        <Switch className="mt-3" {...field} label={label} color="#2E5D7D" />
      )}
    />
  );
};

export default SwitchField;
