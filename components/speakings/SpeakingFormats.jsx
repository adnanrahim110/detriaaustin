const formats = [
  {
    title: "Keynotes",
    duration: "30–60 min",
    description:
      "High-impact talks that connect purpose to action and leave audiences energized.",
    tags: ["Conference", "Nonprofit", "Corporate"],
  },
  {
    title: "Workshops",
    duration: "60–120 min",
    description:
      "Interactive sessions with tools, reflection prompts, and a clear path to implementation.",
    tags: ["Teams", "Leadership", "Strategy"],
  },
  {
    title: "Panels",
    duration: "45–60 min",
    description:
      "Thoughtful conversations that spotlight community impact and practical leadership lessons.",
    tags: ["Community", "Service", "Impact"],
  },
  {
    title: "Fireside / Moderation",
    duration: "30–60 min",
    description:
      "Warm, audience-centered dialogue designed for clarity, connection, and meaningful takeaways.",
    tags: ["Interview", "Q&A", "Story"],
  },
];

const SpeakingFormats = () => {
  return (
    <section className="bg-neutral-50">
      <div className="container py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="text-sm font-semibold text-primary-700">(02)</div>
            <h2 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
              Ways to work together
              <br />
              for your audience.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              Whether you’re planning a keynote, workshop, or panel, each
              session is designed to meet your moment—grounded, practical, and
              tailored to your goals.
            </p>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-neutral-900">
                What’s included
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                {[
                  "Pre-event alignment to understand your audience and outcomes.",
                  "A tailored outline with themes, pacing, and key takeaways.",
                  "Optional Q&A prompts and post-session discussion points.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {formats.map((format) => (
              <div
                key={format.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold text-neutral-900">
                      {format.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {format.description}
                    </p>
                  </div>
                  <span className="flex-none rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                    {format.duration}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {format.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingFormats;

