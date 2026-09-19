import { type FormEvent } from 'react'
import { type ReportSubmission } from './types'

type ReportFormProps = {
  onSubmitReport: (report: ReportSubmission) => void
}

export function ReportForm({ onSubmitReport }: ReportFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    onSubmitReport({
      description: String(data.get('description') ?? ''),
      latitude: String(data.get('latitude') ?? ''),
      longitude: String(data.get('longitude') ?? ''),
      photoUrl: String(data.get('photo-url') ?? ''),
    })
  }

  return (
    <main className="page">
      <h1>Report an Issue</h1>
      <p className="subtitle">
        Submit a non-emergency report to the Maryland State Highway
        Administration.
      </p>

      <form id="issue-report-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" required rows={5} />
        </div>

        <div className="field">
          <label htmlFor="latitude">Latitude</label>
          <input
            id="latitude"
            name="latitude"
            type="text"
            required
            autoComplete="off"
          />
        </div>

        <div className="field">
          <label htmlFor="longitude">Longitude</label>
          <input
            id="longitude"
            name="longitude"
            type="text"
            required
            autoComplete="off"
          />
        </div>

        <div className="field">
          <label htmlFor="photo-url">Photo URL</label>
          <input
            id="photo-url"
            name="photo-url"
            type="text"
            autoComplete="off"
          />
        </div>

        <button type="submit" id="submit-report" className="primary-button">
          Submit Report
        </button>
      </form>
    </main>
  )
}
