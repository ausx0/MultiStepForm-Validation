import React from "react";

import { Controller } from "react-hook-form";
import { SelectField } from "@components/Forms/Analytics/AddReportFields/SelectField";
import { RadioInput } from "@components/Forms/Analytics/AddReportFields/RadioField";
import MaleIcon from "@assets/icons/Analytics/MaleIcon";
import FemaleIcon from "@assets/icons/Analytics/FemaleIcon";

const DemographicForm = ({ control, errors }) => {
  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <span style={{ color: "#09131973" }}>
          In here you can select details
        </span>
        <h5 style={{ fontWeight: "bold", color: "#2E5D7D" }}>Demographic</h5>
      </div>

      <div className="d-flex w-100 justify-content-center">
        <div className="w-50 d-flex flex-column gap-4">
          <div className="d-flex flex-column">
            <label className="form-label">Material Status</label>
            <Controller
              name="demographics.material_status"
              control={control}
              render={({ field }) => (
                <SelectField
                  {...field}
                  error={errors}
                  options={["Option 1", "Option 2", "Option 3"]}
                />
              )}
            />
          </div>
          <div className="d-flex flex-column">
            <label className="form-label">province</label>
            <Controller
              name="demographics.province"
              control={control}
              render={({ field }) => (
                <SelectField
                  {...field}
                  error={errors}
                  options={["Option 1", "Option 2", "Option 3"]}
                />
              )}
            />
          </div>
          <div className="d-flex flex-column ">
            <RadioInput
              label="Select Gender"
              errors={errors}
              control={control}
              name="demographics.select_gender"
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
          <div className="d-flex flex-column ">
            <RadioInput
              label="Have Children"
              control={control}
              errors={errors}
              name="demographics.have_children"
              options={[
                { label: "Yes", value: "yes" },
                {
                  label: "No",
                  value: "no",
                },
                { label: "Unknown", value: "unknown" },

                // Add more options here
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DemographicForm;
