"use client";

import { Award } from "lucide-react";
import { GoArrowRight } from "react-icons/go";
import Button from "../ui/Button";

const tags = ["#storytelling", "#fiction", "#copywriting", "#essays", "#voice"];

const AboutMe = () => {
  return (
    <section className="bg-[#F3F2EF] py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            {/* Section label */}
            <div>
              <p className="text-sm italic font-semibold text-neutral-500">
                (01)
              </p>
              <p className="text-sm font-medium text-neutral-700 mt-0.5">
                About Me
              </p>
            </div>

            {/* Bio text */}
            <p className="text-xl md:text-2xl lg:text-[26px] leading-snug font-medium text-neutral-900 max-w-xl">
              Hello, I&apos;m Miles Ren, an author dedicated to crafting
              compelling narratives that captivate readers and provoke thought.
              Whether you&apos;re looking for novels that transport you to new
              worlds or insightful essays that challenge your perspective, my
              writing brings your imagination to life.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="/book">Discover My Work</Button>
              <Button href="/contact" variant="outline" icon={GoArrowRight}>
                My Service
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
            {/* Author photo */}
            <div className="relative overflow-hidden rounded-3xl max-w-md ml-auto">
              <img
                src="/imgs/author.jpeg"
                alt="Miles Ren - Author"
                className="w-full h-[420px] lg:h-[520px] object-cover"
              />
            </div>

            {/* Award badge */}
            <div className="absolute left-4 lg:-left-4 bottom-1/3 z-10">
              <div className="relative size-36 lg:size-44 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
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
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                    }}
                  >
                    <textPath href="#awardTextPath" startOffset="0%">
                      NATIONAL ESSAY BOOK AWARD • WINNER •
                    </textPath>
                  </text>
                </svg>
                <Award className="size-9 lg:size-11 text-neutral-700" />
              </div>
            </div>

            {/* Tags */}
            <div className="absolute bottom-4 lg:-bottom-2 right-2 lg:right-0 z-10 flex flex-wrap gap-2 max-w-xs justify-end">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
