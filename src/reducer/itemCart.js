import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const GetCartDetail = createAsyncThunk('detailCart', async data => {
  
    
    const response = await fetch('http://10.0.2.2:3000/cart/api/getDetail?userId='+data.userId+'&productId='+data.id);
    if (!response.ok) {
        throw new Error('Failed');
    }
    return await response.json();
});


export const cartDetailSlice = createSlice({
    name: 'detailCart',
    initialState: {
        detailcartData: {},
        detailcartStatus  : 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(GetCartDetail.pending, (state, action) => {
                state.detailcartStatus = 'loading';
            })
            .addCase(GetCartDetail.fulfilled, (state, action) => {
                state.detailcartStatus = 'succeeded';
                state.detailcartData = action.payload;
            })
            .addCase(GetCartDetail.rejected, (state, action) => {
                state.detailcartStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default cartDetailSlice.reducer;