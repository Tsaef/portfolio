import HeroSection from './HeroSection'
import StudiesSection from './StudiesSection'
import ExperienceSection from './ExperienceSection'
import TechnologiesSection from './TechnologiesSection'
import ToggleSwitch from './ToggleSwitch'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="portfolio-container">
        <HeroSection />
        <StudiesSection />
        <ExperienceSection />
        <TechnologiesSection />
      </main>
      
      {/* Toggle Switch in bottom right corner */}
      <ToggleSwitch />
    </div>
  )
}
