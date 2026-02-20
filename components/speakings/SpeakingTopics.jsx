import { ArrowDownRight, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const speakingTopics = [
  {
    title: "Serving Is a Superpower: Leadership People Can Feel",
    description:
      "A motivating talk on why service is strength, not softness\u2014and how consistent, people-first leadership builds trust, loyalty, and results.",
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
      "A motivating message about credibility\u2014how small commitments, kept consistently, change culture, relationships, and outcomes.",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=640&q=80",
    alt: "People working together in a community setting",
  },
  {
    title: "Service That Scales: From Individual Effort to Collective Impact",
    description:
      "A talk designed for organizations and communities ready to move from \u201Cgood intentions\u201D to coordinated action that lasts.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=640&q=80",
    alt: "Hands exchanging house keys",
  },
];

const SpeakingTopics = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container">
        <Reveal
          variant="fade-up"
          duration={0.8}
          delay={0.1}
          className="grid gap-8 lg:grid-cols-[0.35fr_0.85fr_1fr] lg:items-start"
        >
          <div>
            <div className="section-label">Signature Keynotes</div>
          </div>

          <h2 className="section-title">
            Signature Talks
            <br />
            Inspired by the Book
          </h2>

          <div className="space-y-4">
            <p className="max-w-xl section-body">
              Detria&apos;s keynotes are designed to inspire and equip audiences
              to lead with integrity, serve consistently, and create lasting
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
        </Reveal>

        <div className="relative mt-14">
          <div className="divide-y divide-neutral-200/60 border-y border-neutral-200/60">
            {speakingTopics.map((topic, index) => (
              <Reveal
                as="div"
                variant="fade-up"
                duration={0.8}
                delay={0.1 * index}
                key={topic.title}
                className="group/service relative flex items-start justify-between gap-6 py-10 px-4 transition-all duration-300 hover:bg-white/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-2xl -mx-4 cursor-pointer"
              >
                <div className="max-w-4xl">
                  <span className="text-xl font-semibold text-neutral-900 group-hover/service:text-primary-800 transition-colors sm:text-2xl">
                    {topic.title}
                  </span>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-600 font-medium">
                    {topic.description}
                  </p>
                </div>

                <span className="relative flex h-14 w-14 flex-none items-center justify-center self-center rounded-full bg-white text-neutral-700 shadow-sm border border-neutral-200 transition-all duration-300 group-hover/service:border-primary-200 group-hover/service:bg-primary-50 group-hover/service:text-primary-700 group-hover/service:shadow-md">
                  <ArrowDownRight className="h-5 w-5 transition-all duration-300 group-hover/service:translate-x-1 group-hover/service:translate-y-1 group-hover/service:opacity-0" />
                  <ArrowRight className="absolute h-5 w-5 opacity-0 transition-all duration-300 group-hover/service:opacity-100 group-hover/service:translate-x-0 -translate-x-2" />
                </span>

                <div className="pointer-events-none absolute right-1/4 top-1/2 hidden h-48 w-64 -translate-y-1/2 -rotate-3 overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-4 ring-white opacity-0 transition-all duration-500 ease-out group-hover/service:translate-x-0 group-hover/service:scale-100 group-hover/service:opacity-100 lg:block lg:translate-x-4 lg:scale-95 z-20">
                  <img
                    src={topic.image}
                    alt={topic.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingTopics;
