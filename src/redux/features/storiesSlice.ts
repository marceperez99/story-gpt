import { Story } from "@/types/story.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Story[] = [];

export const storiesSlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    reset: () => initialState,
    add: (state, action: PayloadAction<Story>) => {
      return [...state, action.payload];
    },
    setStories: (_state, action: PayloadAction<Story[]>) => {
      return [...action.payload];
    },
  },
});

export const { reset, setStories } = storiesSlice.actions;
export default storiesSlice.reducer;
