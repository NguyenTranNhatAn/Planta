import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const GetAllCategory = createAsyncThunk('getAllCate', async data => {
  const response = await fetch('http://10.0.2.2:3000/category/api/getAll');
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});


export const categoryGetAllSlice = createSlice({
  name: 'getAllCate',
  initialState: {
    cateAllData:[],
    cateAllStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetAllCategory.pending, (state, action) => {
        state.cateAllStatus = 'loading';
      })
      .addCase(GetAllCategory.fulfilled, (state, action) => {
        state.cateAllStatus = 'succeeded';
        state.cateAllData = action.payload;
      })
      .addCase(GetAllCategory.rejected, (state, action) => {
        state.cateAllStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default categoryGetAllSlice.reducer;
