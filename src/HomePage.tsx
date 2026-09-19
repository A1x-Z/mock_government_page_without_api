type HomePageProps = {
  onReportIssue: () => void
}

export function HomePage({ onReportIssue }: HomePageProps) {
  return (
    <main className="page">
      <h1>City 311</h1>
      <p className="subtitle">
        Report non-emergency public infrastructure issues.
      </p>
      <p className="lede">
        Use this form to report potholes, broken streetlights, damaged signs,
        sidewalk hazards, clogged drains, illegal dumping, and other public
        facility problems. For emergencies, call 911.
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
