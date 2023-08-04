export default function Footer() {
  return (
    <footer className="flex flex-col mx-auto text-center p-4 border-t w-4/5 mt-5">
      <p className="mt-2">
        Created with Next.js, Tailwind CSS, and a little bit of AI
      </p>
      <p className="mr-2">
        Check out the code at{" "}
        <a
          href={process.env.NEXT_PUBLIC_GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-500"
        >
          GitHub Repo
        </a>
      </p>
      <p className="mr-2">
        Created by{" "}
        <a
          href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-500"
        >
          Marcelo Perez
        </a>
      </p>
    </footer>
  );
}
