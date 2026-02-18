"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BioTeaser = () => {
  return (
    <section className="bg-white py-14 lg:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.5fr_0.7fr] lg:items-start">
          <div className="overflow-hidden rounded-4xl bg-neutral-100 shadow-lg">
            <img
              src="/imgs/author.jpeg"
              alt="Author portrait"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-6 lg:pt-6">
            <div className="text-base font-semibold text-neutral-700">
              Author&apos;s Journey
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
              Get To Know Detria Austin
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-lg">
              Detria Austin Everson is a nationally recognised servant leader
              and business strategist whose work sits at the intersection of
              leadership, organizational excellence, and social impact. With 20+
              years across nonprofit, corporate, healthcare, and financial
              sectors, she is known for building sustainable institutions,
              stewarding resources with integrity, and helping mission-driven
              work produce lasting results.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:pt-10">
            <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=500&q=80"
                alt="Books on a table"
                className="h-40 w-48 object-cover"
                loading="lazy"
              />
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-b border-neutral-300 pb-1 text-sm font-semibold text-neutral-700 transition hover:border-primary-700 hover:text-primary-700"
            >
              Know More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioTeaser;
