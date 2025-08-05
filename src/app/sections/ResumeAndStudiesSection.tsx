import portfolioData from '@/data/portfolio.json'

export default function ResumeAndStudiesSection() {
  const { studies, personal } = portfolioData

  return (
    <section className="section">
      <div className="w-1/2 px-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Présentation
        </h2>
        {personal.description.map((item, index) => (
          <p key={index} className="text-lg text-gray-700 leading-relaxed mb-3">
            {item.paragraph}
          </p>
        ))}
      </div>
      <div className="w-1/2 px-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Formation
        </h2>
        <div className="space-y-6">
          {studies.map((study, index) => (
            <div key={index} className="custom-card">
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
      </div>
    </section>
  )
}
