'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustedBy from '@/components/TrustedBy'
import FeaturedJobs from '@/components/FeaturedJobs'
import ExploreBySkill from '@/components/ExploreBySkill'
import SalarySection from '@/components/SalarySection'
import TopCompanies from '@/components/TopCompanies'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import QuickApplyModal from '@/components/QuickApplyModal'

export default function Home() {
  const [language, setLanguage] = useState<'vi' | 'en'>('vi')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<any>(null)

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi')
  }

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
    document.documentElement.classList.toggle('dark')
  }

  const handleApplyClick = (job: any) => {
    setSelectedJob(job)
    setIsApplyModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      <Header 
        language={language} 
        onLanguageToggle={toggleLanguage}
        isDarkMode={isDarkMode}
        onDarkModeToggle={toggleDarkMode}
      />
      
      <main>
        <Hero language={language} />
        <TrustedBy language={language} />
        <FeaturedJobs language={language} onApplyClick={handleApplyClick} />
        <ExploreBySkill language={language} />
        <SalarySection language={language} />
        <TopCompanies language={language} />
        <FinalCTA language={language} />
      </main>

      <Footer language={language} />

      {isApplyModalOpen && (
        <QuickApplyModal
          job={selectedJob}
          language={language}
          onClose={() => setIsApplyModalOpen(false)}
        />
      )}
    </div>
  )
}
