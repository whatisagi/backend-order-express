import * as yup from "yup";

export const dateQuerySchema = yup.object({
  date: yup
    .string()
    .required("Date is a required query parameter")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in the format YYYY-MM-DD"),
});
