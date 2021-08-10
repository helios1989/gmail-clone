import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
    status: 'idle',
  };

  export const chkMessagesSlices = createSlice({
    name: 'chkMessagesSlices',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      checkMessages: (state, data) => {
        state.value = [...state.value, data.payload]
      },
      uncheckMessages: (state, data) => {
        state.value = state.value.filter((val) => val != data.payload) 
      }
    },
  });

  export const { checkMessages, uncheckMessages } = chkMessagesSlices.actions;
  export const selectCheckMessages = (state) => state.checkMessage.value;
  export default chkMessagesSlices.reducer;