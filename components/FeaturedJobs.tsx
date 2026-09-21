'use client'

import { Heart, MapPin, DollarSign } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const translations = {
  vi: {
    title: 'Việc làm nổi bật',
    viewAll: 'Xem tất cả',
    new: 'Mới',
    apply: 'Ứng tuyển',
  },
  en: {
    title: 'Featured Jobs',
    viewAll: 'View all',
    new: 'New',
    apply: 'Apply',
  },
}

const sampleJobs = [
  {
    id: 1,
    title: 'Senior Backend Engineer',
    company: 'FPT Software',
    logo: '/logos/fpt.svg',
    location: 'Hà Nội',
    salary: '40-60 triệu',
    salaryUSD: '$1,600-$2,400',
    skills: ['Java', 'Spring Boot', 'Microservices'],
    isNew: true,
  },
  {
    id: 2,
    title: 'Full-stack Developer (React + Node.js)',
    company: 'Tiki Corporation',
    logo: '/logos/tiki.svg',
    location: 'TP. Hồ Chí Minh',
    salary: '35-55 triệu',
    salaryUSD: '$1,400-$2,200',
    skills: ['React', 'Node.js', 'TypeScript'],
    isNew: true,
  },
  {
    id: 3,
    title: 'AI Engineer (Computer Vision)',
    company: 'VNG Corporation',
    logo: '/logos/vng.svg',
    location: 'TP. Hồ Chí Minh',
    salary: '50-80 triệu',
    salaryUSD: '$2,000-$3,200',
    skills: ['Python', 'TensorFlow', 'OpenCV'],
    isNew: false,
  },
  {
    id: 4,
    title: 'Mobile Developer (Flutter)',
    company: 'Viettel Digital',
    logo: '/logos/viettel.svg',
    location: 'Hà Nội / Remote',
    salary: '30-50 triệu',
    salaryUSD: '$1,200-$2,000',
    skills: ['Flutter', 'Dart', 'Firebase'],
    isNew: true,
  },
]

interface FeaturedJobsProps {
  language: 'vi' | 'en'
  onApplyClick: (job: any) => void
}

export default function FeaturedJobs({ language, onApplyClick }: FeaturedJobsProps) {
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [showUSD, setShowUSD] = useState(false)
  const t = translations[language]

  const toggleSave = (e: React.MouseEvent, jobId: number) => {
    e.preventDefault()
    e.stopPropagation()
    setSavedJobs(prev =>
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    )
  }

  return (
    <section className="py-12 md:py-16 bg-background dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text dark:text-text-dark">
            {t.title}
          </h2>
          <Link
            href="/jobs"
            className="text-primary hover:text-primary-hover font-semibold text-sm md:text-base tap-target"
          >
            {t.viewAll} →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {sampleJobs.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="group bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-6 hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 relative"
            >
              {/* Save Button */}
              <button
                onClick={(e) => toggleSave(e, job.id)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-background dark:hover:bg-background-dark transition-colors tap-target z-10"
                aria-label="Save job"
              >
                <Heart
                  className={`w-5 h-5 ${
                    savedJobs.includes(job.id)
                      ? 'fill-red-500 text-red-500'
                      : 'text-text-muted'
                  }`}
                />
              </button>

              {/* New Badge */}
              {job.isNew && (
                <span className="inline-block px-2 py-1 bg-accent-green-light text-accent-green text-xs font-semibold rounded mb-3">
                  {t.new}
                </span>
              )}

              {/* Company Logo */}
              <div className="w-12 h-12 bg-background dark:bg-background-dark rounded-lg flex items-center justify-center mb-4 border border-border dark:border-border-dark">
                <span className="text-xl font-bold text-primary">
                  {job.company.charAt(0)}
                </span>
              </div>

              {/* Job Title */}
              <h3 className="font-bold text-text dark:text-text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {job.title}
              </h3>

              {/* Company Name */}
              <p className="text-sm text-text-muted dark:text-text-muted mb-3">
                {job.company}
              </p>

              {/* Location */}
              <div className="flex items-center text-sm text-text-muted dark:text-text-muted mb-3">
                <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
                <span className="line-clamp-1">{job.location}</span>
              </div>

              {/* Salary */}
              <div className="flex items-center mb-4">
                <DollarSign className="w-4 h-4 text-accent-green mr-1.5 flex-shrink-0" />
                <span className="font-bold text-accent-green">
                  {showUSD ? job.salaryUSD : job.salary}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {job.skills.slice(0, 3).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-background dark:bg-background-dark text-text dark:text-text-dark text-xs rounded border border-border dark:border-border-dark"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
