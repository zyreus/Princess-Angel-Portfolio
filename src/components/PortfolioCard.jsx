function PortfolioCard({ title, description, skills = [], mediaEmbeds = [], mediaImages = [] }) {
  return (
    <article className="animate-fadeInUp rounded-3xl border border-purple-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <h3 className="mb-2 text-xl font-semibold text-black">{title}</h3>
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      {skills.length > 0 && (
        <ul className="mb-4 space-y-1 text-sm text-gray-700">
          {skills.map((skill) => (
            <li key={`${title}-${skill}`}>- {skill}</li>
          ))}
        </ul>
      )}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={`${title}-${item}`}
            className="aspect-square rounded-2xl bg-gradient-to-br from-purple-200 via-purple-100 to-white p-2"
          >
            {mediaEmbeds[item - 1] ? (
              <div className="h-full overflow-hidden rounded-xl border border-purple-300 bg-black">
                <iframe
                  src={mediaEmbeds[item - 1]}
                  title={`${title} sample ${item}`}
                  className="h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : mediaImages[item - 1] ? (
              <div className="h-full overflow-hidden rounded-xl border border-purple-300 bg-white">
                <img src={mediaImages[item - 1]} alt={`${title} sample ${item}`} className="h-full w-full object-cover" />
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-purple-300 bg-white/70 text-center text-xs text-purple-600">
                Placeholder {item}
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  )
}

export default PortfolioCard
