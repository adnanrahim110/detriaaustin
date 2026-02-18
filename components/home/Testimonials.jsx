"use client";

import { reviews } from "@/constants";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] w-full">
          <div className="min-w-0 w-full">
            <div className="relative w-full min-w-0">
              <div className="text-6xl font-semibold text-primary-700 sm:text-7xl">
                &ldquo;
              </div>
              <Swiper
                modules={[Autoplay, EffectFade]}
                slidesPerView={1}
                loop={reviews.length > 1}
                autoHeight
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={
                  reviews.length > 1
                    ? { delay: 6000, disableOnInteraction: false }
                    : false
                }
                className="min-w-0 w-full overflow-hidden"
              >
                {reviews.map((review) => (
                  <SwiperSlide key={review.name}>
                    <div className="space-y-10">
                      <p className="max-w-xl wrap-break-word text-2xl leading-snug text-neutral-700 sm:text-2xl">
                        {review.text}
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=120&q=80"
                          alt={review.name}
                          className="h-12 w-12 rounded-full object-cover"
                          loading="lazy"
                        />
                        <div>
                          <div className="text-sm font-semibold text-neutral-900">
                            {review.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -left-6 bottom-0 hidden w-52 overflow-hidden rounded-3xl shadow-lg md:block">
              <img
                src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=420&q=80"
                alt="Reading a book"
                className="h-40 w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="ml-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
                  alt="Author portrait"
                  className="h-72 w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-neutral-600">
                  Find me on social networks
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition hover:border-primary-500 hover:text-primary-700"
                    href="https://www.instagram.com/"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition hover:border-primary-500 hover:text-primary-700"
                    href="https://www.facebook.com/"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition hover:border-primary-500 hover:text-primary-700"
                    href="https://x.com/"
                    aria-label="X"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
