import portfolioData from '@/data/portfolio.json'

export default function StudiesSection() {
  const { studies } = portfolioData

  return (
    <section className="studies-section">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Education
      </h2>
      <div className="space-y-6">
        {studies.map((study, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {study.degree}
              </h3>
              <span className="text-sm text-blue-600 font-medium">
                {study.period}
              </span>
            </div>
            <h4 className="text-lg text-gray-700 mb-3">
              {study.institution}
            </h4>
            <p className="text-gray-600">
              {study.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
