import { type FormEvent, useState } from 'react'
import { type ReportSubmission } from './types'

type ReportFormProps = {
  onSubmitReport: (report: ReportSubmission) => Promise<void>
}

export function ReportForm({ onSubmitReport }: ReportFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')
    setIsSubmitting(true)

    const data = new FormData(event.currentTarget)

    try {
      await onSubmitReport({
        description: String(data.get('description') ?? ''),
        latitude: String(data.get('latitude') ?? ''),
        longitude: String(data.get('longitude') ?? ''),
        photoUrl: String(data.get('photo-url') ?? ''),
      })
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'The report could not be emailed. Check your connection and try again.',
      )
      setIsSubmitting(false)
    }
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

        {errorMessage ? (
          <p id="submit-error" className="error-message" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          id="submit-report"
          className="primary-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting…' : 'Submit Report'}
        </button>
      </form>
    </main>
  )
}
