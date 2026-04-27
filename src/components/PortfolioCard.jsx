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
    <article className="animate-fadeInUp rounded-3xl border border-purple-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      {!mediaOnly && <h3 className="mb-2 text-lg font-semibold text-black sm:text-xl">{title}</h3>}
      {!mediaOnly && <p className="mb-4 text-sm text-gray-600">{description}</p>}
      {!mediaOnly && skills.length > 0 && (
        <ul className="mb-4 space-y-1 text-sm text-gray-700">
          {skills.map((skill) => (
            <li key={`${title}-${skill}`}>- {skill}</li>
          ))}
        </ul>
      )}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {Array.from({ length: totalSlots }, (_, index) => index + 1).map((item) => (
          <div
            key={`${title}-${item}`}
            className="aspect-square rounded-2xl bg-gradient-to-br from-purple-200 via-purple-100 to-white p-2"
          >
            {(() => {
              const mediaLink = mediaLinks[item - 1]

              if (mediaEmbeds[item - 1]) {
                const embedElement = (
                  <div className="h-full overflow-hidden rounded-xl border border-purple-300 bg-black">
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
                  <div className="group relative h-full w-full overflow-hidden rounded-xl border border-purple-300 bg-white">
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
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    </button>
                    {!mediaOnly && (
                      <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 transition duration-300 group-hover:opacity-100">
                        <p className="text-left text-xs font-medium text-white">
                          {title}
                          <span className="block text-[11px] text-purple-200">{skills[0] || 'Creative Work'}</span>
                        </p>
                      </div>
                    )}
                  </div>
                )
                return imageElement
              }

              return (
              <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-purple-300 bg-white/70 text-center text-xs text-purple-600">
                Placeholder {item}
              </div>
              )
            })()}
          </div>
        ))}
      </div>
      {!mediaOnly && hintText ? <p className="mt-3 text-xs font-medium text-purple-700">{hintText}</p> : null}
      {lightbox ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-black"
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
                    className="rounded-full border border-white/30 px-3 py-1 text-xs"
                  >
                    Open Link
                  </a>
                ) : null}
                <button type="button" onClick={() => setLightbox(null)} className="rounded-full border border-white/30 px-3 py-1 text-xs">
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
