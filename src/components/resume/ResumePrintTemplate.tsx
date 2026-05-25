import React from 'react'
import ResumeMainContent from './ResumeMainContent'
import ResumeSidebar from './ResumeSidebar'

function ResumePrintTemplate({ printRef = null, printId = 'resume-print' }) {
  return (
    <div
      id={printId}
      ref={printRef}
      className="resume"
    >
      <div className="resume-layout">
        <ResumeSidebar />
        <ResumeMainContent />
      </div>
    </div>
  )
}

export default ResumePrintTemplate
