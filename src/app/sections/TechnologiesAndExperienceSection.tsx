import portfolioData from '@/data/portfolio.json'
import TechnologyLogo from "@/app/components/TechnologyLogo";

export default function TechnologiesAndExperienceSection() {
  const { experiences, technologies } = portfolioData

  return (
    <section className="section">
      <div className="w-full lg:w-1/2 px-4 lg:px-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Expériences Professionnelles
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="custom-card">
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
              <div className="flex flex-col gap-2">
                {exp.description.map((desc, index) => (
                  <p key={index} className="text-gray-600">
                    • {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4 lg:px-16 mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {technologies.map((category, index) => (
            <div key={index} className="custom-card w-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                {category.category}
              </h3>
              <div className="space-y-2 flex flex-row justify-evenly items-center">
                {category.techs.map((tech, index) => (
                  <div className="" key={index}>
                    <TechnologyLogo
                      imgSrc={tech.icon}
                      techName={tech.name}
                      animationClass={tech.animation}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
