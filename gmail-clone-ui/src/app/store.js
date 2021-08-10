import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import mailMessageReducer from '../slices/messageSlices/MessageSlices';
import chkMessagesSlices from '../slices/chkMessages/chkMessageSlices';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mailMessages: mailMessageReducer,
    checkMessage: chkMessagesSlices 
  },
});
