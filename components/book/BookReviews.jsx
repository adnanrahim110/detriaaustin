import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Maya Elston",
    role: "Community Leader",
    quote:
      "Detria brings clarity and conviction. The message is grounded, practical, and deeply inspiring.",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Talia Ridge",
    role: "Nonprofit Founder",
    quote:
      "Professional, intuitive, and easy to work with. The process feels seamless from start to finish.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
  },
];

const BookReviews = () => {
  return (
    <section className="bg-white">
      <div className="container py-16 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.25fr]">
          <div className="overflow-hidden rounded-3xl bg-neutral-100 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80"
              alt="Speaker smiling in front of books"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-8">
            <div className="grid gap-6 lg:items-start">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
                  When the Work
                  <br />
                  Speaks for Itself.
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                  Shared work, thoughtful outcomes. Grateful to collaborate with
                  organizations who care as much about people as the mission.
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="relative rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-11 w-11 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-neutral-700">
                    {testimonial.quote}
                  </p>

                  <div className="pointer-events-none absolute bottom-5 right-6 text-5xl font-black text-neutral-300">
                    &rdquo;
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                aria-label="Previous"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:border-neutral-300 hover:text-neutral-900"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:border-neutral-300 hover:text-neutral-900"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookReviews;
