import { GradientBackground } from "./ui/marine-horizon";

/**
 * The Marine Horizon gradient, tamed enough to sit behind black type, in one
 * place so the hero and the closing stretch cannot drift apart. Matching them
 * by hand would mean copying a blur, an opacity and two veils and keeping all
 * four in step.
 *
 * The raw conic runs to a near-black navy, so it is blurred into a wash and
 * then veiled: white through the middle to protect the copy, and white along
 * the edge where the section meets the page background.
 *
 * `anchor` is the side the colour comes from. The hero pours in from the top;
 * the closing section mirrors it from the bottom, which bookends the page in
 * the same blue instead of ending on an unrelated hue.
 */
export default function MarineWash({
  anchor = "top",
}: {
  anchor?: "top" | "bottom";
}) {
  const fromBottom = anchor === "bottom";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Mirrored, not rotated. Rotating a conic gradient swings a different
          quadrant into view, and this one's next quadrant is the near-black
          navy, which came back measurably bluer than the hero. Flipping on
          one axis moves the same colour to the other edge. */}
      <div
        className={`absolute -inset-[30%] opacity-[0.45] blur-[100px] ${
          fromBottom ? "-scale-y-100" : ""
        }`}
      >
        <GradientBackground />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(58%_52%_at_50%_44%,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.66)_46%,rgba(255,255,255,0)_100%)]" />

      <div
        className={`absolute inset-x-0 h-48 from-transparent to-paper ${
          fromBottom ? "top-0 bg-gradient-to-t" : "bottom-0 bg-gradient-to-b"
        }`}
      />
    </div>
  );
}
