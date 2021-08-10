import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
    status: 'idle',
  };

  export const messageSlice = createSlice({
    name: 'messageSlice',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      newMessage: (state, data) => {
        state.value = [...state.value, data.payload]
      },
      deleteMessage: (state, data) => {
        console.log(data);
        data.payload.forEach(element => {
          state.value = state.value.filter((val) => val.id != element)
        });
      },
      updateMEssage: (state, data) => {
          console.log(state.value);
          console.log(data)

      }
    },
  });

  export const { newMessage, deleteMessage } = messageSlice.actions;
  export const selectMessages = (state) => state.mailMessages.value;
  export default messageSlice.reducer;