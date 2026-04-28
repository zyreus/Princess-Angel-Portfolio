import { IconHeartSm, IconStarSm } from './icons/LineIcons'

function Footer() {
  return (
    <footer className="mt-10 border-t border-lilac-200/50 bg-gradient-to-b from-white/60 to-lilac-50/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:gap-5 md:flex-row md:px-8 md:text-left">
        <div>
          <p className="flex items-center justify-center gap-1.5 font-display text-sm font-bold text-lilac-700 md:justify-start">
            <IconStarSm className="h-4 w-4 text-lilac-400" aria-hidden />
            Princess Angel Paslot
            <IconHeartSm className="h-3.5 w-3.5 text-accent-pink-deep/80" aria-hidden />
          </p>
          <p className="mt-1 break-all text-sm text-lilac-800/80 sm:break-normal">princessangel.paslot@gmail.com</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-lilac-800/90 md:justify-end">
          <a
            href="https://github.com/princesspaslot"
            className="rounded-full px-2 py-1 transition hover:bg-lilac-100/80 hover:text-lilac-700"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/princess-angel-paslot-03568b315/"
            className="rounded-full px-2 py-1 transition hover:bg-lilac-100/80 hover:text-lilac-700"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
