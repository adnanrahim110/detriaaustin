import Link from "next/link";

const BookHero = () => {
  return (
    <section className="bg-white">
      <div className="container pb-10 pt-10 lg:pb-12 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 shadow-sm">
              Book Detail
            </span>

            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-neutral-900 sm:text-5xl lg:text-6xl">
              Serving Is a
              <br />
              Superpower.
            </h1>
          </div>

          <div className="space-y-6 lg:justify-self-end">
            <p className="max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
              A deeper look into the purpose behind service—and the power of
              giving and receiving.
            </p>

            <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
              <Link href="/" className="transition hover:text-primary-700">
                Home
              </Link>
              <span className="text-neutral-400">→</span>
              <span className="text-neutral-700">About Book</span>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1600&q=80"
            alt="Stacks of books"
            className="h-72 w-full object-cover sm:h-96 lg:h-105"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default BookHero;
