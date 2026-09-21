'use client'

import { useState, useEffect } from 'react'
import { Search, MapPin, Filter, X, ChevronDown } from 'lucide-react'
import Header from '@/components/Header'
import JobCard from '@/components/JobCard'
import JobDetailPanel from '@/components/JobDetailPanel'
import Footer from '@/components/Footer'

export default function JobsPage() {
  const [language, setLanguage] = useState<'vi' | 'en'>('vi')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filters, setFilters] = useState({
    category: [],
    level: [],
    workModel: [],
    salary: 'all',
    location: [],
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')

  const toggleLanguage = () => setLanguage(prev => prev === 'vi' ? 'en' : 'vi')
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        language={language}
        onLanguageToggle={toggleLanguage}
        isDarkMode={isDarkMode}
        onDarkModeToggle={toggleDarkMode}
      />

      <main className="flex-1 bg-background dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="bg-surface dark:bg-surface-dark rounded-card shadow-card border border-border dark:border-border-dark p-4 flex items-center gap-4">
              <Search className="w-5 h-5 text-text-muted flex-shrink-0" />
              <input
                type="text"
                placeholder={language === 'vi' ? 'Tìm kiếm việc làm...' : 'Search jobs...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-text dark:text-text-dark"
              />
            </div>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Filters Sidebar */}
            <aside className={`lg:col-span-3 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-text dark:text-text-dark">
                    {language === 'vi' ? 'Lọc' : 'Filters'}
                  </h3>
                  <button className="text-primary text-sm font-medium">
                    {language === 'vi' ? 'Xóa tất cả' : 'Clear all'}
                  </button>
                </div>

                {/* Filter groups would go here */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm text-text dark:text-text-dark mb-3">
                      {language === 'vi' ? 'Lĩnh vực' : 'Category'}
                    </h4>
                    {/* Checkboxes */}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-text dark:text-text-dark mb-3">
                      {language === 'vi' ? 'Cấp bậc' : 'Level'}
                    </h4>
                    {/* Checkboxes */}
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-text dark:text-text-dark mb-3">
                      {language === 'vi' ? 'Hình thức' : 'Work Model'}
                    </h4>
                    {/* Checkboxes */}
                  </div>
                </div>
              </div>
            </aside>

            {/* Job List */}
            <div className="lg:col-span-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-text-muted dark:text-text-muted">
                  <span className="font-semibold text-text dark:text-text-dark">248</span>{' '}
                  {language === 'vi' ? 'việc làm' : 'jobs found'}
                </p>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border dark:border-border-dark rounded-lg text-sm font-medium tap-target"
                  >
                    <Filter className="w-4 h-4" />
                    {language === 'vi' ? 'Lọc' : 'Filter'}
                  </button>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-border dark:border-border-dark rounded-lg text-sm font-medium bg-surface dark:bg-surface-dark text-text dark:text-text-dark outline-none cursor-pointer tap-target"
                  >
                    <option value="newest">{language === 'vi' ? 'Mới nhất' : 'Newest'}</option>
                    <option value="salary">{language === 'vi' ? 'Lương cao nhất' : 'Highest salary'}</option>
                    <option value="relevant">{language === 'vi' ? 'Liên quan' : 'Most relevant'}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {/* Job cards would be mapped here */}
                <div className="text-center py-12 text-text-muted dark:text-text-muted">
                  {language === 'vi' ? 'Đang tải việc làm...' : 'Loading jobs...'}
                </div>
              </div>
            </div>

            {/* Job Detail Panel */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24">
                {selectedJob ? (
                  <JobDetailPanel job={selectedJob} language={language} />
                ) : (
                  <div className="bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-8 text-center">
                    <p className="text-text-muted dark:text-text-muted">
                      {language === 'vi' 
                        ? 'Chọn một công việc để xem chi tiết'
                        : 'Select a job to view details'
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  )
}
