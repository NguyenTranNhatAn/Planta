import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const LaySanPham = createAsyncThunk('listProduct', async data => {
  const response = await fetch('http://10.0.2.2:3000/product/api/getAll');
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});


export const productSlice = createSlice({
  name: 'listProduct',
  initialState: {
    productData: [],
    productStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(LaySanPham.pending, (state, action) => {
        state.productStatus = 'loading';
      })
      .addCase(LaySanPham.fulfilled, (state, action) => {
        state.productStatus = 'succeeded';
        state.productData = action.payload;
      })
      .addCase(LaySanPham.rejected, (state, action) => {
        state.productStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default productSlice.reducer;
