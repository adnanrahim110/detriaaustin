"use client";

import { useRef } from "react";
import { reviews } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

const BookReviews = () => {
  const swiperRef = useRef(null);

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

          <div className="space-y-8 min-w-0">
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
                  <div className="relative rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
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
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-neutral-700">
                      {testimonial.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:border-neutral-300 hover:text-neutral-900"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => swiperRef.current?.slideNext()}
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
