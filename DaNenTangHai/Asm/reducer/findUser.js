import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const FindUser = createAsyncThunk('findUser', async data => {


    const response = await fetch('http://10.0.2.2:3000/user/api/find?_id=' + data);
    if (!response.ok) {
        throw new Error('Failed');
    }
    return await response.json();
});


export const findUserSlice = createSlice({
    name: 'findUser',
    initialState: {
        findUserData: {},
        findUserStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(FindUser.pending, (state, action) => {
                state.findUserStatus = 'loading';
            })
            .addCase(FindUser.fulfilled, (state, action) => {
                state.findUserStatus = 'succeeded';
                state.findUserData = action.payload;
            })
            .addCase(FindUser.rejected, (state, action) => {
                state.findUserStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default findUserSlice.reducer;