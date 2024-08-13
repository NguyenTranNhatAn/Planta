import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const GetParent = createAsyncThunk('parent', async data => {
  const response = await fetch('http://10.0.2.2:3000/category/api/getDetail?_id='+data);
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});


export const parentSlice = createSlice({
  name: 'detail',
  initialState: {
    parentData: {},
    parentStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetParent.pending, (state, action) => {
        state.parentStatus = 'loading';
      })
      .addCase(GetParent.fulfilled, (state, action) => {
        state.parentStatus = 'succeeded';
        state.parentData = action.payload;
      })
      .addCase(GetParent.rejected, (state, action) => {
        state.parentStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default parentSlice.reducer;
