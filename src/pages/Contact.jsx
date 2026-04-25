import SectionTitle from '../components/SectionTitle'
import SectionDivider from '../components/home/SectionDivider'

function Contact() {
  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-52 w-52 rounded-full bg-purple-200/35 blur-3xl" />
      </div>
      <SectionTitle
        eyebrow="Contact"
        title="Let's Work Together"
        subtitle="Feel free to connect for creative collaborations, project opportunities, or technical partnerships."
      />

      <div className="grid gap-6">
        <article className="animate-fadeInUp rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft backdrop-blur-sm">
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
      </div>
      <SectionDivider />
    </section>
  )
}

export default Contact
