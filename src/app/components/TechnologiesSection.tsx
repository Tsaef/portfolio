export default function TechnologiesSection() {
  const technologies = [
    {
      category: "Frontend Frameworks",
      techs: ["React.js", "Vue.js", "Angular.js"]
    },
    {
      category: "Languages",
      techs: ["TypeScript", "JavaScript", "Java"]
    },
    {
      category: "Backend",
      techs: ["Node.js", "Express.js"]
    },
    {
      category: "Other",
      techs: ["Spring Framework", "REST APIs", "Git"]
    }
  ]

  return (
    <section className="technologies-section">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Technologies I Master
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              {category.category}
            </h3>
            <div className="space-y-2">
              {category.techs.map((tech, techIndex) => (
                <div key={techIndex} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-md text-center text-sm font-medium">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
