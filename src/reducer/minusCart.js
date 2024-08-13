import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const MinusCart = createAsyncThunk('minusCart', async data => {
  
    
    const response = await fetch('http://10.0.2.2:3000/cart/api/minus?userId='+data.userId+'&productId='+data.id+'&_id='+data._id);
    if (!response.ok) {
        throw new Error('Failed');
    }
    return await response.json();
});


export const minusSlice = createSlice({
    name: 'minusCart',
    initialState: {
        minuscartData: {},
        minuscartStatus  : 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(MinusCart.pending, (state, action) => {
                state.minuscartStatus = 'loading';
            })
            .addCase(MinusCart.fulfilled, (state, action) => {
                state.minuscartStatus = 'succeeded';
                state.minuscartData = action.payload;
            })
            .addCase(MinusCart.rejected, (state, action) => {
                state.minuscartStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default minusSlice.reducer;