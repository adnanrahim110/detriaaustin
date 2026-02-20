"use client";

import { reviews } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Reveal } from "../ui/Reveal";

const BookReviews = () => {
  const swiperRef = useRef(null);

  return (
    <section className="relative bg-[#F3F2EF] section-padding overflow-hidden">
      <div
        className="absolute left-0 top-[10%] h-100 w-125 rounded-full bg-primary-50/60 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.25fr]">
          <Reveal
            variant="fade-right"
            duration={0.8}
            className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-neutral-200/50"
          >
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80"
              alt="Speaker smiling in front of books"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>

          <Reveal
            variant="fade-left"
            duration={0.8}
            delay={0.2}
            className="space-y-8 min-w-0"
          >
            <div className="grid gap-6 lg:items-start">
              <div className="space-y-4">
                <div className="section-label">What People Say</div>
                <h2 className="section-title">
                  When the Work
                  <br />
                  Speaks for Itself.
                </h2>
                <p className="max-w-xl section-body">
                  Shared work, thoughtful outcomes. Grateful to collaborate with
                  organizations who care as much about people as the mission.
                </p>
              </div>
            </div>

            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              spaceBetween={24}
              loop={reviews.length > 2}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                },
              }}
              className="w-full min-w-0"
            >
              {reviews.map((testimonial) => (
                <SwiperSlide key={testimonial.name} className="h-auto">
                  <div className="relative rounded-3xl border border-neutral-200/60 bg-white/70 backdrop-blur-xs p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] ring-1 ring-neutral-200/50">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-11 w-11 rounded-full object-cover ring-2 ring-primary-100"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 section-body">{testimonial.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:border-primary-300 hover:text-primary-700 hover:shadow-md"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:border-primary-300 hover:text-primary-700 hover:shadow-md"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BookReviews;
