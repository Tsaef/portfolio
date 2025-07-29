export default function StudiesSection() {
  const studies = [
    {
      degree: "Master's in Computer Science",
      institution: "Lorem University",
      period: "2020 - 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Specialized in software engineering and web development."
    },
    {
      degree: "Bachelor's in Software Engineering",
      institution: "Ipsum Institute of Technology",
      period: "2016 - 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Focus on algorithms, data structures, and programming fundamentals."
    }
  ]

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
