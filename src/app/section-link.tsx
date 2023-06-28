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
    <Link href={`#${id}`} scroll={false} className="font-bold">
      {children}
    </Link>
  );
};
