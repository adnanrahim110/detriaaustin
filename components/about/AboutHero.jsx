"use client";

import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const AboutHero = () => {
  return (
    <section className="bg-white pt-8 pb-14 lg:pt-12 lg:pb-20">
      <div className="container">
        {/* Header area */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12 mb-10 lg:mb-14">
          {/* Left: pill + heading */}
          <div className="lg:flex-1">
            <span className="inline-block rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-600">
              About Me
            </span>

            <h1 className="mt-5 text-[clamp(2.8rem,7vw,5.8rem)] font-semibold leading-[1.06] tracking-[-0.02em]">
              Rooted in stories,
              <br />
              Grown by words.
            </h1>
          </div>

          {/* Right: description + breadcrumb */}
          <div className="lg:max-w-sm lg:pt-20 flex flex-col gap-10">
            <p className="text-[15px] leading-relaxed text-neutral-500">
              Where language becomes connection, and every word is chosen with
              purpose.
            </p>

            <nav className="flex items-center gap-2.5 text-[15px] font-medium">
              <Link
                href="/"
                className="text-neutral-800 hover:text-primary-700 transition-colors"
              >
                Home
              </Link>
              <GoArrowRight className="size-4.5 text-neutral-400" />
              <span className="text-primary-700 font-semibold">About</span>
            </nav>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80"
            alt="Open book with autumn leaves"
            className="w-full h-[280px] md:h-[420px] lg:h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
