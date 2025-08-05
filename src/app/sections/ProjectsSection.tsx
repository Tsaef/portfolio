'use client'

import Image from 'next/image'
import portfolioData from '@/data/portfolio.json'

export default function ProjectsSection() {
  const { projects } = portfolioData

  return (
    <section className="projects-section">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Project Screenshot */}
            <div className="relative h-48 bg-gray-200">
              <Image
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback for missing images
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  target.parentElement!.innerHTML = `
                    <div class="flex items-center justify-center h-full bg-gray-100">
                      <span class="text-gray-500 text-sm">Screenshot coming soon</span>
                    </div>
                  `
                }}
              />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-900 transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
