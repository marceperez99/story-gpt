import { Story } from "@/types/story.type";
import prompts from "@/utils/prompts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Story[] = prompts.map((prompt) => ({
  id: prompt.id,
  title: prompt.title,
  prompt: prompt.description,
}));

export const storiesSlice = createSlice({
  name: "stories",
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
