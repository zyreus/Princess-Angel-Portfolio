import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import ResumePreview from '../components/resume/ResumePreview'
import ResumePrintTemplate, {
  LEGAL_HEIGHT_PX,
  LEGAL_WIDTH_PX,
} from '../components/resume/ResumePrintTemplate'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
}

function Resume() {
  const previewRef = useRef(null)
  const printRef = useRef(null)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    if (!printRef.current || isDownloading) return

    setIsDownloading(true)
    const resumeElement = printRef.current

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
        import('html2pdf.js'),
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
        margin: 0,
        filename: 'Princess-Angel-Paslot-Resume.pdf',
        image: {
          type: 'jpeg',
          quality: 1,
        },
        html2canvas: {
          scale: 3,
          useCORS: true,
          letterRendering: true,
          backgroundColor: '#f8f5ff',
          width: LEGAL_WIDTH_PX,
          height: LEGAL_HEIGHT_PX,
          scrollX: 0,
          scrollY: 0,
          windowWidth: LEGAL_WIDTH_PX,
          windowHeight: LEGAL_HEIGHT_PX,
        },
        jsPDF: {
          unit: 'px',
          format: [LEGAL_WIDTH_PX, LEGAL_HEIGHT_PX],
          orientation: 'portrait',
          compress: false,
        },
      }

      const canvas = await html2canvas(resumeElement, opt.html2canvas)
      const pdf = new jsPDF(opt.jsPDF)

      pdf.addImage(
        canvas.toDataURL('image/jpeg', opt.image.quality),
        'JPEG',
        0,
        0,
        LEGAL_WIDTH_PX,
        LEGAL_HEIGHT_PX,
        undefined,
        'NONE',
      )
      pdf.save(opt.filename)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto w-full max-w-[1220px] space-y-10 py-10 md:py-14"
    >
      <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-[#F5F3FF] blur-3xl" />

      <motion.div variants={fadeUpVariants} className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DDD6FE] bg-white px-3 py-1.5 text-xs font-semibold text-[#6D28D9] shadow-[0_12px_30px_rgba(124,58,237,0.08)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" />
            Premium resume layout
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#7C3AED]">Resume</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
            Modern, recruiter-ready profile for <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">Princess Angel Paslot</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            A clean two-column resume with refined purple accents, stronger hierarchy, balanced cards, and Legal-size PDF export.
          </p>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          className="premium-button group w-full shadow-glow disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
        >
          <Download className="h-4 w-4 transition duration-300 group-hover:translate-y-0.5" />
          {isDownloading ? 'Preparing PDF...' : 'Download Resume'}
        </button>
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        className="sticky top-20 z-30 flex justify-end lg:hidden"
        aria-label="Floating resume download"
      >
        <button type="button" onClick={handleDownload} disabled={isDownloading} className="premium-button shadow-glow">
          <Download className="h-4 w-4" />
          PDF
        </button>
      </motion.div>

      <ResumePreview previewRef={previewRef} fadeUpVariants={fadeUpVariants} />
      <div className="resume-pdf-export-host" aria-hidden="true">
        <ResumePrintTemplate printRef={printRef} />
      </div>
    </motion.section>
  )
}

export default Resume
