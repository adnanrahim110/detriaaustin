"use client";

import { nav_links, social_links } from "@/constants";
import { Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const Footer = () => {
  const year = new Date().getFullYear();
  const contactHref = nav_links.find((link) => link.href === "/contact")?.href;
  const speakingsHref = nav_links.find(
    (link) => link.href === "/speakings",
  )?.href;

  const navSplitIndex = Math.ceil(nav_links.length / 2);
  const navPrimary = nav_links.slice(0, navSplitIndex);
  const navSecondary = nav_links.slice(navSplitIndex);

  return (
    <footer className="bg-white">
      <div className="container pt-6 pb-5">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-950 text-white">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,86,159,0.35),transparent_55%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[56px_56px]"
            aria-hidden="true"
          />

          <div className="relative px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr_0.9fr]">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 text-white"
                >
                  <Image
                    width={500}
                    height={500}
                    src="/imgs/logo-w.png"
                    alt="Logo- Detria Austin"
                    className="w-68 h-auto"
                  />
                </Link>

                <p className="max-w-xs text-sm leading-relaxed text-white/70">
                  Transforming lives through service, leadership, and collective
                  action.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                    Navigation
                  </p>
                  <div className="space-y-3 text-sm">
                    {navPrimary.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-white/75 transition hover:text-white"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                    Explore
                  </p>
                  <div className="space-y-3 text-sm">
                    {navSecondary.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-white/75 transition hover:text-white"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Connect
                </p>
                <p className="text-sm leading-relaxed text-white/70">
                  Follow along for updates and announcements.
                </p>
                <div className="flex flex-wrap gap-3">
                  {social_links.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                        href={social.href}
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
              <p>© {year} Detria Austin Everson. All rights reserved.</p>
              <p className="text-white/40">Serving is a superpower.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
