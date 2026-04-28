import { Link } from 'react-router-dom'
import photographySample from '../../assets/photography-sample-1.png'
import graphicDesignSample from '../../assets/graphic-design-sample-1.png'
import brandVisualsSample from '../../assets/brand-visuals-sample-1.png'

const creativeItems = ['Photography', 'Videography', 'Editing', 'Graphic Design', 'Layouting', 'Brand Visuals']
const videographyEmbedUrl = 'https://drive.google.com/file/d/1QQ1wOE3oFZuYJVHqZtzyWXBpjx9U5FhF/preview'
const editingEmbedUrl = 'https://drive.google.com/file/d/1rgkegY78eoJYM142OFe_9pN-Meudrv5a/preview'
const layoutingImageUrl = 'https://drive.google.com/thumbnail?id=1n9DFKAU_d-qwn4nnBXkSFnFDUtyTfypP&sz=w1200'

function CreativePreviewSection() {
  return (
    <section className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-lilac-900 md:text-3xl">Creative Works</h2>
          <p className="mt-1 text-sm text-lilac-800/80">Photography, Videography, Editing, Graphic Design</p>
        </div>
        <Link to="/creative-portfolio" className="btn-ghost">
          View Creative Portfolio
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {creativeItems.map((item) => (
          <div
            key={item}
            className="group animate-fadeInUp overflow-hidden rounded-2xl border border-lilac-200/50 bg-white/90 p-3 shadow-diffuse transition duration-300 hover:-translate-y-0.5 hover:shadow-diffuse-lg"
          >
            {item === 'Photography' ? (
              <div className="overflow-hidden rounded-xl border border-lilac-200/70 bg-white">
                <img src={photographySample} alt="Photography sample" className="aspect-[4/3] w-full object-cover" />
              </div>
            ) : item === 'Videography' ? (
              <div className="overflow-hidden rounded-xl border border-lilac-200/70 bg-black">
                <iframe
                  src={videographyEmbedUrl}
                  title="A Day In My Life videography preview"
                  className="aspect-[4/3] w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : item === 'Editing' ? (
              <div className="overflow-hidden rounded-xl border border-lilac-200/70 bg-black">
                <iframe
                  src={editingEmbedUrl}
                  title="Editing showcase preview"
                  className="aspect-[4/3] w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : item === 'Graphic Design' ? (
              <div className="overflow-hidden rounded-xl border border-lilac-200/70 bg-white">
                <img
                  src={graphicDesignSample}
                  alt="Graphic design sample"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            ) : item === 'Layouting' ? (
              <div className="overflow-hidden rounded-xl border border-lilac-200/70 bg-white">
                <img src={layoutingImageUrl} alt="Layouting sample" className="aspect-[4/3] w-full object-cover" />
              </div>
            ) : item === 'Brand Visuals' ? (
              <div className="overflow-hidden rounded-xl border border-lilac-200/70 bg-white">
                <img src={brandVisualsSample} alt="Brand visuals sample" className="aspect-[4/3] w-full object-cover" />
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-lilac-100 via-lilac-50 to-white text-center text-sm font-medium text-lilac-700">
                {item} Placeholder
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default CreativePreviewSection
