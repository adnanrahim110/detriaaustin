"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const highlights = [
  {
    num: "01",
    title: "Short, Practical Chapters",
    description:
      "Clear reflections and real examples that fit into a busy life—written to be applied immediately, not saved for later.",
  },
  {
    num: "02",
    title: "Leadership With Heart",
    description:
      "A grounded approach to servant leadership that builds trust, restores dignity, and strengthens teams and communities.",
  },
  {
    num: "03",
    title: "Stories That Stay With You",
    description:
      "\u201CService Witnessed\u201D moments that highlight what service looks like in real life—and why small actions carry long-term weight.",
  },
];

const BookTeaser = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3F2EF] section-padding">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1.2fr]">
          <Reveal variant="fade-right" duration={0.8} className="relative">
            <div
              className="absolute -left-10 -top-6 h-60 w-60 rounded-full bg-primary-100/60 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-primary-50/80 blur-[80px] pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-md">
              <div className="absolute -left-6 top-10 hidden h-96 w-64 -rotate-6 rounded-[28px] border border-neutral-200/50 bg-white/40 backdrop-blur-md shadow-2xl sm:block" />
              <div className="relative w-72 shadow-[0_30px_60px_rgba(0,0,0,0.15)] ring-1 ring-white/20">
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
          </Reveal>

          <Reveal
            variant="fade-left"
            duration={0.8}
            delay={0.2}
            className="space-y-6 lg:pl-4"
          >
            <span className="section-label">Featured Book</span>
            <h2 className="section-title">
              A Story-Driven Guide For Leaders Who Want{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-800 to-neutral-500">
                Impact That Lasts.
              </span>
            </h2>
            <p className="max-w-xl section-body">
              Serving Is a Superpower shows how service becomes real
              strength—steady, practical, and rooted in purpose. Built on lived
              experience and clear lessons, it turns good intentions into action
              that people actually feel.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 mt-8">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-200/60 bg-white/70 backdrop-blur-xs p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all hover:bg-white hover:shadow-lg"
                >
                  <span className="text-xs font-bold text-primary-500 tracking-wide">
                    {item.num}
                  </span>
                  <p className="mt-2 text-[15px] font-semibold text-neutral-900">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-neutral-600 font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button href="/">Buy Now</Button>
              <Button href="/book" variant="outline">
                Read More
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BookTeaser;
