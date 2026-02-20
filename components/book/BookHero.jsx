import Link from "next/link";
import { Reveal } from "../ui/Reveal";

const BookHero = ({
  badge = "Book Detail",
  title = (
    <>Service isn&apos;t something you do. It&apos;s something you become.</>
  ),
  description = "Serving is a SuperPower, will change how you see yourself, your neighbors, and the power you already carry.",
  breadcrumbLabel = "Book Detail",
  imageSrc = "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1600&q=80",
  imageAlt = "Stacks of books",
}) => {
  return (
    <section className="bg-[#F3F2EF]">
      <div className="container pb-12 pt-10 lg:pb-16 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Reveal variant="fade-right" duration={0.8} className="space-y-6">
            <span className="section-label">{badge}</span>

            <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-900">
              {title}
            </h1>
          </Reveal>

          <Reveal
            variant="fade-left"
            duration={0.8}
            delay={0.2}
            className="space-y-6 lg:justify-self-end"
          >
            <p className="max-w-md section-body">{description}</p>

            <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
              <Link href="/" className="transition hover:text-primary-700">
                Home
              </Link>
              <span className="text-neutral-400">&rarr;</span>
              <span className="text-neutral-700">{breadcrumbLabel}</span>
            </div>
          </Reveal>
        </div>

        <Reveal
          variant="scale"
          duration={0.8}
          delay={0.4}
          className="mt-10 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-neutral-200/50 relative"
        >
          <div
            className="absolute -left-20 -top-10 h-60 w-60 rounded-full bg-primary-100/60 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-72 w-full object-cover sm:h-96 lg:h-105 relative z-10"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default BookHero;
