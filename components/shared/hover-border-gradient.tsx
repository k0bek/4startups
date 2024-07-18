"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { cn } from "@/lib/utils";

export function HoverBorderGradientButton({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div className="flex justify-center text-center" id={id}>
      <HoverBorderGradient
        containerClassName="rounded-full w-full bg-white"
        as="button"
        className={cn(
          "dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
        )}
      >
        <span>{children}</span>
      </HoverBorderGradient>
    </div>
  );
}
