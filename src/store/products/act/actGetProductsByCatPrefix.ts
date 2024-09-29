import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductProps } from "../../../types/shared";

type TResponse = ProductProps[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `/products?cat_prefix=${prefix}`
      );
      //   return response.data as MyData;
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("an unexpected error");
      }
    }
  }
);

export default actGetProductsByCatPrefix;
