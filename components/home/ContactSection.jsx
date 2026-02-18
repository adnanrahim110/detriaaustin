"use client";

import { Clock, Mail } from "lucide-react";
import Button from "../ui/Button";

const ContactSection = () => {
  return (
    <section className="bg-white">
      <div className="container py-16 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-10 shadow-sm sm:px-10 lg:px-14 lg:py-12">
          <div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-100/70 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-primary-50 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
                Ready To Talk?
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                Questions, review requests, press, or collaborations, share the
                details and a response will follow shortly.
              </p>

              <div className="grid gap-4 ">
                <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-700 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-900">Email</p>
                    <p className="text-neutral-500">your@domain.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-700 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-900">Response</p>
                    <p className="text-neutral-500">Within 48 hours</p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                Accepting new projects
              </div>
            </div>

            <form className="rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-neutral-600">
                  Name
                  <input
                    type="text"
                    name="name"
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm text-neutral-600">
                  Email
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    placeholder="you@email.com"
                  />
                </label>
              </div>

              <label className="mt-4 block text-sm text-neutral-600">
                Project Summary
                <textarea
                  name="message"
                  rows="5"
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  placeholder="Tell me about your goals, timeline, and scope."
                />
              </label>

              <div className="mt-6">
                <Button className="w-full justify-center rounded-full">
                  Send Inquiry
                </Button>
                <p className="mt-3 text-xs text-neutral-500">
                  By submitting, you agree to receive a response regarding this
                  inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
