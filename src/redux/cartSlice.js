import { baseUrl } from "@/utils/featchApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
  cartItems: [],
  cartinfo: {},
};
export const executeCartItems = createAsyncThunk(
  "api/execute Cart Items",
  async ({ lang, token } = {}, { rejectWithValue }) => {
    try {
      const res = await fetch(`${baseUrl}${"/website/getCart"}`, {
        next: { revalidate: 10 },
        headers: {
          lang: lang || "ar",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const cartSlice = createSlice({
  name: "api/execute cart items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(executeCartItems.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(executeCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.cartItems = action.payload?.data?.add_to_carts;
        state.cartinfo = action.payload?.data;
      })
      .addCase(executeCartItems.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});
export default cartSlice.reducer;
