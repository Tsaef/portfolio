'use client'

import Image from 'next/image'
import { useState } from 'react'
import portfolioData from '@/data/portfolio.json'
import Button from '../components/Button'
import ImageModal from '../components/ImageModal'

export default function ProjectsSection() {
  const { projects } = portfolioData
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
    title: string
  } | null>(null)

  const openImageModal = (src: string, alt: string, title: string) => {
    setSelectedImage({ src, alt, title })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="projects-section">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Projets
      </h2>
      <div className="flex flex-wrap gap-8 items-stretch justify-center">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg w-2/5 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-[525px]">
            {/* Project Screenshot */}
            <div
              className="relative h-64 bg-gray-200 flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openImageModal(project.screenshot, `${project.title} screenshot`, project.title)}
            >
              <Image
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
              />
              {/* Click indicator overlay */}
              <div className="absolute inset-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                <div className="shadow-lg bg-white rounded-full p-2">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4 flex-shrink-0">
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
              <div className="flex gap-3 flex-shrink-0">
                {project.demoUrl && (
                  <Button
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="flex-1 text-center"
                  >
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="flex-1 text-center"
                  >
                    View Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeImageModal}
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
        title={selectedImage?.title}
      />
    </section>
  )
}
