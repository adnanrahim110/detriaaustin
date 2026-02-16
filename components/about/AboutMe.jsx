"use client";

import { Award } from "lucide-react";
import { GoArrowRight } from "react-icons/go";
import Button from "../ui/Button";

const AboutMe = () => {
  return (
    <section className="bg-[#F3F2EF] py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-neutral-700 mt-0.5">
                About Me
              </p>
            </div>

            <p className="text-xl md:text-2xl lg:text-[26px] leading-snug font-medium text-neutral-900 max-w-xl">
              Hello, I&apos;m Miles Ren, an author dedicated to crafting
              compelling narratives that captivate readers and provoke thought.
              Whether you&apos;re looking for novels that transport you to new
              worlds or insightful essays that challenge your perspective, my
              writing brings your imagination to life.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="/book">Discover the Book</Button>
              <Button href="/speakings" variant="outline" icon={GoArrowRight}>
                Speakings
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl max-w-md ml-auto">
              <img
                src="/imgs/author.jpeg"
                alt="Miles Ren - Author"
                className="w-full h-105 lg:h-130 object-cover"
              />
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
