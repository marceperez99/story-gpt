// Add a 404 page react component using tailwindcss and typescript to the not-found.tsx file:
import { notFound } from "next/navigation";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-2xl">
        Sorry, this page cannot be found. Please go back to the home page.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white">
        Go to home page
      </button>
    </main>
  );
}
