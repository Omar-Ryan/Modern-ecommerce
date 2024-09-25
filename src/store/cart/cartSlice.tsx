import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../../types/shared";

interface CartStateProps {
  items: { [key: number]: number };
  productFullInfo: ProductProps[];
}

const initialState: CartStateProps = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
export default cartSlice.reducer;
