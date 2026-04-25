import SectionTitle from '../components/SectionTitle'

function Contact() {
  return (
    <section className="py-10 md:py-14">
      <SectionTitle
        eyebrow="Contact"
        title="Let's Work Together"
        subtitle="Feel free to connect for creative collaborations, project opportunities, or technical partnerships."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <article className="animate-fadeInUp rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-black">Contact Information</h3>
          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <p>
              Email:{' '}
              <a href="mailto:princessangel.paslot@gmail.com" className="font-medium text-purple-700 hover:underline">
                princessangel.paslot@gmail.com
              </a>
            </p>
            <p>
              GitHub:{' '}
              <a href="https://github.com/princesspaslot" className="font-medium text-purple-700 hover:underline">
                github.com/princesspaslot
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/princess-angel-paslot-03568b315/"
                className="font-medium text-purple-700 hover:underline"
              >
                linkedin.com/in/princess-angel-paslot-03568b315
              </a>
            </p>
          </div>
        </article>

        <form className="animate-fadeInUp space-y-4 rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-black">Quick Message</h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border border-purple-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-purple-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500"
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full rounded-xl border border-purple-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500"
          />
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:shadow-soft"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
