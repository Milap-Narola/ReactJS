import { createAsyncThunk, createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
  },
  reducers: {}
  ,
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.products = payload;
      });
  },

});
const Store = configureStore({
  reducer: {
    product: productSlice.reducer,
  }
})
export default Store;



export const productReducer = productSlice.reducer