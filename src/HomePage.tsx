type HomePageProps = {
  onReportIssue: () => void
}

export function HomePage({ onReportIssue }: HomePageProps) {
  return (
    <main className="page">
      <h1>Maryland State Highway Administration</h1>
      <p className="subtitle">
        Report non-emergency issues on Maryland state-maintained highways.
      </p>
      <p className="lede">
        Use this form to report potholes, damaged road signs, broken highway
        lighting, clogged drains, debris, and other problems on SHA-maintained
        roads and facilities. For emergencies, call 911.
      </p>
      <button
        type="button"
        id="report-issue-button"
        className="primary-button"
        onClick={onReportIssue}
      >
        Report an Issue
      </button>
    </main>
  )
}
