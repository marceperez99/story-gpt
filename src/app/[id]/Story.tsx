"use client";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Story as IStory } from "@/types/story.type";
import { useEffect } from "react";
import { store } from "@/redux/store";
import { setStory } from "@/redux/features/selectedStorySlice";
import { Storage } from "aws-amplify";
import awsSetup from "../../aws-exports";
Storage.configure({ awsSetup });

export const Story = ({ story: data }: { story: IStory }) => {
  const { back } = useRouter();
  const story = useAppSelector((state) => state.storyReducer);
  useEffect(() => {
    store.dispatch(setStory(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUploadToS3 = async () => {
    try {
      const data = await Storage.put(`${story.id}.txt`, story.body, {
        level: "public",
        contentType: "text/plain",
      });
      console.log("File uploaded successfully:", data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="flex flex-1 p-4 max-w-4xl mx-auto my-auto ">
      <div className="p-4 rounded-md ">
        <button
          className="px-4 py-2 rounded-md mr-2 text-primary text-lg font-semibold flex items-center"
          onClick={back}
        >
          <ChevronLeftIcon className="h-5 w-5 mr-2" />
          Go Back
        </button>
        <p className="text-3xl font-semibold mb-1">{story?.title}</p>
        <p className="text-justify text-sm text-gray-600 italic">{`(Prompt used: ${story?.prompt})`}</p>
        <p className="my-20 text-justify">{story?.body}</p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          onClick={handleUploadToS3}
        >
          Upload to S3
        </button>
      </div>
    </div>
  );
};
