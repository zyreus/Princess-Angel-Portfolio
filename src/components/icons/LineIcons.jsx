const stroke = {
  width: 1.75,
  cap: 'round',
  join: 'round',
}

function iconProps({ className, title, ...rest }) {
  return {
    className: className ?? 'h-6 w-6',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    strokeWidth: stroke.width,
    strokeLinecap: stroke.cap,
    strokeLinejoin: stroke.join,
    'aria-hidden': title ? undefined : true,
    role: title ? 'img' : undefined,
    'aria-label': title,
    ...rest,
  }
}

export function IconPalette(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 3a7 7 0 1 0 7 7c0 1.5-1 2.5-2.5 2.5H12l-2.5 2.5a2 2 0 0 1-2.8 0L5.5 16.5A2 2 0 0 1 5 15V12a7 7 0 0 1 7-9Z" />
      <circle cx="8" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="11" cy="8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14" cy="10" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconUsersRound(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="3.5" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function IconMicRound(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <path d="M12 19v3" />
    </svg>
  )
}

export function IconStarSm(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 2.2l2.6 5.3 5.8.8-4.2 4.1 1 5.7L12 15.9l-5.2 2.7 1-5.7-4.2-4.1 5.8-.8L12 2.2Z" />
    </svg>
  )
}

export function IconHeartSm(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 20s-6.5-4.35-9-8.5C.5 8.2 2.2 5 5.2 5c1.8 0 3.2 1 3.8 2.5.6-1.5 2-2.5 3.8-2.5 3 0 4.7 3.2 2.2 6.5C12.5 15.65 12 20 12 20Z" />
    </svg>
  )
}

export function IconPinRound(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 2.5a5.5 5.5 0 0 0-5.5 5.5c0 3.5 4.2 8.2 5.3 9.3a.8.8 0 0 0 1.1 0c1.1-1.1 5.3-5.8 5.3-9.3A5.5 5.5 0 0 0 12 2.5Z" />
      <circle cx="12" cy="8" r="1.6" />
    </svg>
  )
}

export function IconChartRound(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M4 20V4" />
      <path d="M8 20V12" />
      <path d="M12 20V8" />
      <path d="M16 20V14" />
      <path d="M20 20V6" />
    </svg>
  )
}

export function IconLaptopRound(props) {
  return (
    <svg {...iconProps(props)}>
      <rect x="3" y="4" width="18" height="12" rx="2.5" />
      <path d="M2 18h20" />
    </svg>
  )
}

export function IconBrainRound(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M9.5 3.5a3.5 3.5 0 0 0-2.5 6.2V20" />
      <path d="M14.5 3.5a3.5 3.5 0 0 1 2.5 6.2V20" />
      <path d="M7 10.5c-1.3.5-2.2 1.7-2.2 3.2 0 1.5.9 2.7 2.2 3.2" />
      <path d="M17 10.5c1.3.5 2.2 1.7 2.2 3.2 0 1.5-.9 2.7-2.2 3.2" />
    </svg>
  )
}

export function IconMenuRound(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M5 7h14" />
      <path d="M5 12h14" />
      <path d="M5 17h14" />
    </svg>
  )
}
