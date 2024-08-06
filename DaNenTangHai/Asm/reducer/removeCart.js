import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const DeleteCartAll = createAsyncThunk('deleteAll', async data => {
  
    
    const response = await fetch('http://10.0.2.2:3000/cart/api/deleteAll?userId='+data);
    if (!response.ok) {
        throw new Error('Failed');
    }
    return await response.json();
});


export const deleteAllCartSlice = createSlice({
    name: 'deleteAll',
    initialState: {
        deleteAllData: {},
        deleteAllStatus  : 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(DeleteCartAll.pending, (state, action) => {
                state.deleteAllStatus = 'loading';
            })
            .addCase(DeleteCartAll.fulfilled, (state, action) => {
                state.deleteAllStatus = 'succeeded';
                state.deleteAllData = action.payload;
            })
            .addCase(DeleteCartAll.rejected, (state, action) => {
                state.deleteAllStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default deleteAllCartSlice.reducer;