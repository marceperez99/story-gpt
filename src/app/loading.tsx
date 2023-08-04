"use client";
import PacmanLoader from "react-spinners/ScaleLoader";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex flex-1 flex-col w-full  justify-center content-center items-center ">
      <p className="text-2xl mb-4 text-secondary">Loading...</p>
      <PacmanLoader color="#4392F1" />
    </div>
  );
}
