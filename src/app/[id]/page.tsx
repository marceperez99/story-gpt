import prompts from "@/utils/prompts";
import { notFound } from "next/navigation";
import { Story } from "./Story";
import { Story as TStory } from "@/types/story.type";
import { getChatResponse } from "@/utils/chatgpt.client";
import { cache } from "react";

export default async function Home(props: { params: { id: string } }) {
  const story = await fetchStory(props.params.id);
  if (!story) notFound();
  return <Story story={story} />;
}

const fetchStory = cache(async (id: string): Promise<TStory | undefined> => {
  const prompt = prompts.find((prompt) => prompt.id === id);
  const token = process.env.OPENAI_API_KEY || "";
  if (prompt) {
    // try {
    return {
      id: prompt.id,
      prompt: prompt.description,
      title: prompt.title,
      body: await getChatResponse(prompt.description, token),
    };
    // } catch (error) {
    //   // @ts-ignore
    //   throw new Error(error.response?.data?.error?.message);
    // }
  }

  return undefined;
});
