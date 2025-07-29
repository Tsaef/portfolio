import portfolioData from '@/data/portfolio.json'

export default function ExperienceSection() {
  const { experiences } = portfolioData

  return (
    <section className="experience-section">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Professional Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.position}
              </h3>
              <span className="text-sm text-blue-600 font-medium">
                {exp.period}
              </span>
            </div>
            <h4 className="text-lg text-gray-700 mb-3">
              {exp.company}
            </h4>
            <p className="text-gray-600">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
