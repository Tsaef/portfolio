import HeroSection from '@/app/sections/HeroSection'
import TechnologiesAndExperienceSection from '@/app/sections/TechnologiesAndExperienceSection'
import ProjectsSection from '@/app/sections/ProjectsSection'
import ToggleSwitch from './ToggleSwitch'
import ResumeAndStudiesSection from "@/app/sections/ResumeAndStudiesSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center gap-12">
        <HeroSection />
        <ResumeAndStudiesSection />
        <TechnologiesAndExperienceSection />
        <ProjectsSection />
      </main>
      
      {/* Toggle Switch in bottom right corner */}
      <ToggleSwitch />
    </div>
  )
}
