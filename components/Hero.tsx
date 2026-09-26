'use client'

import { Search, MapPin } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const translations = {
  vi: {
    headline: 'Tìm đúng công việc. Xây dựng sự nghiệp.',
    subtitle: 'Khám phá việc làm đã xác minh từ các doanh nghiệp logistics, công nghệ, tài chính và dịch vụ.',
    searchPlaceholder: 'Vị trí, kỹ năng hoặc công ty...',
    locationPlaceholder: 'Địa điểm',
    searchButton: 'Tìm việc làm',
    filters: {
      remote: 'Remote',
      senior: 'Senior',
      highSalary: '$1,500+',
      java: 'Java',
      react: 'React',
      aiml: 'AI/ML',
    },
    stats: {
      jobs: 'việc làm',
      companies: 'công ty',
      candidates: 'ứng viên',
    },
    locations: [
      { value: 'all', label: 'Tất cả địa điểm' },
      { value: 'hanoi', label: 'Hà Nội' },
      { value: 'hcm', label: 'TP. Hồ Chí Minh' },
      { value: 'danang', label: 'Đà Nẵng' },
      { value: 'remote', label: 'Remote' },
    ],
  },
  en: {
    headline: 'Find the right job. Build your career.',
    subtitle: 'Discover verified jobs from companies across logistics, technology, finance, and other growing industries.',
    searchPlaceholder: 'Job title, skill, or company',
    locationPlaceholder: 'Location',
    searchButton: 'Search jobs',
    filters: {
      remote: 'Remote',
      senior: 'Senior',
      highSalary: '$1,500+',
      java: 'Java',
      react: 'React',
      aiml: 'AI/ML',
    },
    stats: {
      jobs: 'jobs',
      companies: 'companies',
      candidates: 'candidates',
    },
    locations: [
      { value: 'all', label: 'All locations' },
      { value: 'hanoi', label: 'Hanoi' },
      { value: 'hcm', label: 'Ho Chi Minh City' },
      { value: 'danang', label: 'Da Nang' },
      { value: 'remote', label: 'Remote' },
    ],
  },
}

interface HeroProps {
  language: 'vi' | 'en'
}

export default function Hero({ language }: HeroProps) {
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('all')
  const router = useRouter()
  const t = translations[language]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (keyword) params.set('q', keyword)
    if (location !== 'all') params.set('location', location)
    router.push(`/jobs?${params.toString()}`)
  }

  const handleFilterClick = (filter: string) => {
    router.push(`/jobs?filter=${filter}`)
  }

  return (
    <section className="bg-gradient-to-b from-primary-light dark:from-primary/10 to-transparent py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-text dark:text-text-dark mb-4">
            {t.headline}
          </h1>
          <p className="text-lg md:text-xl text-text-muted dark:text-text-muted">
            {t.subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-6">
          <div className="bg-surface dark:bg-surface-dark rounded-card shadow-card-hover border border-border dark:border-border-dark p-2 flex flex-col md:flex-row gap-2">
            {/* Keyword Input */}
            <div className="flex-1 flex items-center px-4 py-2 md:py-0">
              <Search className="w-5 h-5 text-text-muted mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="flex-1 bg-transparent text-text dark:text-text-dark placeholder-text-muted outline-none text-base"
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-border dark:bg-border-dark" />

            {/* Location Dropdown */}
            <div className="flex-1 md:flex-initial flex items-center px-4 py-2 md:py-0">
              <MapPin className="w-5 h-5 text-text-muted mr-3 flex-shrink-0" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 md:w-48 bg-transparent text-text dark:text-text-dark outline-none text-base cursor-pointer"
              >
                {t.locations.map((loc) => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button (Bigger than normal) */}
            <button
              type="submit"
              className="bg-primary hover:bg-primary-hover text-white font-bold px-10 py-4 text-base md:text-lg rounded-lg transition-colors shadow-sm tap-target flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              <span>{t.searchButton}</span>
            </button>
          </div>
        </form>

        {/* Quick Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(t.filters).map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleFilterClick(key)}
              className="px-4 py-2 bg-surface dark:bg-surface-dark hover:bg-primary-light dark:hover:bg-primary/20 text-text dark:text-text-dark text-sm font-medium rounded-full border border-border dark:border-border-dark transition-colors tap-target"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-1">5,240</div>
            <div className="text-sm text-text-muted dark:text-text-muted">{t.stats.jobs}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">2,100+</div>
            <div className="text-sm text-text-muted dark:text-text-muted">{t.stats.companies}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">180K+</div>
            <div className="text-sm text-text-muted dark:text-text-muted">{t.stats.candidates}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
