"use client";

import Image from "next/image";
import Button from "../ui/Button";

const categories = [
  "Servant Leadership",
  "Personal Growth",
  "Community Impact",
  "Faith & Purpose",
  "Culture",
];

const overviewQuote =
  "“The smallest act done with great love becomes greater than the loudest deed done for attention.”";

const overviewTagline =
  "A story-led guide to service as quiet strength, practical, steady, and built for real life.";

const BookDetails = () => {
  return (
    <section className="bg-white">
      <div className="container py-16 lg:py-20">
        <div className="relative">
          <div
            className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-primary-100/70 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-primary-50 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="min-w-0 space-y-6 lg:sticky top-5">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
                <div
                  className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary-100/70 blur-3xl"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-primary-50/90 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative mx-auto w-full max-w-lg">
                  <Image
                    src="/imgs/book-mockup.png"
                    alt="book"
                    width={720}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <Button
                href="#"
                size="sm"
                className="w-full rounded-2xl bg-primary-800 px-6 py-4 text-sm shadow-lg before:bg-primary-950 hover:text-white"
                iconClassName="size-5.5"
              >
                Purchase Now on Amazon
              </Button>
            </div>

            <div className="min-w-0 space-y-6">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Book Categories
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-white"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Overview
                </p>
                <div className="mt-5 space-y-4">
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                    <div
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary-100/70 blur-3xl"
                      aria-hidden="true"
                    />
                    <p className="relative text-lg font-semibold leading-snug text-neutral-900 sm:text-2xl">
                      {overviewQuote}
                    </p>
                    <p className="relative mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {overviewTagline}
                    </p>
                  </div>

                  <p className="text-sm font-semibold leading-relaxed text-neutral-900 sm:text-xl">
                    Transforming lives through service is the power of giving
                    and receiving.
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                    Service is often treated like an extra. This book treats it
                    like a foundation. Serving Is a Superpower explores what
                    changes when service is practiced with consistency, how
                    trust forms, how dignity is protected, and how leadership
                    becomes something people experience, not just something they
                    are told. Built on lived insight and clear takeaways, each
                    chapter connects real moments to practical direction, making
                    it easier to lead with purpose in everyday decisions.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-xl font-semibold uppercase text-black">
                  What’s In The Book For You?
                </p>
                <ul className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary-700 ring-4 ring-primary-50" />
                    <span>
                      Story-driven chapters that show what service looks like
                      when it is sincere, structured, and sustainable.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary-700 ring-4 ring-primary-50" />
                    <span>
                      Practical guidance for building trust, strengthening
                      culture, and leading with integrity under pressure.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary-700 ring-4 ring-primary-50" />
                    <span>
                      “Service Witnessed” reflections that highlight the ripple
                      effect of small actions done well.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
