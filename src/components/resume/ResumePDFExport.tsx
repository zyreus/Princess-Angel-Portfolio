const RESUME_WIDTH = 794
const RESUME_HEIGHT = 1123

function createExportHost(resumeElement) {
  const host = document.createElement('div')
  const clone = resumeElement.cloneNode(true) as HTMLElement

  host.setAttribute('aria-hidden', 'true')
  Object.assign(host.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '2147483647',
    width: `${RESUME_WIDTH}px`,
    height: `${RESUME_HEIGHT}px`,
    overflow: 'hidden',
    pointerEvents: 'none',
    background: '#ffffff',
  })

  clone.id = 'resume-pdf-export'
  Object.assign(clone.style, {
    width: `${RESUME_WIDTH}px`,
    height: `${RESUME_HEIGHT}px`,
    minWidth: `${RESUME_WIDTH}px`,
    maxWidth: `${RESUME_WIDTH}px`,
    minHeight: `${RESUME_HEIGHT}px`,
    maxHeight: `${RESUME_HEIGHT}px`,
    margin: '0',
    overflow: 'hidden',
    background: '#ffffff',
    transform: 'none',
  })

  host.appendChild(clone)
  document.body.appendChild(host)

  return { host, clone }
}

async function waitForImages(resumeElement) {
  const images = Array.from(resumeElement.querySelectorAll('img')) as HTMLImageElement[]

  await Promise.all(
    images.map((image) => {
      if (image.complete) return Promise.resolve()

      return new Promise((resolve) => {
        image.onload = resolve
        image.onerror = resolve
      })
    }),
  )
}

export async function downloadResumePDF(resumeElement) {
  const sourceElement = resumeElement.matches?.('.resume') ? resumeElement : resumeElement.querySelector('.resume')

  if (!sourceElement) {
    throw new Error('Resume export failed: .resume element was not found.')
  }

  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
  ])

  if (document.fonts?.ready) {
    await document.fonts.ready
  }

  const { host, clone } = createExportHost(sourceElement)

  try {
    await waitForImages(clone)
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))

    const canvas = await html2canvas(clone, {
      backgroundColor: '#ffffff',
      height: RESUME_HEIGHT,
      imageTimeout: 15000,
      logging: false,
      scale: 3,
      scrollX: 0,
      scrollY: 0,
      useCORS: true,
      width: RESUME_WIDTH,
      windowHeight: RESUME_HEIGHT,
      windowWidth: RESUME_WIDTH,
      x: 0,
      y: 0,
    })

    const pdf = new jsPDF({
      unit: 'px',
      format: [RESUME_WIDTH, RESUME_HEIGHT],
      orientation: 'portrait',
      compress: false,
    })

    pdf.addImage(canvas.toDataURL('image/jpeg', 1), 'JPEG', 0, 0, RESUME_WIDTH, RESUME_HEIGHT, undefined, 'NONE')
    pdf.save('Princess_Angel_Paslot_Resume.pdf')
  } finally {
    host.remove()
  }
}
