import { useState } from 'react'
import { ConfirmationPage } from './ConfirmationPage'
import { HomePage } from './HomePage'
import { ReportForm } from './ReportForm'
import type { Page, ReportSubmission } from './types'

function createReferenceId() {
  const number = Math.floor(10000 + Math.random() * 90000)
  return `MOCK-${number}`
}

function App() {
  const [page, setPage] = useState<Page>('home')
  const [report, setReport] = useState<ReportSubmission | null>(null)
  const [referenceId, setReferenceId] = useState('')

  function handleSubmitReport(submitted: ReportSubmission) {
    setReport(submitted)
    setReferenceId(createReferenceId())
    setPage('confirmation')
  }

  return (
    <div className="app">
      <header className="site-header">
        <p className="agency-banner">
          Official website of the Maryland Department of Transportation
        </p>
        <div className="header-bar">
          <span className="header-title">
            State Highway Administration
          </span>
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
        <p>
          This is a mock Maryland State Highway Administration website for
          testing only.
        </p>
        <p>Do not submit real highway or traffic issues here.</p>
      </footer>
    </div>
  )
}

export default App
