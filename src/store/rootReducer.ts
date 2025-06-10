import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  chat: chatSlice.reducer,
  user: userSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
