import { configureStore } from "@reduxjs/toolkit";
import topLeaderReducer from "./topLeaderSlice";
import presentLeaderReducer from "./presentLeaderSlice";

export const store = configureStore({
  reducer: {
    topLeaderReducer,
    presentLeaderReducer
  },
});
