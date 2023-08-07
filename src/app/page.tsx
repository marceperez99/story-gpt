import { StorySelector } from "./story-selector";

export default async function Home() {
  return (
    <>
      <StorySelector />
      {process.env.TESTVARIABLE}
    </>
  );
}
