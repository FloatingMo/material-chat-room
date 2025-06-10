import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  currentConverstaionId: null,
  isLoading: false,
  error: null,
};
const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
});

export const {
  // Define actions here if needed
  // For example, you might want to add actions for adding messages, setting loading state, etc.
  // addMessage,
  // setLoading,
  // setError,
} = messageSlice.actions;
