import { Link } from 'react-router-dom'

function FinalCtaSection() {
  return (
    <section className="rounded-2xl bg-gradient-to-r from-purple-600 to-violet-500 p-8 text-center text-white shadow-soft">
      <p className="text-2xl font-semibold md:text-3xl">Let&apos;s create something meaningful together</p>
      <Link
        to="/contact"
        className="mt-5 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-purple-700 transition duration-300 hover:scale-[1.03]"
      >
        Contact Me
      </Link>
    </section>
  )
}

export default FinalCtaSection
