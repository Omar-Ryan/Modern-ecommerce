import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CategoryProps } from "../../../types/shared";

type TResponse = CategoryProps[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(`/category`);
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

export default actGetCategories;
