"use client";

import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/slices/userSlice";

const ConfirmOrder = ({ errors, touched }) => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUser({ [name]: value }));
  };

  console.log("Validation Errors:", errors);
  console.log("Touched Fields:", touched);

  return (
    <div className="text-text-primary">
      <h2 className="text-xl my-4">Information</h2>

      <Input
        label="Full Name"
        placeholder="e.g. Jane Copper"
        type="text"
        name="fullName"
        onChange={handleChange}
        required
        errors={errors.fullName}
        touched={touched.fullName}
      />
      <Input
        label="Email"
        type="text"
        name="email"
        placeholder="e.g. janecopper@xyz.com"
        onChange={handleChange}
        required
        errors={errors.email}
        touched={touched.email}
      />
      <Input
        label="Address"
        type="text"
        name="address"
        placeholder="Enter your address"
        onChange={handleChange}
        required
        errors={errors.address}
        touched={touched.address}
      />
      <Input
        label="Country"
        type="text"
        name="country"
        placeholder="Enter your country"
        onChange={handleChange}
        required
        errors={errors.country}
        touched={touched.country}
      />
      <Input
        label="State"
        type="text"
        name="state"
        placeholder="Enter your state"
        onChange={handleChange}
        errors={errors.state}
        touched={touched.state}
      />
      <Input
        label="City"
        type="text"
        name="city"
        placeholder="Enter your city"
        onChange={handleChange}
        errors={errors.city}
        touched={touched.city}
      />
      <Input
        label="Zip/Postal Code"
        type="text"
        name="zipCode"
        placeholder="Enter Zip/Postal Code"
        onChange={handleChange}
        required
        errors={errors.zipCode}
        touched={touched.zipCode}
      />
    </div>
  );
};

export default ConfirmOrder;
