"use client";

import { Clock, Mail } from "lucide-react";
import Button from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const ContactSection = () => {
  return (
    <section className="bg-[#F3F2EF] section-padding">
      <div className="container">
        <Reveal
          variant="fade-up"
          duration={0.8}
          delay={0.2}
          className="relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-white/80 backdrop-blur-md px-6 py-10 shadow-[0_20px_40px_rgba(0,0,0,0.05)] ring-1 ring-white sm:px-10 lg:px-14 lg:py-12"
        >
          <div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-100/70 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-primary-50 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <div className="section-label">Get In Touch</div>
              <h2 className="section-title">Ready To Talk?</h2>
              <p className="max-w-xl section-body">
                Questions, review requests, press, or collaborations, share the
                details and a response will follow shortly.
              </p>

              <div className="grid gap-4">
                <div className="flex items-start gap-3 rounded-2xl border border-neutral-200/60 bg-white/70 backdrop-blur-xs p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all hover:bg-white hover:shadow-lg">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">
                      Email
                    </p>
                    <p className="text-sm text-neutral-500 font-medium">
                      your@domain.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-neutral-200/60 bg-white/70 backdrop-blur-xs p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all hover:bg-white hover:shadow-lg">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">
                      Response
                    </p>
                    <p className="text-sm text-neutral-500 font-medium">
                      Within 48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="rounded-2xl border border-neutral-200/60 bg-white/60 p-6 shadow-xl backdrop-blur-md sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-[13px] font-semibold text-neutral-700">
                  Name
                  <input
                    type="text"
                    name="name"
                    className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white/50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:border-primary-300 focus:ring-4 focus:ring-primary-100/50 focus:bg-white"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-[13px] font-semibold text-neutral-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white/50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:border-primary-300 focus:ring-4 focus:ring-primary-100/50 focus:bg-white"
                    placeholder="you@email.com"
                  />
                </label>
              </div>

              <label className="mt-4 block text-[13px] font-semibold text-neutral-700">
                Project Summary
                <textarea
                  name="message"
                  rows="5"
                  className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white/50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:border-primary-300 focus:ring-4 focus:ring-primary-100/50 focus:bg-white"
                  placeholder="Tell me about your goals, timeline, and scope."
                />
              </label>

              <div className="mt-6">
                <Button className="w-full justify-center rounded-full">
                  Send Inquiry
                </Button>
                <p className="mt-3 text-xs text-neutral-500 font-medium text-center">
                  By submitting, you agree to receive a response regarding this
                  inquiry.
                </p>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
