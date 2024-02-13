import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, SelectPicker, Stack } from "rsuite";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  allergySchema,
  cost_analysisSchema,
  demographicschema,
  demographicsSchema,
  diagnosisSchema,
  expenseSchema,
  LaboratoryTestResultsSchema,
  PatientVisitSummarySchema,
  ProfitAndLossStatementSchema,
  radiologySchema,
  revenueSchema,
  Step1Schema,
  TreatmentAndProcedureSchema,
  utilizationSchema,
} from "../Forms/validation/ReportSchema";
import InputField from "../AddReportFields/InputField";
import StyledButton from "../ui/Button";
import FinancialIcon from "../assets/FinancialIcon";
import PatientIcon from "../assets/PatientIcon";
import { Radio, CheckIcon, Divider } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { Select } from "../AddReportFields/SelectField";
import ArrowRightIcon from "../assets/ArrowRightIcon";
import TreatmentAndProcedureForm from "../Forms/PatientForms/TreatmentAndProcedure";

import PatientVisitSummaryForm from "../Forms/PatientForms/PatientVisitSummary";

import ProfitAndLossStatementForm from "../Forms/FinacialForms/ProfitAndLossStatement";
import { LastStep } from "./LastStep";
import DemographicForm from "../Forms/PatientForms/Demographics";
import DiagnosisForm from "../Forms/PatientForms/Diagnosis";
import RadiologyForm from "../Forms/PatientForms/Radiology";
import AllergyForm from "../Forms/PatientForms/Allergy";
import RevenueForm from "../Forms/FinacialForms/Revenue";
import ExpenseForm from "../Forms/FinacialForms/Expense";
import CostAnalysisForm from "../Forms/FinacialForms/CostAnalysis";
import UtilizationForm from "../Forms/FinacialForms/Utilization";
import LtrForm from "../Forms/PatientForms/LaboratoryTestResults";

