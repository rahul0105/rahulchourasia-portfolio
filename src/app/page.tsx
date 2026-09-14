import Navbar from "@/components/layouts/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="home"
          className="flex min-h-[500px] items-center justify-center px-5"
        >
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Frontend & Mobile Developer
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Hi, I&apos;m Rahul.
            </h1>

            <p className="mt-4 text-slate-600">
              Navbar is ready.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}