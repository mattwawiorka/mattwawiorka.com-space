import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
};

export function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="min-h-screen w-full md:pt-56 pt-32">
      {children}
    </section>
  );
}
