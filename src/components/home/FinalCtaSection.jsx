import { Link } from 'react-router-dom'

function FinalCtaSection() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-lilac-500 via-lilac-600 to-lilac-700 p-8 text-center text-white shadow-diffuse-lg md:p-10">
      <p className="font-display text-2xl font-bold md:text-3xl">Let&apos;s create something meaningful together</p>
      <Link
        to="/contact"
        className="mt-6 inline-block rounded-full bg-white/95 px-7 py-2.5 text-sm font-semibold text-lilac-700 shadow-soft transition duration-300 hover:scale-[1.03] hover:bg-white"
      >
        Contact Me
      </Link>
    </section>
  )
}

export default FinalCtaSection
