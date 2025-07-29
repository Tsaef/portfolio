import portfolioData from '@/data/portfolio.json'

export default function HeroSection() {
  const { personal } = portfolioData

  return (
    <section className="hero-section">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          {personal.name}
        </h1>
        <h2 className="text-2xl text-gray-600 mb-8">
          {personal.title}
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            {personal.description}
          </p>
        </div>
      </div>
    </section>
  )
}
