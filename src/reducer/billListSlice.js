import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const ListBill = createAsyncThunk('billList', async data => {


    const response = await fetch('http://10.0.2.2:3000/bill/api/getBill?userId=' + data);
    if (!response.ok) {
        throw new Error('Failed');
    }
    return await response.json();
});


export const listBillSlice = createSlice({
    name: 'billList',
    initialState: {
        listBillData: {},
        listBillStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(ListBill.pending, (state, action) => {
                state.listBillStatus = 'loading';
            })
            .addCase(ListBill.fulfilled, (state, action) => {
                state.listBillStatus = 'succeeded';
                state.listBillData = action.payload;
            })
            .addCase(ListBill.rejected, (state, action) => {
                state.listBillStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default listBillSlice.reducer;