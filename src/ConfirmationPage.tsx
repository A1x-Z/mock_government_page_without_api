import type { ReportSubmission } from './types'

type ConfirmationPageProps = {
  referenceId: string
  report: ReportSubmission
}

export function ConfirmationPage({
  referenceId,
  report,
}: ConfirmationPageProps) {
  return (
    <main className="page">
      <h1 id="confirmation-message">Report Submitted Successfully</h1>
      <p className="subtitle">
        The Maryland State Highway Administration has received your report.
        Keep this reference number for your records.
      </p>

      <p className="reference-line">
        Reference ID:{' '}
        <strong id="reference-id">{referenceId}</strong>
      </p>

      <dl className="submitted-details">
        <div>
          <dt>Description</dt>
          <dd id="submitted-description">{report.description}</dd>
        </div>
        <div>
          <dt>Latitude</dt>
          <dd id="submitted-latitude">{report.latitude}</dd>
        </div>
        <div>
          <dt>Longitude</dt>
          <dd id="submitted-longitude">{report.longitude}</dd>
        </div>
        <div>
          <dt>Photo URL</dt>
          <dd id="submitted-photo-url">{report.photoUrl || 'None provided'}</dd>
        </div>
      </dl>
    </main>
  )
}
