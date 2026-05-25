import React from 'react'
import ResumePrintTemplate from './ResumePrintTemplate'

function ResumePreview({ previewRef, printRef }) {
  return (
    <div ref={previewRef} className="resume-preview-wrapper">
      <div className="resume-preview-stage">
        <ResumePrintTemplate printRef={printRef} />
      </div>
    </div>
  )
}

export default ResumePreview
