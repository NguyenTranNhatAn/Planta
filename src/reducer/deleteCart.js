import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const DeleteCart = createAsyncThunk('deleteCart', async data => {
  
    
    const response = await fetch('http://10.0.2.2:3000/cart/api/delete?_id='+data);
    if (!response.ok) {
        throw new Error('Failed');
    }
    return await response.json();
});


export const deleteCartSlice = createSlice({
    name: 'deleteCart',
    initialState: {
        deleteCartData: {},
        deleteCartStatus  : 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(DeleteCart.pending, (state, action) => {
                state.deleteCartStatus = 'loading';
            })
            .addCase(DeleteCart.fulfilled, (state, action) => {
                state.deleteCartStatus = 'succeeded';
                state.deleteCartData = action.payload;
            })
            .addCase(DeleteCart.rejected, (state, action) => {
                state.deleteCartStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default deleteCartSlice.reducer;