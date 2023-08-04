import image from "../../public/images/reading.svg";
import Image from "next/image";

export default function Landing() {
  return (
    <header className="bg-gradient-to-b from-primary text-white p-5 flex py-20">
      <div className="flex flex-1 items-center">
        <Image
          src={image}
          className="w-1/2 ml-auto"
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-1 items-center">
        <div>
          <h1 className="flex text-3xl font-semibold text-secondary mt-2 ">
            StoryGPT
          </h1>
          <p className="flex text-lg mt-4 text-secondary">
            Read Captivating Stories with Ease with the power of AI
          </p>
        </div>
      </div>
    </header>
  );
}
