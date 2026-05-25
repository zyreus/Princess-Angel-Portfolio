import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { downloadResumePDF } from '../components/resume/ResumePDFExport'
import ResumePreview from '../components/resume/ResumePreview'
import ResumePrintLayout from '../components/resume/ResumePrintLayout'

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
      await downloadResumePDF(resumeElement)
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
        <ResumePrintLayout printRef={printRef} />
      </div>
    </motion.section>
  )
}

export default Resume
