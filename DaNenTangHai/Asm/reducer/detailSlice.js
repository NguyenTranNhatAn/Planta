import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const GetDetail = createAsyncThunk('detail', async data => {
  const response = await fetch('http://10.0.2.2:3000/product/api/getDetail?_id='+data);
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});


export const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detailData: {},
    detailStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetDetail.pending, (state, action) => {
        state.detailStatus = 'loading';
      })
      .addCase(GetDetail.fulfilled, (state, action) => {
        state.detailStatus = 'succeeded';
        state.detailData = action.payload;
      })
      .addCase(GetDetail.rejected, (state, action) => {
        state.detailStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default detailSlice.reducer;
