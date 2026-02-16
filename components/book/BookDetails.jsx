"use client";

import Button from "../ui/Button";

const categories = ["Service", "Leadership", "Community", "Purpose", "Impact"];

const BookDetails = () => {
  return (
    <section className="bg-white">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-3xl bg-neutral-100 p-8 shadow-sm">
              <div className="mx-auto w-full max-w-xs">
                <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl">
                  <div className="rounded-2xl bg-linear-to-br from-primary-950 via-primary-800 to-primary-600 p-0.5">
                    <div className="rounded-[15px] bg-white p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-700">
                        Coming Soon
                      </p>
                      <h3 className="mt-4 text-3xl font-semibold leading-tight text-neutral-900">
                        Serving Is a Superpower
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        Transforming lives through service is the power of
                        giving and receiving.
                      </p>
                      <div className="mt-10 flex items-center justify-between text-xs text-neutral-500">
                        <span className="rounded-full bg-primary-50 px-3 py-1 font-semibold text-primary-700">
                          eBook Edition
                        </span>
                        <span>2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button
              href="#"
              size="sm"
              className="w-full rounded-2xl bg-primary-800 px-6 py-4 text-sm before:bg-primary-950 hover:text-white"
              iconClassName="size-5.5"
            >
              Purchase Now on Amazon
            </Button>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-neutral-700">
                Book Categories :
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-neutral-200 bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-700"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900">
                Overview :
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                Transforming lives through service is the power of giving and
                receiving.
              </p>
              <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                Serving those in need—and how that can transform lives, from the
                servant to the beneficiary—are just a few of the insightful
                lessons explored in this book.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Inside The Book.
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary-700" />
                  <span>
                    Clear leadership lessons rooted in corporate and nonprofit
                    experience.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary-700" />
                  <span>
                    Practical frameworks for building service-centered culture
                    and strategy.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary-700" />
                  <span>
                    A call to collective action—designed to help communities
                    create lasting change.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
