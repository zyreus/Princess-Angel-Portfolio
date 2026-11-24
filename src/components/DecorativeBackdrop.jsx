/**
 * Global background layer:
 *  - Very light lavender base tint
 *  - Subtle dot grid matching the About Me reference
 *  - Two soft purple ambient blobs for depth
 */
function DecorativeBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern" />

      {/* Ambient blobs — keep them very subtle */}
      <div className="absolute -top-40 -left-24 h-96 w-96 rounded-full bg-lilac-100/50 blur-3xl" />
      <div className="absolute top-1/2 -right-28 h-80 w-80 rounded-full bg-lilac-100/35 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-lilac-100/30 blur-3xl" />
    </div>
  )
}

export default DecorativeBackdrop
