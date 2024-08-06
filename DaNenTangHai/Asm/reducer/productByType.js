import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const GetProByTypeCategory = createAsyncThunk('proByTy', async data => {
  const response = await fetch('http://10.0.2.2:3000/product/api/getType?cat_id='+data);
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});


export const proByTypeSlice = createSlice({
  name: 'getTypePro',
  initialState: {
    typeProData:[],
    typeProStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetProByTypeCategory.pending, (state, action) => {
        state.typeProStatus = 'loading';
      })
      .addCase(GetProByTypeCategory.fulfilled, (state, action) => {
        state.typeProStatus = 'succeeded';
        state.typeProData = action.payload;
      })
      .addCase(GetProByTypeCategory.rejected, (state, action) => {
        state.typeProStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default proByTypeSlice.reducer;
