"use client";

import { GoArrowRight } from "react-icons/go";
import Button from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const categories = [
  {
    title: "Non-Fiction",
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Literary Essays",
    img: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Storytelling",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Philosophy",
    img: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Fiction",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Editorial & Opinion",
    img: "https://images.unsplash.com/photo-1529590003495-b2646e2718bf?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Autobiography",
    img: "https://images.unsplash.com/photo-1474366521946-c3b861217ad8?auto=format&fit=crop&w=400&q=80",
  },
];

const CategoryCard = ({ title, img, className = "", imgClassName = "" }) => (
  <Reveal
    variant="fade-up"
    duration={0.8}
    as="div"
    className={`text-center ${className}`}
  >
    <div
      className={`overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-neutral-200/50 ${imgClassName}`}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </div>
    <p className="mt-3 text-base font-semibold text-neutral-800">{title}</p>
  </Reveal>
);

const WhereWordsGo = () => {
  return (
    <section className="relative bg-[#F3F2EF] section-padding overflow-hidden">
      <div
        className="absolute right-0 top-[20%] h-100 w-125 rounded-full bg-primary-50/60 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container">
        <Reveal
          as="h2"
          variant="fade-up"
          duration={0.8}
          className="text-center text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
        >
          Where Service Becomes Strength
        </Reveal>

        <div className="hidden lg:block relative">
          <div className="flex items-start justify-between mt-8 relative z-10 px-6">
            <CategoryCard
              title="Non-Fiction"
              img={categories[0].img}
              imgClassName="w-40 h-48"
            />

            <Reveal
              variant="fade-up"
              delay={0.3}
              className="text-center max-w-3xl mx-auto pb-6"
            >
              <p className="leading-relaxed text-lg section-body">
                Detria has written this book, which blends real stories with
                practical lessons, so service is not just a value, but a daily
                way of leading that people can feel in teams, families, and
                communities.
              </p>
            </Reveal>

            <CategoryCard
              title="Fiction"
              img={categories[4].img}
              imgClassName="w-40 h-48"
            />
          </div>

          <div className="flex items-end justify-center gap-14 -mt-20">
            <CategoryCard
              title="Literary Essays"
              img={categories[1].img}
              imgClassName="w-48 h-44"
              className="mt-10"
            />
            <CategoryCard
              title="Storytelling"
              img={categories[2].img}
              imgClassName="w-64 h-60"
            />
            <CategoryCard
              title="Philosophy"
              img={categories[3].img}
              imgClassName="w-48 h-44"
              className="mt-10"
            />
          </div>
        </div>

        <div className="lg:hidden mt-8">
          <p className="text-center section-body mb-8">
            Not everything fits neatly in a box. But these categories give a
            glimpse into the kind of work I love to create.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.title}
                title={cat.title}
                img={cat.img}
                imgClassName="w-full h-36"
              />
            ))}
          </div>
        </div>

        <Reveal
          variant="fade-up"
          delay={0.4}
          className="flex flex-wrap justify-center items-center gap-4 mt-14"
        >
          <Button href="/speakings">Speakings</Button>
          <Button href="/contact" variant="outline" icon={GoArrowRight}>
            Contact Me
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default WhereWordsGo;
