function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const isLeft = align === 'left'

  return (
    <div className={`${isLeft ? 'text-left' : 'mx-auto text-center'} max-w-3xl`}>
      {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-bold leading-tight text-lilac-900 sm:text-4xl lg:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-8 text-lilac-900/75">{subtitle}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
