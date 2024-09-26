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
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
