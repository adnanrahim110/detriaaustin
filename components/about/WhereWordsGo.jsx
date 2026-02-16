"use client";

import { GoArrowRight } from "react-icons/go";
import Button from "../ui/Button";

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
  <div className={`text-center ${className}`}>
    <div className={`overflow-hidden rounded-2xl shadow-sm ${imgClassName}`}>
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </div>
    <p className="mt-3 text-base font-semibold text-neutral-800">{title}</p>
  </div>
);

const WhereWordsGo = () => {
  return (
    <section className="bg-[#F3F2EF] pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="container">
        <h2 className="text-center text-[clamp(3rem,9vw,10rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
          Where the Words Go.
        </h2>

        <div className="hidden lg:block relative">
          <div className="flex items-start justify-between mt-8 relative z-10 px-6">
            <CategoryCard
              title="Non-Fiction"
              img={categories[0].img}
              imgClassName="w-40 h-48"
            />

            <div className="text-center max-w-3xl mx-auto pb-6">
              <p className="leading-relaxed text-lg text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda pariatur quo dolore odit iure. Labore inventore quidem
                fugit numquam facilis, aspernatur optio! Voluptatum, eveniet
                sint mollitia amet cum libero tenetur?
              </p>
            </div>

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
          <p className="text-center text-sm text-neutral-500 mb-8">
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

        <div className="flex flex-wrap justify-center items-center gap-4 mt-14">
          <Button href="/speakings">Speakings</Button>
          <Button href="/contact" variant="outline" icon={GoArrowRight}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhereWordsGo;
