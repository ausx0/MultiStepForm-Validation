import * as z from "zod";

// Date schema
const DateSchema = z
  .object({
    start_date: z
      .string()
      .refine(
        (value) => new Date(value) >= new Date(),
        "Start date should be now or in the future"
      ),
    end_date: z
      .string()
      .refine(
        (value) => new Date(value) >= new Date(),
        "End date should be now or in the future"
      ),
  })
  .refine((data) => new Date(data.end_date) >= new Date(data.start_date), {
    message: "End date should be after start date",
    path: ["end_date"],
  });

// Time schema
const TimeSchema = z
  .object({
    start_time: z.string().min(1, "Start time is required"),
    end_time: z.string().min(1, "End time is required"),
  })
  .refine(
    (data) =>
      new Date(`1970-01-01T${data.end_time}`) >=
      new Date(`1970-01-01T${data.start_time}`),
    {
      message: "End time should be after start time",
      path: ["end_time"],
    }
  );

// Step 1
export const Step1Schema = z.object({
  report_name: z.string().min(2),
  report_type: z.string().min(2, { message: "must choose" }),
  report_include: z.string().min(2, { message: "must choose" }),
});

// Step 2

// demographics schema
export const demographicsSchema = z.object({
  demographics: z.object({
    material_status: z.string().min(2, { message: "must choose" }),
    province: z.string().min(2, { message: "must choose" }),
    select_gender: z.string().min(2, { message: "must choose" }),
    have_children: z.string().min(2, { message: "must choose" }),
  }),
});

// diagnosis schema
export const diagnosisSchema = z.object({
  diagnosis: z
    .object({
      Date: DateSchema,
      Time: z.object({
        start_time: z.string().default(() => "00:00"),
        end_time: z.string().default(() => "00:00"),
      }),
      all_time: z.boolean(),
    })
    .refine((data) => {
      if (data.all_time) {
        data.Time.start_time = "";
        data.Time.end_time = "";
        return true;
      } else if (!data.all_time) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["diagnosis", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

// Treatment and Procedure schema
export const TreatmentAndProcedureSchema = z.object({
  tab: z
    .object({
      radio_button: z.string().min(2, { message: "must choose" }),
      Date: DateSchema,
      Time: z.object({
        start_time: z.string().default(() => "00:00"),
        end_time: z.string().default(() => "00:00"),
      }),
      all_time: z.boolean(),
    })
    .refine((data) => {
      if (data.all_time) {
        data.Time.start_time = "";
        data.Time.end_time = "";
        return true;
      } else if (!data.all_time) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["tab", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const LaboratoryTestResultsSchema = z.object({
  ltr: z
    .object({
      Date: DateSchema,
      Time: z.object({
        start_time: z.string().default(() => "00:00"),
        end_time: z.string().default(() => "00:00"),
      }),
      all_time: z.boolean(),
    })
    .refine((data) => {
      if (data.all_time) {
        data.Time.start_time = "";
        data.Time.end_time = "";
        return true;
      } else if (!data.all_time) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["ltr", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const allergySchema = z.object({
  allergy: z
    .object({
      Select: z.string().min(2, { message: "must choose" }),
      Date: DateSchema,
      Time: z.object({
        start_time: z.string().default(() => "00:00"),
        end_time: z.string().default(() => "00:00"),
      }),
      all_time: z.boolean(),
    })
    .refine((data) => {
      if (data.all_time) {
        data.Time.start_time = "";
        data.Time.end_time = "";
        return true;
      } else if (!data.all_time) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["allergy", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const radiologySchema = z.object({
  radiology: z
    .object({
      Date: DateSchema,
      Time: z.object({
        start_time: z.string().default(() => "00:00"),
        end_time: z.string().default(() => "00:00"),
      }),
      all_time: z.boolean(),
    })
    .refine((data) => {
      if (data.all_time) {
        data.Time.start_time = "";
        data.Time.end_time = "";
        return true;
      } else if (!data.all_time) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["radiology", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const PatientVisitSummarySchema = z.object({
  pvs: z
    .object({
      Date: DateSchema,
      Time: z.object({
        start_time: z.string().default(() => "00:00"),
        end_time: z.string().default(() => "00:00"),
      }),
      all_time: z.boolean(),
    })
    .refine((data) => {
      if (data.all_time) {
        data.Time.start_time = "";
        data.Time.end_time = "";
        return true;
      } else if (!data.all_time) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["pvs", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

//Finacial Step

export const revenueSchema = z.object({
  revenue: z
    .object({
      patient: z.string().min(2, { message: "must choose" }),
      province: z.string().min(2, { message: "must choose" }),
      select_gender: z.string().min(2, { message: "must choose" }),
      Date: DateSchema,
      Time: z.object({
        start_time: z.string().default(() => "00:00"),
        end_time: z.string().default(() => "00:00"),
      }),
      all_time: z.boolean(),
    })
    .refine((data) => {
      if (data.all_time) {
        data.Time.start_time = "";
        data.Time.end_time = "";
        return true;
      } else if (!data.all_time) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["revenue", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const expenseSchema = z.object({
  expense: z
    .object({
      Select: z.string().min(2, { message: "must choose" }),
      Date: DateSchema,
      Time: z.object({
        start_time: z.string().default(() => "00:00"),
        end_time: z.string().default(() => "00:00"),
      }),
      all_time: z.boolean(),
    })
    .refine((data) => {
      if (data.all_time) {
        data.Time.start_time = "";
        data.Time.end_time = "";
        return true;
      } else if (!data.all_time) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["expense", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const ProfitAndLossStatementSchema = z.object({
  pals: z
    .object({
      Date: DateSchema,
      Time: z.object({
        start_time: z.string().default(() => "00:00"),
        end_time: z.string().default(() => "00:00"),
      }),
      all_time: z.boolean(),
    })
    .refine((data) => {
      if (data.all_time) {
        data.Time.start_time = "";
        data.Time.end_time = "";
        return true;
      } else if (!data.all_time) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["pals", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const cost_analysisSchema = z.object({
  cost_analysis: z
    .object({
      persons: z.string().min(2, { message: "must choose" }),
      items: z.string().min(2, { message: "must choose" }),
      Date: DateSchema,
      Time: z.object({
        start_time: z.string().default(() => "00:00"),
        end_time: z.string().default(() => "00:00"),
      }),
      all_time: z.boolean(),
    })
    .refine((data) => {
      if (data.all_time) {
        data.Time.start_time = "";
        data.Time.end_time = "";
        return true;
      } else if (!data.all_time) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["cost_analysis", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});

export const utilizationSchema = z.object({
  utilization: z
    .object({
      items: z.string().min(2, { message: "must choose" }),
      Date: DateSchema,
      Time: z.object({
        start_time: z.string().default(() => "00:00"),
        end_time: z.string().default(() => "00:00"),
      }),
      all_time: z.boolean(),
    })
    .refine((data) => {
      if (data.all_time) {
        data.Time.start_time = "";
        data.Time.end_time = "";
        return true;
      } else if (!data.all_time) {
        const timeValidation = TimeSchema.safeParse(data.Time);
        if (!timeValidation.success) {
          throw new z.ZodError(
            timeValidation.error.errors.map((err) => ({
              message: err.message,
              path: ["utilization", "Time", ...err.path],
            }))
          );
        }
      }
      return true;
    }),
});
