import SectionTitle from '../components/SectionTitle'
import SectionDivider from '../components/home/SectionDivider'

function Contact() {
  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-52 w-52 rounded-full bg-accent-pink/25 blur-3xl" />
      </div>
      <SectionTitle
        eyebrow="Contact"
        title="Let's Work Together"
        subtitle="Feel free to connect for creative collaborations, project opportunities, or technical partnerships."
      />

      <div className="grid gap-6">
        <article className="card-cute animate-fadeInUp p-6 md:p-8">
          <h3 className="text-cute-gradient font-display text-xl font-bold">Contact Information</h3>
          <div className="mt-4 space-y-3 text-sm text-lilac-900/90">
            <p>
              Email:{' '}
              <a
                href="mailto:princessangel.paslot@gmail.com"
                className="font-medium text-lilac-700 underline decoration-lilac-200 underline-offset-2 transition hover:text-lilac-800"
              >
                princessangel.paslot@gmail.com
              </a>
            </p>
            <p>
              GitHub:{' '}
              <a
                href="https://github.com/princesspaslot"
                className="font-medium text-lilac-700 underline decoration-lilac-200 underline-offset-2 transition hover:text-lilac-800"
              >
                github.com/princesspaslot
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/princess-angel-paslot-03568b315/"
                className="font-medium text-lilac-700 underline decoration-lilac-200 underline-offset-2 transition hover:text-lilac-800"
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
