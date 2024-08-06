import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const GetDetailCategory = createAsyncThunk('category', async data => {
  const response = await fetch('http://10.0.2.2:3000/category/api/getDetail?_id='+data);
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});


export const categorySlice = createSlice({
  name: 'detail',
  initialState: {
    categoryData: {},
    categoryStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetDetailCategory.pending, (state, action) => {
        state.categoryStatus = 'loading';
      })
      .addCase(GetDetailCategory.fulfilled, (state, action) => {
        state.categoryStatus = 'succeeded';
        state.categoryData = action.payload;
      })
      .addCase(GetDetailCategory.rejected, (state, action) => {
        state.categoryStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default categorySlice.reducer;
