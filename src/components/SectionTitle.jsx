function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8 space-y-3 text-center md:mb-10">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold text-black md:text-4xl">{title}</h2>
      {subtitle ? <p className="mx-auto max-w-3xl text-gray-600">{subtitle}</p> : null}
    </div>
  )
}

export default SectionTitle
