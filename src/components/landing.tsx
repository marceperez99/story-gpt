import image from "../../public/images/reading.svg";
import Image from "next/image";

export default function Landing() {
  return (
    <header className="bg-gradient-to-b from-primary text-white p-5 flex flex-col md:flex-row py-20">
      <div className="flex flex-1 items-center">
        <Image
          src={image}
          className="w-1/2 mx-auto md:mr-0 md:ml-auto"
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-1 items-center">
        <div className="flex flex-col flex-1">
          <h1 className="flex mt-2 text-3xl font-semibold text-secondary justify-center md:justify-normal">
            StoryGPT
          </h1>
          <p className="flex text-lg mt-4 text-secondary justify-center md:justify-normal">
            Read Captivating Stories with Ease with the power of AI
          </p>
        </div>
      </div>
    </header>
  );
}
