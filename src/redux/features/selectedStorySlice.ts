import { Story } from "@/types/story.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Story = { id: "", title: "" };

export const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    reset: () => initialState,
    setStory: (_state, action: PayloadAction<Story>) => {
      return action.payload;
    },
  },
});

export const { reset, setStory } = storySlice.actions;
export default storySlice.reducer;
