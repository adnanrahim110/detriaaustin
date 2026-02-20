"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BsQuote } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { Reveal } from "../ui/Reveal";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yBook = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100svh-80px)] w-full overflow-hidden bg-[#F3F2EF] flex flex-col justify-center py-20 lg:py-0"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] h-[70vh] w-[70vw] rounded-full bg-primary-100/70 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[60vh] w-[60vw] rounded-full bg-primary-50/80 blur-[120px]" />
      </div>

      <div className="container relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center h-full">
        <motion.div
          style={{ y: yText, opacity }}
          className="col-span-1 lg:col-span-7 flex flex-col items-start lg:pr-10"
        >
          <Reveal
            as="h1"
            variant="fade-up"
            duration={1}
            delay={0.15}
            className="text-[clamp(3.5rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-900"
          >
            Service is not soft.
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-primary-800 to-neutral-500 mt-1">
              It is strength with humility.
            </span>
          </Reveal>

          <Reveal
            variant="fade-up"
            duration={1}
            delay={0.3}
            className="max-w-xl text-lg lg:text-xl section-body mt-6"
          >
            Quiet power that changes what comes next.
          </Reveal>

          <Reveal
            variant="fade-up"
            duration={1}
            delay={0.45}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full mt-10"
          >
            <Link
              href="/about"
              className="bg-primary-900 text-white hover:bg-neutral-900 px-8 py-4 rounded-full text-base font-semibold group flex items-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Discover My Work
              <GoArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
            <Link
              href="/book"
              className="px-8 py-4 rounded-full text-base font-semibold text-neutral-800 border border-neutral-300 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300 flex items-center gap-3 group"
            >
              Read The Book
              <GoArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </Reveal>
        </motion.div>

        <motion.div
          style={{ y: yBook }}
          className="col-span-1 lg:col-span-5 relative w-full h-125 lg:h-175 flex items-center justify-center mt-8 lg:mt-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/40 blur-[100px] rounded-full pointer-events-none" />

          <Reveal
            variant="scale"
            duration={1.2}
            delay={0.5}
            className="relative w-full max-w-[320px] lg:max-w-105 h-full z-10"
          >
            <motion.div
              animate={{ y: [-15, 15, -15], rotateZ: [-1, 1, -1] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="w-full h-full relative flex items-center justify-center"
            >
              <div className="absolute right-4 lg:right-10 top-16 lg:top-24 w-50 h-75 lg:w-65 lg:h-97.5 rotate-12 opacity-80 z-0">
                <Image
                  src="/imgs/book-back.png"
                  alt="Serving is a Superpower - Back Cover"
                  fill
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>

              <div className="absolute left-0 bottom-16 lg:bottom-24 w-60 h-90 lg:w-[320px] lg:h-115 -rotate-6 z-10">
                <Image
                  src="/imgs/book.png"
                  alt="Serving is a Superpower - Front Cover"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </Reveal>

          <Reveal
            variant="fade-left"
            duration={1}
            delay={0.9}
            className="absolute -right-2 lg:-right-12 bottom-0 lg:bottom-12 w-64 lg:w-72 rounded-2xl bg-white/70 border border-neutral-200 backdrop-blur-xl p-6 shadow-xl z-20"
          >
            <BsQuote className="text-primary-700 text-4xl mb-3 opacity-50" />
            <p className="text-neutral-700 text-sm italic font-medium leading-relaxed">
              "A book for people who want their leadership to feel like care,
              not performance."
            </p>
            <div className="mt-4 flex items-center gap-3 border-t border-neutral-200 pt-4">
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-800 border border-primary-200">
                ED
              </div>
              <div>
                <p className="text-neutral-900 text-xs font-semibold">
                  E.L. Doctorow
                </p>
                <p className="text-neutral-500 text-[10px] font-medium">
                  Author & Critic
                </p>
              </div>
            </div>
          </Reveal>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-b from-transparent to-[#F3F2EF] pointer-events-none" />
    </section>
  );
}
