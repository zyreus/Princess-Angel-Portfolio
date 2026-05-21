import { useState } from 'react'
import { Code2, ExternalLink, Layers3, X } from 'lucide-react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

function ProjectCard({ title, role, description, stack, category, image, stats = [], liveUrl, githubUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const gallery = image ? [image, image, image] : []

  return (
    <article className="group glass-card glass-card-hover overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-lilac-50">
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-lilac-900/55 via-lilac-900/10 to-transparent" />
        <span className="premium-pill absolute left-4 top-4 bg-white/90">{category}</span>
      </div>
      <div className="p-6">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-lilac-600">
          <Layers3 className="h-3.5 w-3.5" />
          {role}
        </p>
        <h3 className="mt-3 text-2xl font-bold text-lilac-900">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-lilac-900/80">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((tag) => (
            <span key={tag} className="rounded-full border border-lilac-200/70 bg-white/90 px-3 py-1 text-xs font-semibold text-lilac-700">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => setIsModalOpen(true)} className="premium-button-secondary px-4 py-2">
            Preview
          </button>
          <a href={liveUrl} target="_blank" rel="noreferrer" className="premium-button px-4 py-2">
            <ExternalLink className="h-4 w-4" />
            Live
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="premium-button-secondary px-4 py-2">
            <Code2 className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
      {isModalOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-lilac-900/55 p-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-[2rem] border border-lilac-200/60 bg-white shadow-diffuse-lg"
            onClick={(event) => event.stopPropagation()}
          >
            {gallery.length > 0 ? (
              <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="max-h-72 w-full">
                {gallery.map((item, index) => (
                  <SwiperSlide key={`${title}-slide-${index}`}>
                    <img src={item} alt={`${title} preview ${index + 1}`} className="h-72 w-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : null}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-kicker">{category}</p>
                  <h4 className="mt-2 text-2xl font-bold text-lilac-900">{title}</h4>
                </div>
                <button type="button" onClick={() => setIsModalOpen(false)} className="rounded-full border border-lilac-200/70 p-2 text-lilac-700 hover:text-lilac-900">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-4 text-sm leading-7 text-lilac-900/80">{description}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item} className="rounded-2xl border border-lilac-200/70 bg-lilac-50/80 p-4 text-sm font-semibold text-lilac-800">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((tag) => (
                  <span key={`${title}-modal-${tag}`} className="rounded-full bg-lilac-100/80 px-3 py-1 text-xs font-medium text-lilac-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  )
}

export default ProjectCard
