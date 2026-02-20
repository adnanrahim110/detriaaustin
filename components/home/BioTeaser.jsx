"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "../ui/Reveal";

const BioTeaser = () => {
  return (
    <section className="relative overflow-hidden bg-white section-padding">
      <div className="absolute -left-[10%] top-0 h-100 w-125 rounded-full bg-primary-50/60 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.5fr_0.7fr] lg:items-start">
          <Reveal
            variant="fade-right"
            duration={0.8}
            className="overflow-hidden rounded-3xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)] ring-1 ring-neutral-200/50"
          >
            <img
              src="/imgs/author.jpeg"
              alt="Author portrait"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>

          <Reveal
            variant="fade-up"
            duration={0.8}
            delay={0.2}
            className="space-y-6 lg:pt-6"
          >
            <div className="section-label">Author&apos;s Journey</div>
            <h2 className="section-title">
              Get To Know{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-800 to-neutral-500">
                Detria Austin
              </span>
            </h2>
            <p className="max-w-xl section-body">
              Detria Austin Everson is a nationally recognised servant leader
              and business strategist whose work sits at the intersection of
              leadership, organizational excellence, and social impact. With 20+
              years across nonprofit, corporate, healthcare, and financial
              sectors, she is known for building sustainable institutions,
              stewarding resources with integrity, and helping mission-driven
              work produce lasting results.
            </p>
          </Reveal>

          <Reveal
            variant="fade-left"
            duration={0.8}
            delay={0.4}
            className="flex flex-col items-start gap-6 lg:pt-10"
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] ring-1 ring-neutral-200/50">
              <img
                src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=500&q=80"
                alt="Books on a table"
                className="h-40 w-48 object-cover"
                loading="lazy"
              />
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:border-primary-600 hover:text-primary-700 hover:shadow-md"
            >
              Know More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BioTeaser;
