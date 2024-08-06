import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const DangNhapTaiKhoan = createAsyncThunk('login', async data => {
  const response = await fetch(
    'http://10.0.2.2:3000/user/api/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  
  );
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});


export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loginData: {},
    loginStatus: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(DangNhapTaiKhoan.pending, (state, action) => {
        state.loginStatus = 'loading';
      })
      .addCase(DangNhapTaiKhoan.fulfilled, (state, action) => {
        state.loginStatus = 'succeeded';
        state.loginData = action.payload;
      })
      .addCase(DangNhapTaiKhoan.rejected, (state, action) => {
        state.loginStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default loginSlice.reducer;
