"use client";

import { Form, Formik } from "formik";
import CheckoutSummary from "./CheckoutSummary";
import ConfirmOrder from "./ConfirmOrder";
import { useSelector } from "react-redux";
import { formValidation } from "../schema";
import { setUser } from "@/store/slices/userSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "../Loader";
import Button from "../Button";

const Checkout = ({ title, totalPrice, tickets, imgPath }) => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const router = useRouter();

  const handleSubmit = async () => {
    console.log("click");
    try {
      setLoading(true);
      router.push(`/pdfView`);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      dispatch(
        setUser({
          ...user,
          error: error.response?.data?.message,
        })
      );
    }
  };

  if (loading) {
    <Loader loading={loading} />;
  }

  return (
    <Formik
      enableReinitialize
      initialValues={user}
      onSubmit={handleSubmit}
      validationSchema={formValidation}
    >
      {({ errors, touched, handleBlur }) => (
        <Form className="flex flex-col lg:flex-row justify-between gap-4 py-4">
          <div className="py-3 px-8 bg-bg-secondary rounded-md lg:w-2/3">
            <ConfirmOrder errors={errors} touched={touched} />
          </div>
          <div className="py-3 px-8 bg-bg-secondary rounded-md lg:w-1/3">
            <CheckoutSummary
              title={title}
              totalPrice={totalPrice}
              tickets={tickets}
              imgPath={imgPath}
            />
            {/* Confirm Button */}
            <Button buttonText="Confirm & Pay" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Checkout;
