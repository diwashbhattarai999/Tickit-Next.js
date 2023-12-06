import * as Yup from "yup";

export const formValidation = Yup.object({
  name: Yup.string()
    .required("Enter your fullname.")
    .min(2, "First name must be between 2 and 16 characters.")
    .max(16, "First name must be between 2 and 16 characters.")
    .matches(/^[aA-aZ]/, "Numbers and special characters are not allowed."),

  email: Yup.string()
    .required("Please Enter your email address!!")
    .email("Please enter a valid address."),

  country: Yup.string().required("Please enter your country!!"),
  state: Yup.string(),
  city: Yup.string(),
  zipCode: Yup.string().required("Please enter your zip code!!"),
});
