/**
 * SectionHeading — the single source of truth for every section title.
 *
 * eyebrow  : small uppercase label above the heading (e.g. "About Me")
 * title    : the main heading — rendered with the purple gradient
 * subtitle : optional supporting sentence in secondary text
 * align    : 'center' (default) | 'left'
 */
function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const isLeft = align === 'left'

  return (
    <div className={`${isLeft ? '' : 'mx-auto text-center'} max-w-3xl`}>
      {eyebrow ? (
        <p className="section-kicker">{eyebrow}</p>
      ) : null}

      <h2 className="page-heading mt-2 text-2xl sm:text-3xl lg:text-[2rem] leading-snug">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-3 text-sm leading-7 text-lilac-900/55 sm:text-[0.95rem] sm:leading-8">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
