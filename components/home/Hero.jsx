"use client";
import Image from "next/image";
import { BsQuote } from "react-icons/bs";
import { GoArrowDownRight } from "react-icons/go";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F3F2EF]">
      <div className="container pb-14 pt-10">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-90">
            <div className="flex items-center gap-3 text-sm">
              <span className="leading-none">🎙</span>
              <span className="font-medium">works has appeared in:</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "The Rometheme",
                "Haidez",
                "Medium Studio Ten",
                "WildRoot Collective",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-[#CFCFCF] bg-[#F7F6F3] px-4 py-2 text-sm font-medium text-[#2A2A2A] shadow-[0_1px_0_rgba(0,0,0,0.05)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <button
            aria-label="Open"
            className="group flex size-20 items-center justify-center rounded-full bg-[#E9E7E1] text-text transition hover:scale-[1.02] active:scale-[0.99]"
          >
            <GoArrowDownRight
              size={50}
              className="transition group-hover:translate-x-px group-hover:translate-y-px"
            />
          </button>
        </div>

        <div className="relative mt-10 text-center">
          <h1 className="text-4xl font-semibold tracking-[-0.03em] md:text-[150px]">
            Writing that Speaks,
            <br />
            Stories&nbsp;&nbsp;&nbsp;&nbsp;that Last.
          </h1>

          <div className="pointer-events-none absolute left-[43%] top-[64%] w-55 -translate-x-1/2 -translate-y-1/2 md:top-[56%]">
            <div className="absolute left-29 -top-10 rotate-10">
              <div className="relative h-38 w-28">
                <Image
                  src="/book-tan.png"
                  alt=""
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="absolute left-10 top-3.5 -rotate-10">
              <div className="relative h-38 w-28">
                <Image
                  src="/book-brown.png"
                  alt=""
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28 grid gap-6 md:grid-cols-12 items-end">
          <div className="md:col-span-5">
            <div className="relative rounded-xl bg-stone-200 px-8 py-7">
              <div className="max-w-105 text-[40px] font-semibold leading-[1.1] text-neutral-900">
                Good Writing Is Clear Thinking Made Visible.
              </div>
              <div className="mt-4 text-2xl font-medium text-neutral-700">
                – E.L. Doctorow
              </div>
              <div className="absolute bottom-6 right-7 text-5xl font-black text-neutral-500">
                <BsQuote className="rotate-180" />
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="rounded-xl bg-primary p-7">
              <div className="flex flex-wrap gap-3">
                {[
                  "#storytelling",
                  "#fiction",
                  "#copywriting",
                  "#essays",
                  "#voice",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-xl bg-white px-4 py-2 text-[15px] font-semibold text-[#2A2A2A] shadow-[0_2px_0_rgba(0,0,0,0.05)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="flex h-full flex-col justify-between rounded-xl bg-[#F3F2EF]">
              <p className=" text-[15px] leading-[1.55] text-[#6A6A6A] mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat modi adipisci quisquam mollitia, voluptatum tempora
              </p>

              <div>
                <Button href="/about">Discover My Work</Button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            h1 {
              letter-spacing: -0.02em;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
