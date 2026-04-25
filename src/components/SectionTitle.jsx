function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8 space-y-3 text-center md:mb-10">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold text-black sm:text-3xl md:text-4xl">
        <span className="bg-gradient-to-r from-purple-700 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
      {subtitle ? <p className="mx-auto max-w-3xl text-sm text-gray-600 md:text-base">{subtitle}</p> : null}
    </div>
  )
}

export default SectionTitle
