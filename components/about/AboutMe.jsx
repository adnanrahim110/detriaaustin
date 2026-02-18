"use client";

import { Award } from "lucide-react";
import { GoArrowRight } from "react-icons/go";
import Button from "../ui/Button";

const AboutMe = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3F2EF] py-16 lg:py-24">
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary-100/70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-primary-50/80 blur-3xl"
        aria-hidden="true"
      />

      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-neutral-300 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 shadow-sm backdrop-blur">
              About Me
            </span>

            <div className="space-y-1">
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-neutral-900 sm:text-[40px]">
                Meet the Heart Behind the Message
              </h2>
              <p className="text-base font-semibold text-primary-800 sm:text-lg">
                Purpose-Driven Leadership, Lived Out Loud
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
              <div className="space-y-4 text-sm leading-relaxed text-neutral-700 sm:text-base">
                <p>
                  Detria Austin Everson is a nationally recognised servant
                  leader and business strategist with 20+ years of experience
                  across nonprofit, corporate, healthcare, and financial
                  sectors. Her work is rooted in a simple belief: leadership is
                  most powerful when it protects people, strengthens systems,
                  and leaves communities better than it found them.
                </p>
                <p>
                  Known for combining heart with structure, Detria helps
                  mission-driven work move from intention to execution. She
                  brings clarity to complex challenges, builds cultures anchored
                  in integrity, and champions service that is consistent,
                  practical, and sustainable.
                </p>
                <p>
                  Serving Is a Superpower reflects that same approach, real-life
                  lessons, grounded wisdom, and a steady call to lead with
                  purpose in ways people can actually feel.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/book">Discover the Book</Button>
              <Button href="/speakings" variant="outline" icon={GoArrowRight}>
                Speakings
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative ml-auto max-w-md overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl">
              <img
                src="/imgs/author.jpeg"
                alt="Detria Austin Everson"
                className="h-105 w-full object-cover lg:h-130"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-black/0 to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="absolute bottom-1/3 left-4 z-10 lg:-left-4">
              <div className="relative flex size-36 items-center justify-center rounded-full border border-neutral-200 bg-white/90 shadow-xl backdrop-blur-sm lg:size-44">
                <svg
                  className="absolute inset-0 size-full animate-spin"
                  style={{ animationDuration: "20s" }}
                  viewBox="0 0 200 200"
                >
                  <defs>
                    <path
                      id="awardTextPath"
                      d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      fill="none"
                    />
                  </defs>
                  <text
                    className="fill-neutral-600"
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "3px",
                    }}
                  >
                    <textPath href="#awardTextPath" startOffset="0%">
                      Purpose-Driven Leadership, Lived Out Loud Purpose-Driven
                      Leadership, Lived Out Loud
                    </textPath>
                  </text>
                </svg>
                <Award className="size-9 text-neutral-700 lg:size-11" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
