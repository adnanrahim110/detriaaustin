"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Minus } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const speakingTopics = [
  {
    title: "Serving Is a Superpower",
    description:
      "Stories and lessons on how service becomes real strength—steady, practical, and lasting.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    alt: "Speaker addressing an audience",
  },
  {
    title: "Lead With Clarity",
    description:
      "Simple frameworks for making better decisions, building trust, and keeping teams aligned.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    alt: "Team collaborating around a table",
  },
  {
    title: "Service That Builds Community",
    description:
      "How consistent action, shared responsibility, and partnerships create change that holds.",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80",
    alt: "People working together in a community setting",
  },
  {
    title: "Stability, Opportunity, and Voice",
    description:
      "A grounded focus on housing and financial literacy as pathways to dignity and upward movement.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    alt: "Hands exchanging house keys",
  },
  {
    title: "Raising the Next Leaders",
    description:
      "Support and tools for emerging leaders to grow confidence, serve well, and lead with integrity.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    alt: "Mentor speaking with a young professional",
  },
];

const Speakings = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const activeTopic = speakingTopics[activeIndex];

  const descriptionVariants = prefersReducedMotion
    ? { collapsed: { opacity: 0 }, expanded: { opacity: 1 } }
    : {
        collapsed: { height: 0, opacity: 0 },
        expanded: { height: "auto", opacity: 1 },
      };

  const imageVariants = prefersReducedMotion
    ? { enter: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        enter: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.97 },
      };

  return (
    <section className="relative overflow-hidden bg-[#F3F2EF] section-padding">
      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          <div className="divide-y divide-neutral-200/60 border-b border-neutral-200/60">
            <Reveal variant="fade-up" duration={0.8} className="pb-5">
              <div className="section-label mb-4">Speaking</div>
              <h2 className="section-title max-w-2xl">
                Not every superpower looks loud.{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-800 to-neutral-500">
                  Some look like service.
                </span>
              </h2>
            </Reveal>
            {speakingTopics.map((topic, index) => {
              const isActive = activeIndex === index;
              return (
                <Reveal
                  as="div"
                  variant="fade-up"
                  duration={0.8}
                  delay={0.08 * index}
                  key={topic.title}
                >
                  <button
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isActive}
                    className="w-full text-left py-6 lg:py-8 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-xs font-bold tracking-wide transition-colors duration-200 ${
                            isActive ? "text-primary-700" : "text-neutral-400"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-lg lg:text-xl font-semibold transition-colors duration-200 ${
                            isActive
                              ? "text-primary-800"
                              : "text-neutral-900 group-hover:text-primary-700"
                          }`}
                        >
                          {topic.title}
                        </span>
                      </div>
                      <motion.span
                        className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "bg-primary-50 border-primary-200 text-primary-700"
                            : "bg-white border-neutral-200 text-neutral-500 group-hover:border-primary-200 group-hover:text-primary-600"
                        }`}
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        {isActive ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </motion.span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          variants={descriptionVariants}
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          transition={{
                            duration: prefersReducedMotion ? 0 : 0.3,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 pl-10 max-w-lg text-[15px] leading-relaxed text-neutral-600 font-medium">
                            {topic.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <div className="hidden lg:block lg:sticky lg:top-28">
            <Reveal variant="fade-left" duration={0.8} delay={0.3}>
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] ring-1 ring-neutral-200/50">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTopic.image}
                    src={activeTopic.image}
                    alt={activeTopic.alt}
                    variants={imageVariants}
                    initial="exit"
                    animate="enter"
                    exit="exit"
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeTopic.title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.3,
                      }}
                      className="text-white text-sm font-semibold"
                    >
                      {activeTopic.title}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakings;
