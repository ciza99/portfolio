"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { SectionIdType } from "./types";

export const SectionLink = ({
  id,
  children,
}: {
  id: SectionIdType;
  children: ReactNode;
}) => {
  return (
    <Link
      href={`#${id}`}
      scroll={false}
      className="relative font-bold hover:text-primary transition-colors duration-200 before:content-[''] before:h-0.5 before:bg-white before:rounded-full hover:before:bg-primary before:w-0 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 hover:before:w-full before:transition-all"
    >
      {children}
    </Link>
  );
};
