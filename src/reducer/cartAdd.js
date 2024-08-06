import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const AddCart = createAsyncThunk('addCart', async data => {
  
    
    const response = await fetch('http://10.0.2.2:3000/cart/api/add?userId='+data.userId+'&productId='+data.id+'&qty='+data.qty);
    if (!response.ok) {
        throw new Error('Failed');
    }
    return await response.json();
});


export const addCartSlice = createSlice({
    name: 'addCart',
    initialState: {
       addcartData: {},
       addcartStatus  : 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(AddCart.pending, (state, action) => {
                state.addcartStatus = 'loading';
            })
            .addCase(AddCart.fulfilled, (state, action) => {
                state.addcartStatus = 'succeeded';
                state.addcartData = action.payload;
            })
            .addCase(AddCart.rejected, (state, action) => {
                state.addcartStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default addCartSlice.reducer;