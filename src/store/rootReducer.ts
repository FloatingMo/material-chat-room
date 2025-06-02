import { combineReducers } from "@reduxjs/toolkit";
import

const rootReducer = combineReducers({
  chat: chatSlice,
  auth: authSlice,
  message: messageSlice,
  user: userSlice,
});

export default rootReducer;
