export async function downloadResumePDF(resumeElement) {
  const [{ default: html2pdf }] = await Promise.all([
    import('html2pdf.js'),
    import('html2canvas'),
    import('jspdf'),
  ])

  if (document.fonts?.ready) {
    await document.fonts.ready
  }

  const images = Array.from(resumeElement.querySelectorAll('img'))
  await Promise.all(
    images.map((image) => {
      if (image.complete) return Promise.resolve()
      return new Promise((resolve) => {
        image.onload = resolve
        image.onerror = resolve
      })
    }),
  )

  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))

  const opt = {
    margin: 0.4,
    filename: 'Princess-Angel-Paslot-Resume.pdf',
    image: {
      type: 'jpeg',
      quality: 1,
    },
    html2canvas: {
      scale: 2.5,
      useCORS: true,
      letterRendering: true,
      backgroundColor: '#f8f5ff',
      scrollX: 0,
      scrollY: 0,
    },
    jsPDF: {
      unit: 'in',
      format: 'letter',
      orientation: 'portrait',
      compress: false,
    },
    pagebreak: {
      mode: ['avoid-all', 'css', 'legacy'],
    },
  }

  await html2pdf().set(opt).from(resumeElement).save()
}
