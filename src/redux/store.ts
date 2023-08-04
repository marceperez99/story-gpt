import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "./features/storiesSlice";
import storyReducer from "./features/selectedStorySlice";
export const store = configureStore({
  reducer: {
    storiesReducer,
    storyReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
