import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const AddBill = createAsyncThunk('addBill', async data => {
   console.log(data)
    const response = await fetch('http://10.0.2.2:3000/bill/api/add',
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


export const addBillSlice = createSlice({
    name: 'addBill',
    initialState: {
       addbillData: {},
       addbillStatus  : 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(AddBill.pending, (state, action) => {
                state.addbillStatus = 'loading';
            })
            .addCase(AddBill.fulfilled, (state, action) => {
                state.addbillStatus = 'succeeded';
                state.addbillData = action.payload;
            })
            .addCase(AddBill.rejected, (state, action) => {
                state.addbillStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default addBillSlice.reducer;