"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { GoArrowDownRight } from "react-icons/go";

const Button = ({
  children,
  href = "",
  onClick,
  disabled = false,
  type = "button",
  icon: Icon = GoArrowDownRight,
  className = "",
  iconClassName = "",
  variant = "primary",
  size = "lg",
  ...props
}) => {
  const Tag = href ? Link : "button";

  const baseClasses =
    "group flex relative items-center justify-between gap-4 rounded-xl font-semibold transition-all duration-300 ease-in-out overflow-hidden";

  const variants = {
    primary:
      "bg-primary-600 text-white before:w-full before:h-0 before:absolute before:bottom-0 before:left-0 before:bg-primary-800 hover:before:h-full before:transition-all before:duration-300 before:ease-in-out",
    outline:
      "pb-3 text-lg gap-6 rounded-none border-b border-neutral-600 text-neutral-800 before:absolute before:p-0.5 before:w-full before:bottom-0 before:-left-full before:bg-black hover:before:left-0 before:transition-all before:duration-300 before:ease-in-out hover:text-black",
  };

  const sizes = {
    sm: "px-4 py-3",
    lg: "px-5 py-4 text-base",
  };

  return (
    <Tag
      {...(href
        ? { href: href }
        : { onClick: onClick, type: type, disabled: disabled })}
      {...props}
      className={cn(
        baseClasses,
        variants[variant],
        variant === "primary" && sizes[size],
        className,
      )}
    >
      <span className="relative z-1">{children}</span>
      <Icon
        className={cn(
          "transition-all duration-300 ease-in-out group-hover:translate-x-px group-hover:-rotate-45",
          iconClassName,
          size === "sm" ? "size-5.5" : "size-6.5",
        )}
      />
    </Tag>
  );
};

export default Button;
