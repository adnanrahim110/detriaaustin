import Button from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const SpeakingCTA = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container">
        <Reveal
          variant="fade-up"
          duration={0.8}
          delay={0.2}
          className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-950 px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-14"
        >
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,86,159,0.35),transparent_55%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[56px_56px]"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Invite Detria to speak
                <br />
                at your next event.
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                Share your date, location, and audience goals. You&apos;ll
                receive availability, format recommendations, and next steps.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                href="/contact"
                size="sm"
                className="w-full justify-between gap-3 rounded-full bg-white px-6 py-3 text-sm text-primary-800 shadow-lg before:bg-white/80 hover:text-primary-950"
              >
                Request speaking info
              </Button>
              <p className="text-xs leading-relaxed text-white/60">
                Typical response time: within 48 hours.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SpeakingCTA;
