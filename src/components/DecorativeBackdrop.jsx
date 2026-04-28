import { IconHeartSm, IconStarSm } from './icons/LineIcons'

const floaters = [
  { Icon: IconStarSm, className: 'left-[6%] top-[12%] h-6 w-6 text-lilac-300/50' },
  { Icon: IconHeartSm, className: 'right-[10%] top-[18%] h-5 w-5 text-accent-pink/45' },
  { Icon: IconStarSm, className: 'right-[18%] top-[42%] h-4 w-4 text-accent-sky/50' },
  { Icon: IconHeartSm, className: 'left-[12%] top-[48%] h-5 w-5 text-lilac-300/40' },
  { Icon: IconStarSm, className: 'left-[20%] bottom-[22%] h-4 w-4 text-accent-butter/60' },
  { Icon: IconHeartSm, className: 'right-[8%] bottom-[30%] h-6 w-6 text-accent-pink/35' },
]

function DecorativeBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden>
      <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-lilac-200/30 blur-3xl" />
      <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-lilac-200/35 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent-pink/25 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-accent-sky/20 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_1.5px_1.5px,rgba(167,139,250,0.22)_1.5px,transparent_0)] [background-size:22px_22px]"
        style={{ mixBlendMode: 'multiply' }}
      />

      <div
        className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,rgba(244,114,182,0.25)_1px,transparent_0)] [background-size:38px_38px]"
        style={{ mixBlendMode: 'multiply' }}
      />

      {floaters.map(({ Icon, className }, i) => (
        <div key={i} className={`absolute ${className} animate-float`} style={{ animationDelay: `${i * 0.4}s` }}>
          <Icon className="h-full w-full drop-shadow-sm" />
        </div>
      ))}

      <svg
        className="absolute bottom-0 left-0 right-0 h-20 w-full text-lilac-100/60"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,48 C240,8 360,78 600,40 C820,2 1000,72 1200,38 C1320,20 1380,48 1440,32 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  )
}

export default DecorativeBackdrop
