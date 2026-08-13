// GradientBackground, "Marine Horizon", made with the 21st.dev Gradient
// Builder and exported as live CSS. Zero dependencies: one <div> that fills
// its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=e869fcde-a49a-4916-87e5-98b572947498
//
// Kept as a faithful copy of the export so a new recipe can replace this file
// wholesale. Any toning down for a given surface belongs at the call site,
// not in here. See Hero for how it is softened there.
export function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        containerType: "size",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#EBF6F7",
          backgroundImage:
            "conic-gradient(from 90deg at 50% 50%, #EBF6F7 0%, #A2D7DD 33%, #00A3AF 67%, #274A78 100%)",
        }}
      />
    </div>
  );
}
