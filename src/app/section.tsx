"use client";
import { SectionIdType } from "./types";
import { ReactNode } from "react";

export const Section = ({
  id,
  children,
}: {
  id: SectionIdType;
  children: ReactNode;
}) => {
  return (
    <section className="relative">
      <div id={id} className="absolute -top-24" />
      {children}
    </section>
  );
};
