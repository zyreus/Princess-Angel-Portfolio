import { IconHeartSm, IconStarSm } from '../icons/LineIcons'

function TaglineSection() {
  return (
    <section className="animate-fadeInUp rounded-3xl border border-lilac-200/50 bg-gradient-to-r from-white/90 via-accent-pink/25 to-accent-sky/20 p-8 text-center shadow-diffuse md:p-10">
      <p className="flex flex-wrap items-center justify-center gap-2 font-display text-lg font-semibold text-lilac-800 md:text-xl">
        <IconStarSm className="h-5 w-5 text-lilac-400" aria-hidden />
        <span>Creative mind. Technical thinker. Visual storyteller.</span>
        <IconHeartSm className="h-5 w-5 text-accent-pink-deep/80" aria-hidden />
      </p>
    </section>
  )
}

export default TaglineSection
