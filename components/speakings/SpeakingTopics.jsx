import { ArrowDownRight, ArrowRight } from "lucide-react";

import Button from "../ui/Button";

const speakingTopics = [
  {
    title: "Serving Is a Superpower: Leadership People Can Feel",
    description:
      "A motivating talk on why service is strength, not softness—and how consistent, people-first leadership builds trust, loyalty, and results.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=640&q=80",
    alt: "Speaker addressing an audience",
  },
  {
    title: "Lead With Purpose: Turning Values Into Daily Actions",
    description:
      "A practical and uplifting session that helps audiences align their choices with what matters most, even under pressure and competing demands.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=640&q=80",
    alt: "Team collaborating around a table",
  },
  {
    title: "The Quiet Power of Follow-Through",
    description:
      "A motivating message about credibility—how small commitments, kept consistently, change culture, relationships, and outcomes.",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=640&q=80",
    alt: "People working together in a community setting",
  },
  {
    title: "Service That Scales: From Individual Effort to Collective Impact",
    description:
      "A talk designed for organizations and communities ready to move from “good intentions” to coordinated action that lasts.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=640&q=80",
    alt: "Hands exchanging house keys",
  },
];

const SpeakingTopics = () => {
  return (
    <section className="bg-white">
      <div className="container py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.35fr_0.85fr_1fr] lg:items-start">
          <div className="text-neutral-700">
            <div className="text-sm font-semibold text-primary-700">(01)</div>
            <div className="mt-2 text-lg font-semibold">Signature Keynotes</div>
          </div>

          <h2 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Signature Talks
            <br />
            Inspired by the Book
          </h2>

          <div className="space-y-4">
            <p className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              Detria’s keynotes are designed to inspire and equip audiences to
              lead with integrity, serve consistently, and create lasting
              impact. Each talk is rooted in the principles of service-centered
              leadership and is filled with practical insights and real stories
              that resonate with leaders at all levels.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contact" size="sm" className="rounded-full">
                Request Availability
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mt-14">
          <div className="divide-y divide-neutral-300 border-y border-neutral-300">
            {speakingTopics.map((topic) => (
              <div
                key={topic.title}
                className="group/service relative flex items-start justify-between gap-6 py-8 transition-colors duration-300 hover:bg-neutral-50/60"
              >
                <div className="max-w-4xl">
                  <span className="text-2xl font-medium text-neutral-900 sm:text-3xl">
                    {topic.title}
                  </span>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {topic.description}
                  </p>
                </div>

                <span className="relative flex h-14 w-14 flex-none items-center justify-center self-center rounded-full bg-neutral-100 text-neutral-700 transition-all duration-300 group-hover/service:border group-hover/service:border-neutral-500 group-hover/service:bg-white group-hover/service:text-neutral-900 group-hover/service:shadow-md">
                  <ArrowDownRight className="h-5 w-5 transition duration-200 group-hover/service:translate-x-1 group-hover/service:translate-y-1 group-hover/service:opacity-0" />
                  <ArrowRight className="absolute h-5 w-5 opacity-0 transition duration-200 group-hover/service:opacity-100" />
                </span>

                <div className="pointer-events-none absolute right-1/5 top-1/2 hidden h-44 w-56 -translate-y-1/2 -rotate-6 overflow-hidden rounded-3xl shadow-2xl opacity-0 transition-all duration-500 ease-out group-hover/service:translate-x-0 group-hover/service:scale-100 group-hover/service:opacity-100 lg:block lg:translate-x-8 lg:scale-95">
                  <img
                    src={topic.image}
                    alt={topic.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingTopics;
