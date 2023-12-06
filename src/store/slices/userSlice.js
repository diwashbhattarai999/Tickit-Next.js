import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  address: "",
  country: "",
  state: "",
  city: "",
  zipCode: "",
  normalPrice: 0,
  total: 0,
  discountAmount: 0,
  tax: 13,
  tickets: 0,
  title: "",
  imgUrl: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
