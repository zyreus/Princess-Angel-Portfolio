import { Link } from 'react-router-dom'

const creativeItems = ['Photography', 'Videography', 'Editing', 'Graphic Design', 'Layouting', 'Brand Visuals']

function CreativePreviewSection() {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-black md:text-3xl">Creative Works</h2>
          <p className="text-sm text-gray-700">Photography, Videography, Editing, Graphic Design</p>
        </div>
        <Link
          to="/creative-portfolio"
          className="rounded-full border border-purple-300 bg-white px-5 py-2 text-sm font-semibold text-purple-700 transition duration-300 hover:scale-[1.03] hover:border-purple-500 hover:shadow-soft"
        >
          View Creative Portfolio
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {creativeItems.map((item) => (
          <div
            key={item}
            className="group animate-fadeInUp rounded-2xl border border-purple-100 bg-white p-3 shadow-sm transition duration-300 hover:scale-[1.02] hover:shadow-soft"
          >
            <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 via-violet-50 to-white text-center text-sm font-medium text-purple-700">
              {item} Placeholder
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CreativePreviewSection
