function DecorativeBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden>
      <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-lilac-200/30 blur-3xl" />
      <div className="absolute top-1/3 -right-20 h-80 w-80 animate-float rounded-full bg-lilac-200/35 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent-pink/25 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-accent-sky/20 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.28] [background-image:radial-gradient(circle_at_1.5px_1.5px,rgba(167,139,250,0.22)_1.5px,transparent_0)] [background-size:22px_22px]" />
    </div>
  )
}

export default DecorativeBackdrop
