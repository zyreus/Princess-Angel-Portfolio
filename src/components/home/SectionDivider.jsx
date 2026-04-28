function SectionDivider() {
  return (
    <div className="space-y-3 py-2">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-lilac-200/80 to-transparent" />
      <svg viewBox="0 0 1200 70" className="h-7 w-full text-lilac-200/50" preserveAspectRatio="none" aria-hidden>
        <path
          d="M0,40 C180,85 320,0 500,30 C720,65 900,5 1200,40 L1200,70 L0,70 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default SectionDivider
