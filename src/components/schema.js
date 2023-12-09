import * as Yup from "yup";

export const formValidation = Yup.object({
  fullName: Yup.string()
    .required("Please enter your fullname.")
    .min(2, "Full name must be between 2 and 32 characters.")
    .max(32, "Full name must be between 2 and 32 characters.")
    .matches(/^[a-z ,.'-]+$/i, "Only letters and spaces are allowed.")
    .trim(),

  email: Yup.string()
    .required("Please enter your email address.")
    .email("Please enter a valid email address."),

  address: Yup.string().required("Please enter your address"),
  country: Yup.string().required("Please enter your country."),
  state: Yup.string(),
  city: Yup.string(),
  zipCode: Yup.string().required("Please enter your zip code."),
});
