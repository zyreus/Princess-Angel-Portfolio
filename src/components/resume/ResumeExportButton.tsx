import { Download } from 'lucide-react'
export { downloadResumePDF } from './ResumePDFExport'

function ResumeExportButton({ onClick, isDownloading = false, compact = false, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDownloading}
      className={`premium-button group shadow-glow disabled:cursor-not-allowed disabled:opacity-70 ${compact ? 'px-4 py-2.5' : 'w-fit'} ${className}`}
    >
      <Download className="h-4 w-4" aria-hidden />
      {compact ? 'PDF' : isDownloading ? 'Preparing PDF...' : 'Download Resume'}
    </button>
  )
}

export default ResumeExportButton
