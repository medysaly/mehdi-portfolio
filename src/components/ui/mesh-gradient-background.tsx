"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export function MeshGradientBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <MeshGradient
        className="h-full w-full"
        colors={["#000000", "#0a0a0a", "#1a1a1a", "#6366f1"]}
        speed={0.4}
      />
    </div>
  );
}
