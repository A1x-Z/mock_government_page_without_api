import { useState } from 'react'
import { ConfirmationPage } from './ConfirmationPage'
import { HomePage } from './HomePage'
import { ReportForm } from './ReportForm'
import { sendReportEmail } from './sendReportEmail'
import type { Page, ReportSubmission } from './types'

function createReferenceId() {
  const number = Math.floor(10000 + Math.random() * 90000)
  return `MOCK-${number}`
}

function App() {
  const [page, setPage] = useState<Page>('home')
  const [report, setReport] = useState<ReportSubmission | null>(null)
  const [referenceId, setReferenceId] = useState('')

  async function handleSubmitReport(submitted: ReportSubmission) {
    const nextReferenceId = createReferenceId()
    await sendReportEmail(submitted, nextReferenceId)
    setReport(submitted)
    setReferenceId(nextReferenceId)
    setPage('confirmation')
  }

  return (
    <div className="app">
      <header className="site-header">
        <p className="agency-banner">Official government website</p>
        <div className="header-bar">
          <span className="header-title">City 311</span>
        </div>
      </header>

      {page === 'home' && (
        <HomePage onReportIssue={() => setPage('report')} />
      )}
      {page === 'report' && (
        <ReportForm onSubmitReport={handleSubmitReport} />
      )}
      {page === 'confirmation' && report && (
        <ConfirmationPage referenceId={referenceId} report={report} />
      )}

      <footer className="site-footer">
        <p>This is a mock 311 website for testing only.</p>
        <p>Do not submit real civic issues here.</p>
      </footer>
    </div>
  )
}

export default App
