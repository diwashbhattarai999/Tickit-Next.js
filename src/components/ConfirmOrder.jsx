"use client";

import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/slices/userSlice";

const ConfirmOrder = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUser({ [name]: value }));
  };

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
        // errors={errors}
        // touched={touched}
      />
      <Input
        label="Email"
        type="text"
        name="email"
        placeholder="e.g. janecopper@xyz.com"
        onChange={handleChange}
        required
        // errors={errors}
        // touched={touched}
      />
      <Input
        label="Address"
        type="text"
        name="address"
        placeholder="Enter your address"
        onChange={handleChange}
        required
        // errors={errors}
        // touched={touched}
      />
      <Input
        label="Country"
        type="text"
        name="country"
        placeholder="Enter your country"
        onChange={handleChange}
        required
        // errors={errors}
        // touched={touched}
      />
      <Input
        label="State"
        type="text"
        name="state"
        placeholder="Enter your state"
        onChange={handleChange}
        // errors={errors}
        // touched={touched}
      />
      <Input
        label="City"
        type="text"
        name="city"
        placeholder="Enter your city"
        onChange={handleChange}

        // errors={errors}
        // touched={touched}
      />
      <Input
        label="Zip/Postal Code"
        type="text"
        name="zipCode"
        placeholder="Enter Zip/Postal Code"
        onChange={handleChange}
        required
        // errors={errors}
        // touched={touched}
      />
    </div>
  );
};

export default ConfirmOrder;
