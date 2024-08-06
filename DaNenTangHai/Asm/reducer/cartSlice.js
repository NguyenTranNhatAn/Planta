import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const GetCart = createAsyncThunk('listcart', async data => {
    const response = await fetch('http://10.0.2.2:3000/cart/api/getCart?userId=' + data);
    if (!response.ok) {
        throw new Error('Failed');
    }
    return await response.json();
});


export const cartSlice = createSlice({
    name: 'listcart',
    initialState: {
        cartData: [],
        cartStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(GetCart.pending, (state, action) => {
                state.cartStatus = 'loading';
            })
            .addCase(GetCart.fulfilled, (state, action) => {
                state.cartStatus = 'succeeded';
                state.cartData = action.payload;
            })
            .addCase(GetCart.rejected, (state, action) => {
                state.cartStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default cartSlice.reducer;