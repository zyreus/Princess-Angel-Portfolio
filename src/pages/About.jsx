import SectionTitle from '../components/SectionTitle'
import aboutProfileImage from '../assets/about-profile.png'
import SectionDivider from '../components/home/SectionDivider'

function About() {
  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-purple-200/40 blur-3xl" />
      </div>
      <SectionTitle
        eyebrow="About Me"
        title="Creative and Technical Professional"
        subtitle="I create user-focused digital solutions that balance visual quality, technical reliability, and meaningful user experience."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <article className="animate-fadeInUp rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-black">My Background</h3>
          <p className="mt-4 text-sm leading-relaxed text-justify text-gray-600">
            I am a multidisciplinary IT student with expertise in creative media and system development. My work
            includes photography, videography, video presentation, editing, graphic design, and layouting. I focus
            on delivering outcomes that are visually compelling, technically sound, and user-centered.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-justify text-gray-600">
            As Project Manager and System Analyst of MabuHighTrack, I led system planning, requirement analysis, and
            development coordination to ensure an efficient and user-focused platform. During my On-the-Job Training,
            I also developed a Medical Triage System and a Mental Health Monitoring System for real-world use cases.
          </p>

          <h4 className="mt-6 text-base font-semibold text-purple-700">Experience</h4>
          <ul className="mt-3 space-y-3 text-sm text-gray-700">
            <li>- Project Manager &amp; System Analyst, MabuHighTrack</li>
            <li>- System Planning, Requirement Analysis, and Development Coordination</li>
            <li>- Developed Medical Triage System during OJT</li>
            <li>- Developed Mental Health Monitoring System during OJT</li>
          </ul>
        </article>

        <div className="animate-fadeInUp rounded-3xl bg-gradient-to-br from-purple-100 via-purple-50 to-white p-5 shadow-soft">
          <img
            src={aboutProfileImage}
            alt="Princess Angel portrait"
            className="h-full min-h-72 w-full rounded-2xl object-cover"
          />
        </div>
      </div>
      <SectionDivider />
    </section>
  )
}

export default About
