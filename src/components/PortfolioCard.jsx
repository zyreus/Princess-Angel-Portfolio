import { useState } from 'react'

function PortfolioCard({
  title,
  description,
  skills = [],
  mediaEmbeds = [],
  mediaImages = [],
  mediaLinks = [],
  hintText = '',
  mediaOnly = false,
  placeholderCount = 3,
}) {
  const [lightbox, setLightbox] = useState(null)
  const totalSlots = Math.max(placeholderCount, mediaEmbeds.length, mediaImages.length)

  return (
    <article className="animate-fadeInUp rounded-3xl border border-lilac-200/50 bg-white/90 p-6 shadow-diffuse transition duration-300 hover:-translate-y-0.5 hover:shadow-diffuse-lg">
      {!mediaOnly && <h3 className="text-cute-gradient font-display text-lg font-bold sm:text-xl">{title}</h3>}
      {!mediaOnly && <p className="mb-4 text-sm leading-relaxed text-lilac-900/85">{description}</p>}
      {!mediaOnly && skills.length > 0 && (
        <ul className="mb-4 space-y-1.5 text-sm text-lilac-900/90">
          {skills.map((skill) => (
            <li key={`${title}-${skill}`}>- {skill}</li>
          ))}
        </ul>
      )}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {Array.from({ length: totalSlots }, (_, index) => index + 1).map((item) => (
          <div
            key={`${title}-${item}`}
            className="aspect-square rounded-2xl bg-gradient-to-br from-lilac-200/80 via-lilac-100/60 to-white p-2"
          >
            {(() => {
              const mediaLink = mediaLinks[item - 1]

              if (mediaEmbeds[item - 1]) {
                const embedElement = (
                  <div className="h-full overflow-hidden rounded-xl border border-lilac-200/70 bg-black">
                    <iframe
                      src={mediaEmbeds[item - 1]}
                      title={`${title} sample ${item}`}
                      className="h-full w-full"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )

                return mediaLink ? (
                  <a href={mediaLink} target="_blank" rel="noreferrer" className="block h-full">
                    {embedElement}
                  </a>
                ) : (
                  embedElement
                )
              }

              if (mediaImages[item - 1]) {
                const imageElement = (
                  <div className="group relative h-full w-full overflow-hidden rounded-xl border border-lilac-200/80 bg-white">
                    <button
                      type="button"
                      onClick={() => {
                        if (mediaLink) {
                          window.open(mediaLink, '_blank', 'noopener,noreferrer')
                          return
                        }

                        setLightbox({
                          src: mediaImages[item - 1],
                          label: `${title} - ${skills[0] || 'Portfolio Work'}`,
                          link: mediaLink,
                        })
                      }}
                      className="h-full w-full cursor-zoom-in"
                    >
                      <img
                        src={mediaImages[item - 1]}
                        alt={`${title} sample ${item}`}
                        className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
                      />
                    </button>
                    {!mediaOnly && (
                      <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-lilac-900/55 to-transparent p-2 opacity-0 transition duration-300 group-hover:opacity-100">
                        <p className="text-left text-xs font-medium text-white">
                          {title}
                          <span className="block text-[11px] text-lilac-200">{skills[0] || 'Creative Work'}</span>
                        </p>
                      </div>
                    )}
                  </div>
                )
                return imageElement
              }

              return (
                <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-lilac-200/80 bg-white/80 text-center text-xs text-lilac-600">
                  Placeholder {item}
                </div>
              )
            })()}
          </div>
        ))}
      </div>
      {!mediaOnly && hintText ? <p className="mt-3 text-xs font-medium text-lilac-700">{hintText}</p> : null}
      {lightbox ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-lilac-900/70 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#1e1a2e]"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={lightbox.src} alt={lightbox.label} className="max-h-[70vh] w-full object-contain" />
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm text-white">
              <p>{lightbox.label}</p>
              <div className="flex items-center gap-2">
                {lightbox.link ? (
                  <a
                    href={lightbox.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/25 px-3 py-1 text-xs"
                  >
                    Open Link
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="rounded-full border border-white/25 px-3 py-1 text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  )
}

export default PortfolioCard
