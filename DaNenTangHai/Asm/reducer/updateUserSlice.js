import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const UpdateUser = createAsyncThunk('updateUser', async data => {
  
    
    const response = await fetch('http://10.0.2.2:3000/user/api/update',
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


export const updateUserSlice = createSlice({
    name: 'updateUser',
    initialState: {
        updateUserData: {},
        updateUserStatus  : 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(UpdateUser.pending, (state, action) => {
                state.updateUserStatus = 'loading';
            })
            .addCase(UpdateUser.fulfilled, (state, action) => {
                state.updateUserStatus = 'succeeded';
                state.updateUserData = action.payload;
            })
            .addCase(UpdateUser.rejected, (state, action) => {
                state.updateUserStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default updateUserSlice.reducer;