"use client";

import { nav_links } from "@/constants";
import { cn } from "@/utils/cn";
import { Leaf } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3 text-neutral-800">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-700"
            aria-hidden="true"
          >
            <Leaf className="h-5 w-5" />
          </span>
          <span className="text-xl font-semibold tracking-[0.2em]">DETRIA</span>
        </Link>
        <nav className="hidden items-center gap-8 text-lg font-medium text-neutral-600 md:flex">
          {nav_links.slice(0, -1).map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "border-b-2 border-transparent pb-1 transition hover:border-primary-300 hover:text-primary-700",
                  isActive && "border-primary-700 text-primary-700",
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Button href="/contact" size="sm">
          Contact Now
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
