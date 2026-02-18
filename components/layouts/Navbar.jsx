"use client";

import { nav_links } from "@/constants";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-1.5">
        <Link href="/" className="flex items-center gap-3 text-neutral-800">
          <Image
            width={500}
            height={250}
            src="/imgs/logo.png"
            className="w-48 h-auto"
            alt="Logo - Detria Austin"
          />
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
