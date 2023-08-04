"use client";

import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useStore } from "react-redux";
import React from "react";
import Landing from "@/components/landing";
import { Prompt } from "@/utils/prompts";
import { Story } from "@/types/story.type";

export const StorySelector: React.FC = () => {
  const store = useStore();

  const stories = useAppSelector((state) => state.storiesReducer);
  return (
    <div className="text-gray-800 w-full ">
      <Landing />
      <section className="py-12  text-center">
        <h2 className="text-xl font-semibold">Try It Yourself!</h2>
        <p className="text-lg mt-4">
          Curious to see how it works? Choose a prompt and watch the magic
          unfold before your eyes. Experience the thrill of crafting stories
          effortlessly.
        </p>
      </section>

      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Choose a Story Prompt</h1>
        <ul className="space-y-5">
          {stories.map((prompt) => (
            <li key={prompt.id}>
              <StoryPrompt prompt={prompt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const StoryPrompt = ({ prompt }: { prompt: Story }) => {
  const { push } = useRouter();
  return (
    <div
      onClick={() => {
        push("/" + prompt.id);
      }}
      className="bg-white border-2 border-transparent cursor-default border-gray-300 rounded shadow-md p-4 text-black hover:shadow-lg hover:border-primary  transition duration-300"
    >
      {prompt.prompt}
    </div>
  );
};
