"use client";

import Image from "next/image";

import Button from "../ui/Button";

const Newsletter = () => {
  return (
    <section className="bg-white">
      <div className="container py-16 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-950">
          <Image
            src="/imgs/author.jpeg"
            alt="Detria Austin Everson"
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover opacity-25"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-black/85 via-black/45 to-black/85"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-14">
            <div className="space-y-5 text-white">
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Launch Updates
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                Be the first to know when Serving Is a Superpower is available.
                No spam. Just the news that matters, when it matters.
              </p>

              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
                  Launch updates
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
                  Appearances
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
                  New resources
                </span>
              </div>
            </div>

            <form className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-white/80">
                  Name
                  <input
                    type="text"
                    name="name"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/15"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>
                <label className="text-sm text-white/80">
                  Email
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/15"
                    placeholder="you@email.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <div className="mt-6">
                <Button
                  type="submit"
                  size="sm"
                  className="w-full justify-between gap-3 rounded-full bg-white px-6 py-3 text-sm text-primary-800 shadow-lg before:bg-white/80 hover:text-primary-950"
                >
                  Keep Me Updated
                </Button>
                <p className="mt-3 text-xs leading-relaxed text-white/60">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
