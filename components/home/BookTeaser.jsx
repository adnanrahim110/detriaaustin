"use client";

import Button from "../ui/Button";

const highlights = [
  {
    title: "240+ Pages",
    description: "A tightly crafted novel with vivid, cinematic pacing.",
  },
  {
    title: "Award Shortlist",
    description: "Recognized for voice, clarity, and emotional depth.",
  },
  {
    title: "4.9 Reader Score",
    description: "Praised for clarity, tenderness, and rich storytelling.",
  },
];

const BookTeaser = () => {
  return (
    <section className="bg-white">
      <div className="container py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1.2fr]">
          <div className="relative">
            <div
              className="absolute -left-10 -top-6 h-52 w-52 rounded-full bg-primary-100/70 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-primary-50 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-md">
              <div className="absolute -left-6 top-10 hidden h-95 w-62.5 -rotate-6 rounded-[28px] border border-neutral-200 bg-white shadow-xl sm:block" />
              <div className="relative h-105 w-70 rounded-4xl bg-linear-to-br from-primary-950 via-primary-800 to-primary-600 p-0.5 shadow-2xl">
                <div className="flex h-full flex-col justify-between rounded-[30px] bg-primary-900/90 p-8 text-white">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                    <span>New Release</span>
                    <span>2026</span>
                  </div>
                  <div className="mt-10 space-y-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      A Novel
                    </p>
                    <h3 className="text-3xl font-semibold">
                      Notes From the Middle
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      A luminous exploration of place, memory, and the stories
                      we keep.
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                      Hardcover Edition
                    </span>
                    <span>ISBN 0-1234</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-6 hidden h-80 w-52.5 rotate-[7deg] rounded-[26px] bg-primary-100/70 shadow-lg lg:block" />
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">
              Featured Book
            </span>
            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
              A story-driven book for readers who crave depth and clarity.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600">
              Discover a layered narrative about resilience, belonging, and the
              beauty of small moments. Written with precision and warmth, this
              book balances poetic cadence with unforgettable characters.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-neutral-800">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-neutral-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/book">Read The Excerpt</Button>
              <Button href="/contact" variant="outline">
                Request A Copy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTeaser;
