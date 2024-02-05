import * as z from "zod";

// Date schema
const DateSchema = z
  .object({
    startDate: z
      .string()
      .refine(
        (value) => new Date(value) >= new Date(),
        "Start date should be now or in the future"
      ),
    endDate: z
      .string()
      .refine(
        (value) => new Date(value) >= new Date(),
        "End date should be now or in the future"
      ),
  })
  .refine((data) => new Date(data.endDate) >= new Date(data.startDate), {
    message: "End date should be after start date",
    path: ["endDate"],
  });

// Time schema
const TimeSchema = z
  .object({
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required"),
  })
  .refine(
    (data) =>
      new Date(`1970-01-01T${data.endTime}`) >=
      new Date(`1970-01-01T${data.startTime}`),
    {
      message: "End time should be after start time",
      path: ["endTime"],
    }
  );

// Step 1
export const Step1Schema = z.object({
  NameOfReport: z.string().min(2),
  ReportType: z.string().min(2, { message: "must choose" }),
  ReportInclude: z.string().min(2, { message: "must choose" }),
});

// Step 2

// Demographics schema
export const DemographicsSchema = z.object({
  Demographics: z.object({
    MaterialStatus: z.string().min(2, { message: "must choose" }),
    Province: z.string().min(2, { message: "must choose" }),
    SelectGender: z.string().min(2, { message: "must choose" }),
    HaveChildren: z.string().min(2, { message: "must choose" }),
  }),
});

// Diagnosis schema
export const DiagnosisSchema = z.object({
  Diagnosis: z
    .object({
      Date: DateSchema,
      Time: z.object({
        startTime: z.string().default(() => "00:00"),
        endTime: z.string().default(() => "00:00"),
      }),
      AllTime: z.boolean(),
    })
    .refine((data) => {
      if (data.AllTime) {
        data.Time.startTime = "";
        data.Time.endTime = "";
        return true;
      } else if (!data.AllTime) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["Diagnosis", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

// Treatment and Procedure schema
export const TreatmentAndProcedureSchema = z.object({
  TAP: z
    .object({
      RadioButton: z.string().min(2, { message: "must choose" }),
      Date: DateSchema,
      Time: z.object({
        startTime: z.string().default(() => "00:00"),
        endTime: z.string().default(() => "00:00"),
      }),
      AllTime: z.boolean(),
    })
    .refine((data) => {
      if (data.AllTime) {
        data.Time.startTime = "";
        data.Time.endTime = "";
        return true;
      } else if (!data.AllTime) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["TAP", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const LaboratoryTestResultsSchema = z.object({
  LTR: z
    .object({
      Date: DateSchema,
      Time: z.object({
        startTime: z.string().default(() => "00:00"),
        endTime: z.string().default(() => "00:00"),
      }),
      AllTime: z.boolean(),
    })
    .refine((data) => {
      if (data.AllTime) {
        data.Time.startTime = "";
        data.Time.endTime = "";
        return true;
      } else if (!data.AllTime) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["LTR", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const AllergySchema = z.object({
  Allergy: z
    .object({
      Select: z.string().min(2, { message: "must choose" }),
      Date: DateSchema,
      Time: z.object({
        startTime: z.string().default(() => "00:00"),
        endTime: z.string().default(() => "00:00"),
      }),
      AllTime: z.boolean(),
    })
    .refine((data) => {
      if (data.AllTime) {
        data.Time.startTime = "";
        data.Time.endTime = "";
        return true;
      } else if (!data.AllTime) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["Allergy", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const RadiologySchema = z.object({
  Radiology: z
    .object({
      Date: DateSchema,
      Time: z.object({
        startTime: z.string().default(() => "00:00"),
        endTime: z.string().default(() => "00:00"),
      }),
      AllTime: z.boolean(),
    })
    .refine((data) => {
      if (data.AllTime) {
        data.Time.startTime = "";
        data.Time.endTime = "";
        return true;
      } else if (!data.AllTime) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["Radiology", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const PatientVisitSummarySchema = z.object({
  PVS: z
    .object({
      Date: DateSchema,
      Time: z.object({
        startTime: z.string().default(() => "00:00"),
        endTime: z.string().default(() => "00:00"),
      }),
      AllTime: z.boolean(),
    })
    .refine((data) => {
      if (data.AllTime) {
        data.Time.startTime = "";
        data.Time.endTime = "";
        return true;
      } else if (!data.AllTime) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["PVS", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

//Finacial Step

export const RevenueSchema = z.object({
  Revenue: z
    .object({
      Patient: z.string().min(2, { message: "must choose" }),
      Province: z.string().min(2, { message: "must choose" }),
      SelectGender: z.string().min(2, { message: "must choose" }),
      Date: DateSchema,
      Time: z.object({
        startTime: z.string().default(() => "00:00"),
        endTime: z.string().default(() => "00:00"),
      }),
      AllTime: z.boolean(),
    })
    .refine((data) => {
      if (data.AllTime) {
        data.Time.startTime = "";
        data.Time.endTime = "";
        return true;
      } else if (!data.AllTime) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["Revenue", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const ExpenseSchema = z.object({
  Expense: z
    .object({
      Select: z.string().min(2, { message: "must choose" }),
      Date: DateSchema,
      Time: z.object({
        startTime: z.string().default(() => "00:00"),
        endTime: z.string().default(() => "00:00"),
      }),
      AllTime: z.boolean(),
    })
    .refine((data) => {
      if (data.AllTime) {
        data.Time.startTime = "";
        data.Time.endTime = "";
        return true;
      } else if (!data.AllTime) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["Expense", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const ProfitAndLossStatementSchema = z.object({
  PALS: z
    .object({
      Date: DateSchema,
      Time: z.object({
        startTime: z.string().default(() => "00:00"),
        endTime: z.string().default(() => "00:00"),
      }),
      AllTime: z.boolean(),
    })
    .refine((data) => {
      if (data.AllTime) {
        data.Time.startTime = "";
        data.Time.endTime = "";
        return true;
      } else if (!data.AllTime) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["PALS", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const CostAnalysisSchema = z.object({
  CostAnalysis: z
    .object({
      Persons: z.string().min(2, { message: "must choose" }),
      Items: z.string().min(2, { message: "must choose" }),
      Date: DateSchema,
      Time: z.object({
        startTime: z.string().default(() => "00:00"),
        endTime: z.string().default(() => "00:00"),
      }),
      AllTime: z.boolean(),
    })
    .refine((data) => {
      if (data.AllTime) {
        data.Time.startTime = "";
        data.Time.endTime = "";
        return true;
      } else if (!data.AllTime) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["CostAnalysis", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const UtilizationSchema = z.object({
  Utilization: z
    .object({
      Items: z.string().min(2, { message: "must choose" }),
      Date: DateSchema,
      Time: z.object({
        startTime: z.string().default(() => "00:00"),
        endTime: z.string().default(() => "00:00"),
      }),
      AllTime: z.boolean(),
    })
    .refine((data) => {
      if (data.AllTime) {
        data.Time.startTime = "";
        data.Time.endTime = "";
        return true;
      } else if (!data.AllTime) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["Utilization", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});
