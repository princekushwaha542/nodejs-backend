import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <section className="min-h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">
            Portfolio Working 🚀
          </h1>
        </section>
      </main>
    </>
  );
}