const AddReportForm = ({ handleClose }) => {
  const [currentSchema, setCurrentSchema] = useState(Step1Schema);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({}); // New state variable for form data
  const [financial, setFinancial] = useState(true);
  const [patient, setPatient] = useState(false);
  const [stepOneData, setStepOneData] = useState({}); // New state variable for step one data

  const {
    watch,
    control,
    register,
    getValues,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(currentSchema),
  });
  const watchAllFields = watch();
  // const financial = watchAllFields.report_type === "financial";
  // const patient = watchAllFields.report_type === "patient";

  const onSubmit = handleSubmit((data) => {
    if (currentStep === 0) {
      setStepOneData(data); // Save the data from the first step
      setCurrentStep(1);
    } else if (currentStep === 1) {
      // Combine the data from the first and second steps
      const allData = { ...stepOneData, ...data };
      console.log(allData); // Now this should log all data

      setFormData(allData);
      setCurrentStep(2); // Assuming 2 is your last step
    }
  });

  const financialOptions = [
    { label: "revenue", value: "revenue" },
    { label: "expense", value: "expense" },
    { label: "Profit and Loss Statement", value: "profitAndLossStatement" },
    { label: "Cost Analysis", value: "costAnalysis" },
    { label: "utilization", value: "utilization" },
  ];

  const patientOptions = [
    { label: "Patient Demographic", value: "patientDemographic" },
    { label: "diagnosis", value: "diagnosis" },
    { label: "Treatment and Procedure", value: "treatmentAndProcedure" },
    { label: "Laboratory Test Results", value: "laboratoryTestResults" },
    { label: "radiology", value: "radiology" },
    { label: "allergy", value: "allergy" },
    { label: "Patient Visit Summary", value: "patientVisitSummary" },
  ];
  const report_includeValue = getValues("report_include");

  useEffect(() => {
    const schemaMapping = {
      revenue: revenueSchema,
      expense: expenseSchema,
      patientDemographic: demographicsSchema,
      profitAndLossStatement: ProfitAndLossStatementSchema,
      costAnalysis: cost_analysisSchema,
      utilization: utilizationSchema,
      diagnosis: diagnosisSchema,
      treatmentAndProcedure: TreatmentAndProcedureSchema,
      laboratoryTestResults: LaboratoryTestResultsSchema,
      radiology: radiologySchema,
      allergy: allergySchema,
      patientVisitSummary: PatientVisitSummarySchema,
      // ... other schemas ...
    };

    if (currentStep === 0) {
      setCurrentSchema(Step1Schema);
    } else {
      setCurrentSchema(schemaMapping[report_includeValue]);
    }
  }, [report_includeValue, currentStep]);

  return (
    <>
      <div className="d-flex w-100 mb-4 justify-content-between align-items-center">
        <span
          className="text-muted d-flex "
          style={{ fontWeight: currentStep > 0 ? "bold" : "normal" }}
        >
          <div
            className="mx-2 d-flex justify-content-center align-items-center text-white"
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50px",
              background: "#2E5D7D",
            }}
          >
            {currentStep > 0 ? <CheckIcon height={8} /> : "1"}
          </div>
          Type Of Report
        </span>
        <div
          style={{
            borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
            height: "100%",
            margin: "0 10px",
          }}
        />
        <hr
          style={{
            flex: 1,
            height: "1px",
            backgroundColor: "#e1d4d4",
            margin: "0 20px",
          }}
        />
        {/* ... */}
        <span className="text-muted d-flex">
          <div
            className={`mx-2 d-flex justify-content-center align-items-center ${
              currentStep >= 1 ? "text-white" : "text-gray"
            } `}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50px",
              background: currentStep >= 1 ? "#2E5D7D" : "#F0F2F5",
            }}
          >
            {currentStep > 1 ? <CheckIcon height={8} /> : "2"}
          </div>
          Details
        </span>
        <hr
          style={{
            flex: 1,
            height: "1px",
            backgroundColor: "#e1d4d4",
            margin: "0 20px",
          }}
        />
        {/* ... */}
        <span className="text-muted d-flex">
          <div
            className={`mx-2 d-flex justify-content-center align-items-center ${
              currentStep >= 2 ? "text-white" : "text-gray"
            } `}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50px",
              background: currentStep >= 2 ? "#2E5D7D" : "#F0F2F5",
            }}
          >
            {currentStep > 2 ? <CheckIcon /> : "3"}
          </div>
          Report
        </span>
      </div>

      <div
        className="d-flex flex-column justify-content-between overflow-auto"
        style={{ height: "60vh" }}
      >
        {currentStep < 2 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <>
              {currentStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column gap-4 m-3 w-75 justify-content-center">
                      <InputField
                        label="Name of the Report"
                        name="report_name"
                        register={register}
                        errors={errors}
                      />

                      <div className="d-flex flex-column gap-3">
                        <label>Select Report Type</label>
                        <Controller
                          control={control}
                          name="report_type"
                          defaultValue="financial" // Set default value to "financial"
                          rules={{ required: "Please select a report type." }}
                          render={({ field }) => (
                            <div className="d-flex gap-3 mb-4">
                              <button
                                onClick={() => {
                                  field.onChange("financial");
                                  setFinancial(true);
                                  setPatient(false);
                                }}
                                type="button"
                                style={{
                                  borderRadius: "8px",
                                  border: "1px solid #C5C5C5",
                                  padding: "5px",
                                  backgroundColor:
                                    field.value === "financial"
                                      ? "#2E5D7D"
                                      : "white",
                                  color:
                                    field.value === "financial"
                                      ? "white"
                                      : "#C5C5C5",
                                }}
                                className={"d-flex gap-2 align-items-center"}
                              >
                                <FinancialIcon
                                  color={
                                    field.value === "financial"
                                      ? "white"
                                      : "#C5C5C5"
                                  }
                                />
                                Financial
                              </button>
                              <button
                                onClick={() => {
                                  field.onChange("patient");
                                  setFinancial(false);
                                  setPatient(true);
                                }}
                                type="button"
                                style={{
                                  borderRadius: "8px",
                                  border: "1px solid #C5C5C5",
                                  padding: "5px",
                                  backgroundColor:
                                    field.value === "patient"
                                      ? "#2E5D7D"
                                      : "white",
                                  color:
                                    field.value === "patient"
                                      ? "white"
                                      : "#C5C5C5",
                                }}
                                className={"d-flex gap-2 align-items-center"}
                              >
                                <PatientIcon
                                  color={
                                    field.value === "patient"
                                      ? "white"
                                      : "#C5C5C5"
                                  }
                                />
                                Patient
                              </button>
                            </div>
                          )}
                        />
                      </div>

                      <div className="d-flex flex-column gap-3">
                        <label>What is include in the Report?</label>

                        {financial && (
                          <motion.div
                            className="d-flex flex-column"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Stack className="d-flex flex-column align-items-start gap-3">
                              {financialOptions.map((option, index) => (
                                <Radio
                                  key={index}
                                  icon={CheckIcon}
                                  color="#2E5D7D"
                                  label={option.label}
                                  name="financial"
                                  value={option.value}
                                  defaultChecked={index === 0}
                                  {...register("report_include")}
                                />
                              ))}
                            </Stack>
                          </motion.div>
                        )}

                        {patient && (
                          <motion.div
                            key="step1"
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Stack className="d-flex flex-column align-items-start gap-3">
                              {patientOptions.map((option, index) => (
                                <Radio
                                  key={index}
                                  icon={CheckIcon}
                                  color="#2E5D7D"
                                  label={option.label}
                                  name="patient"
                                  value={option.value}
                                  defaultChecked={index === 0}
                                  {...register("report_include")}
                                />
                              ))}
                            </Stack>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {/* The Next Step  */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* The Patient Steps */}
                  {report_includeValue === "patientDemographic" && (
                    <DemographicForm control={control} errors={errors} />
                  )}
                  {report_includeValue === "diagnosis" && (
                    <DiagnosisForm
                      control={control}
                      errors={errors}
                      watch={watch}
                    />
                  )}
                  {report_includeValue === "treatmentAndProcedure" && (
                    <TreatmentAndProcedureForm
                      control={control}
                      errors={errors}
                      watch={watch}
                    />
                  )}
                  {report_includeValue === "laboratoryTestResults" && (
                    <LtrForm control={control} errors={errors} watch={watch} />
                  )}
                  {report_includeValue === "radiology" && (
                    <RadiologyForm
                      control={control}
                      errors={errors}
                      watch={watch}
                    />
                  )}

                  {report_includeValue === "allergy" && (
                    <AllergyForm
                      control={control}
                      errors={errors}
                      watch={watch}
                    />
                  )}

                  {report_includeValue === "patientVisitSummary" && (
                    <PatientVisitSummaryForm
                      control={control}
                      errors={errors}
                      watch={watch}
                    />
                  )}

                  {/* The Finacial Step  */}

                  {report_includeValue === "revenue" && (
                    <RevenueForm
                      control={control}
                      errors={errors}
                      watch={watch}
                    />
                  )}

                  {report_includeValue === "expense" && (
                    <ExpenseForm
                      control={control}
                      errors={errors}
                      watch={watch}
                    />
                  )}

                  {report_includeValue === "profitAndLossStatement" && (
                    <ProfitAndLossStatementForm
                      control={control}
                      errors={errors}
                      watch={watch}
                    />
                  )}

                  {report_includeValue === "costAnalysis" && (
                    <CostAnalysisForm
                      control={control}
                      errors={errors}
                      watch={watch}
                    />
                  )}

                  {report_includeValue === "utilization" && (
                    <UtilizationForm
                      control={control}
                      errors={errors}
                      watch={watch}
                    />
                  )}
                </motion.div>
              )}
            </>
          </form>
        )}

        {currentStep === 2 && (
          <div>
            <LastStep handleClose={handleClose} />
          </div>
        )}
      </div>
      {currentStep < 2 && (
        <div className="d-flex justify-content-between  ">
          {currentStep > 0 ? (
            <div onClick={() => setCurrentStep(currentStep - 1)}>
              <span role="button" className="text-muted">
                Back
              </span>
            </div>
          ) : (
            <div></div> // Empty div to take up space when "Previous" button is not displayed
          )}
          <StyledButton type="submit" onClick={onSubmit} variant="primary">
            {currentStep === 0 ? (
              <span>Next</span>
            ) : (
              <span className="px-4 ">Generate Report</span>
            )}
          </StyledButton>
        </div>
      )}
    </>
  );
};

export default AddReportForm;
