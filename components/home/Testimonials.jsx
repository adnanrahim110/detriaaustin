"use client";

import { reviews } from "@/constants";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Reveal } from "../ui/Reveal";

const Testimonials = () => {
  return (
    <section className="relative bg-white overflow-hidden section-padding">
      <div className="absolute right-0 top-[20%] h-100 w-125 rounded-full bg-primary-50/60 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] w-full">
          <Reveal
            variant="fade-up"
            duration={0.8}
            delay={0.2}
            className="min-w-0 w-full"
          >
            <div className="relative w-full min-w-0">
              <div className="section-label mb-6">What Readers Say</div>

              <div
                className="absolute -left-4 top-10 text-8xl font-bold text-primary-100/80 select-none pointer-events-none leading-none"
                aria-hidden="true"
              >
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
                    <div className="space-y-8 pl-4">
                      <p className="max-w-xl wrap-break-word text-xl leading-relaxed text-neutral-700 font-medium italic">
                        {review.text}
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=120&q=80"
                          alt={review.name}
                          className="h-12 w-12 rounded-full object-cover ring-2 ring-primary-100"
                          loading="lazy"
                        />
                        <div>
                          <div className="text-sm font-semibold text-neutral-900">
                            {review.name}
                          </div>
                          <div className="text-xs text-neutral-500 font-medium">
                            Verified Reader
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Reveal>

          <Reveal
            variant="fade-left"
            duration={0.8}
            delay={0.4}
            className="relative min-w-0"
          >
            <div className="absolute -left-6 bottom-0 hidden w-52 overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] ring-1 ring-white/50 md:block z-10">
              <img
                src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=420&q=80"
                alt="Reading a book"
                className="h-40 w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="ml-auto w-full max-w-sm rounded-4xl bg-white/40 border border-neutral-200/50 backdrop-blur-md shadow-2xl p-2">
              <div className="relative overflow-hidden rounded-3xl shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
                  alt="Author portrait"
                  className="h-72 w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-4 flex items-center justify-between">
                <p className="text-xs text-neutral-500 font-medium">
                  Follow along
                </p>
                <div className="flex items-center gap-2">
                  <a
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all hover:border-primary-500 hover:text-primary-700 hover:shadow-sm"
                    href="https://www.instagram.com/"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                  </a>
                  <a
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all hover:border-primary-500 hover:text-primary-700 hover:shadow-sm"
                    href="https://www.facebook.com/"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-3.5 w-3.5" />
                  </a>
                  <a
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all hover:border-primary-500 hover:text-primary-700 hover:shadow-sm"
                    href="https://x.com/"
                    aria-label="X"
                  >
                    <Twitter className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
