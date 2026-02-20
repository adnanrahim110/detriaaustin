import { Reveal } from "../ui/Reveal";

const formats = [
  {
    title: "Keynotes",
    duration: "30\u201360 min",
    description:
      "High-impact talks that connect purpose to action and leave audiences energized.",
    tags: ["Conference", "Nonprofit", "Corporate"],
  },
  {
    title: "Workshops",
    duration: "60\u2013120 min",
    description:
      "Interactive sessions with tools, reflection prompts, and a clear path to implementation.",
    tags: ["Teams", "Leadership", "Strategy"],
  },
  {
    title: "Panels",
    duration: "45\u201360 min",
    description:
      "Thoughtful conversations that spotlight community impact and practical leadership lessons.",
    tags: ["Community", "Service", "Impact"],
  },
  {
    title: "Fireside / Moderation",
    duration: "30\u201360 min",
    description:
      "Warm, audience-centered dialogue designed for clarity, connection, and meaningful takeaways.",
    tags: ["Interview", "Q&A", "Story"],
  },
];

const SpeakingFormats = () => {
  return (
    <section className="bg-[#F3F2EF] section-padding">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal variant="fade-right" duration={0.8} className="space-y-6">
            <div className="section-label">Formats</div>
            <h2 className="section-title">
              Workshops That Build Skills,
              <br />
              Not Just Inspiration
            </h2>
            <p className="max-w-xl section-body">
              Workshops expand the message of the book into practical, guided
              learning. Sessions can be customized for leadership teams, staff
              groups, youth, or community leaders.
            </p>

            <div className="rounded-3xl border border-neutral-200/60 bg-white/70 backdrop-blur-xs p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] ring-1 ring-neutral-200/50">
              <p className="text-sm font-semibold text-neutral-900">
                Popular Workshop Themes
              </p>
              <ul className="mt-4 space-y-1 section-body">
                {[
                  "Building a service-centered culture",
                  "Communication that earns trust",
                  "Leading through change without losing people",
                  "Creating sustainable community impact",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary-700 ring-4 ring-primary-50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {formats.map((format, index) => (
              <Reveal
                as="div"
                variant="fade-up"
                duration={0.8}
                delay={0.1 * index}
                key={format.title}
                className="rounded-3xl border border-neutral-200/60 bg-white/70 backdrop-blur-xs p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] ring-1 ring-neutral-200/50 transition-all hover:bg-white hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold text-neutral-900">
                      {format.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 font-medium">
                      {format.description}
                    </p>
                  </div>
                  <span className="flex-none rounded-full border border-primary-200/50 bg-primary-50/50 px-3 py-1 text-xs font-semibold text-primary-700">
                    {format.duration}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {format.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200/60 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingFormats;
