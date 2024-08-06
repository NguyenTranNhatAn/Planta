import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const GetByName = createAsyncThunk('GetName', async data => {
  const response = await fetch('http://10.0.2.2:3000/product/api/getName?name='+data);
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});


export const getNameSlice = createSlice({
  name: 'GetName',
  initialState: {
    getNameData:[],
    getNameStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetByName.pending, (state, action) => {
        state.getNameStatus = 'loading';
      })
      .addCase(GetByName.fulfilled, (state, action) => {
        state.getNameStatus = 'succeeded';
        state.getNameData = action.payload;
      })
      .addCase(GetByName.rejected, (state, action) => {
        state.getNameStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default getNameSlice.reducer;
