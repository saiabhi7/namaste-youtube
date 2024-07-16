import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../constants/constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChatMessages: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addChatMessages } = chatSlice.actions;

export default chatSlice.reducer;
