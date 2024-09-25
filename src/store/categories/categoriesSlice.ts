import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { CategoryProps, TLoading } from "../../types/shared";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../../app/store'

interface CategoriesStateProps {
  records: CategoryProps[];
  loading: TLoading;
  error: string | null;
}

const initialState: CategoriesStateProps = {
  records: [],
  loading: "idle",
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

// export const { increment, decrement, incrementByAmount } = categoriesSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default categoriesSlice.reducer;
