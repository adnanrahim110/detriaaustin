"use client";

import Image from "next/image";
import Button from "../ui/Button";

const highlights = [
  {
    title: "Short, Practical Chapters",
    description:
      "Clear reflections and real examples that fit into a busy life—written to be applied immediately, not saved for later.",
  },
  {
    title: "Leadership With Heart",
    description:
      "A grounded approach to servant leadership that builds trust, restores dignity, and strengthens teams and communities.",
  },
  {
    title: "Stories That Stay With You",
    description:
      "“Service Witnessed” moments that highlight what service looks like in real life—and why small actions carry long-term weight.",
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
              <div className="relative w-70 shadow-2xl">
                <Image
                  width={720}
                  height={500}
                  src="/imgs/book.png"
                  alt="Book"
                  className="h-auto w-full"
                />
              </div>
              <Image
                width={720}
                height={500}
                src="/imgs/book-back.png"
                alt="Book"
                className="absolute -bottom-10 -right-6 hidden w-52.5 rotate-[7deg] shadow-lg lg:block"
              />
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">
              Featured Book
            </span>
            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
              A Story-Driven Guide For Leaders Who Want Impact That Lasts.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600">
              Serving Is a Superpower shows how service becomes real
              strength—steady, practical, and rooted in purpose. Built on lived
              experience and clear lessons, it turns good intentions into action
              that people actually feel.
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
              <Button href="/">Buy Now</Button>
              <Button href="/book" variant="outline">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTeaser;
