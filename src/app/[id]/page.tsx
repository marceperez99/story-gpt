export default function Home({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      This is the story page for {params.id}
    </main>
  );
}
