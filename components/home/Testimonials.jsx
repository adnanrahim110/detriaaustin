"use client";

import { Facebook, Instagram, Play, Twitter } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div className="space-y-10">
            <div className="text-6xl font-semibold text-primary-700 sm:text-7xl">
              &ldquo;
            </div>
            <p className="max-w-xl text-2xl leading-snug text-neutral-700 sm:text-3xl">
              Writing is an exploration. You start from nothing and learn as you
              go.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=120&q=80"
                alt="Miles Ren"
                className="h-12 w-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div className="text-sm font-semibold text-neutral-900">
                  Miles Ren
                </div>
                <div className="text-sm text-neutral-500">Writer</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 bottom-0 hidden w-52 overflow-hidden rounded-3xl shadow-lg md:block">
              <img
                src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=420&q=80"
                alt="Reading a book"
                className="h-40 w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="ml-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
                  alt="Author portrait"
                  className="h-72 w-full object-cover"
                  loading="lazy"
                />
                <button
                  type="button"
                  aria-label="Play video"
                  className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-700 shadow-lg"
                >
                  <Play className="h-5 w-5 fill-primary-700" />
                </button>
              </div>

              <div className="p-5">
                <p className="text-sm text-neutral-600">
                  Find me on social networks
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition hover:border-primary-500 hover:text-primary-700"
                    href="https://www.instagram.com/"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition hover:border-primary-500 hover:text-primary-700"
                    href="https://www.facebook.com/"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition hover:border-primary-500 hover:text-primary-700"
                    href="https://x.com/"
                    aria-label="X"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
