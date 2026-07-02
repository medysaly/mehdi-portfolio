"use client";

export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-10 -mx-6 mb-8 bg-bg/85 px-6 py-5 backdrop-blur-md lg:sr-only">
      <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
        {title}
      </h2>
    </div>
  );
}
