"use client";

import { useEffect } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { Story } from "@/types/story.type";
import { setStories } from "@/redux/features/storiesSlice";
export function Providers({
  children,
  initialData,
}: {
  children: React.ReactNode;
  initialData: Story[];
}) {
  useEffect(() => {
    console.log("initialData:", initialData);
    store.dispatch(setStories(initialData));
  }, [initialData]);
  return <Provider store={store}>{children}</Provider>;
}
