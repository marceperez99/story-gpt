export interface Prompt {
  id: string;
  title: string;
  description: string;
}
const prompts: Prompt[] = [
  {
    id: "story-1",
    title: "Adventures Unbound: When a Magical Book Rewrites Reality",
    description:
      "A magical book transports its readers into the world of the story they're reading, causing chaos and adventures.",
  },
  {
    id: "story-2",
    title: '"Beneath the Ashen Horizon: Secrets of the Subterranean Sanctuary',
    description:
      "In a post-apocalyptic world, a group of survivors discovers an underground sanctuary with advanced technology and a hidden agenda.",
  },
  {
    id: "story-3",
    title:
      "Temporal Odyssey: Navigating History's Echoes to Reclaim the Future",
    description:
      "A time traveler gets stuck in the past and must navigate through various historical periods to find a way back to the future.",
  },
];
export default prompts;
