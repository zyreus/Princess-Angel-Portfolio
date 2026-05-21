function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 space-y-4 text-center md:mb-12">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="font-display text-2xl font-bold text-lilac-900 sm:text-3xl md:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      <div className="mx-auto h-px w-28 rounded-full bg-gradient-to-r from-transparent via-lilac-300 to-transparent" />
      {subtitle ? (
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-lilac-900/75 md:text-base">{subtitle}</p>
      ) : null}
    </div>
  )
}

export default SectionTitle
