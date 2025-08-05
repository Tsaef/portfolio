import portfolioData from '@/data/portfolio.json'

export default function HeroSection() {
  const { personal } = portfolioData

  return (
    <section className="hero-section">
      <div className="text-center space-y-6 flex flex-col items-center justify-center">
        <img className="profile-picture" src={personal.profilePicture} alt={personal.name} />
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          {personal.name}
        </h1>
        <h2 className="text-2xl text-gray-600">
          {personal.title}
        </h2>
      </div>
    </section>
  )
}
