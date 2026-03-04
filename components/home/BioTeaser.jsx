"use client";

import Link from "next/link";
import Button from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const BioTeaser = () => {
  return (
    <section className="relative overflow-hidden bg-white section-padding">
      <div className="absolute -left-[10%] top-0 h-100 w-125 rounded-full bg-primary-50/60 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid gap-20 lg:grid-cols-[35%_auto] lg:items-start">
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
            <p className="section-body">
              Detria Austin Everson is a nationally recognised servant leader
              and business strategist whose work sits at the intersection of
              leadership, organizational excellence, and social impact. With 20+
              years across nonprofit, corporate, healthcare, and financial
              sectors, she is known for building sustainable institutions,
              stewarding resources with integrity, and helping mission-driven
              work produce lasting results.
            </p>
            <p className="section-body">
              Throughout her career, Detria has been trusted with complex
              leadership roles requiring strategic vision, financial acumen, and
              operational discipline. Her expertise includes strategic
              forecasting, managing multi-million-dollar budgets, cultivating
              high-value corporate and philanthropic partnerships, overseeing
              large-scale, multi-city initiatives, and guiding organizations
              through growth and transition. Her leadership style is rooted in
              service, prioritizing people, purpose, and performance in equal
              measure.
            </p>
            <div className="flex items-start">
              <Button href="/about">Know More</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BioTeaser;
