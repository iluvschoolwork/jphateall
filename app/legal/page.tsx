import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose">
        <h2>
          Información legal
        </h2>
        <p><strong>Disclaimer, términos del servicio y política de privacidad.</strong></p>
        <p>
          Write here your own legal information. This repository uses the GNU GPL v3 license. More info on readme.md.
        </p>
      </div>
    </div>
  )
}
