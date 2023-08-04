import prompts from "@/utils/prompts";
import { notFound } from "next/navigation";
import { Story } from "./Story";

export default async function Home(props: { params: { id: string } }) {
  return <Story storyId={props.params.id} />;
}
