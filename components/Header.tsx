'use client'

import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useState } from 'react'

const translations = {
  vi: {
    jobs: 'Việc làm',
    companies: 'Công ty',
    salary: 'Lương',
    resources: 'Tài nguyên',
    login: 'Đăng nhập',
    postJob: 'Đăng tuyển',
  },
  en: {
    jobs: 'Jobs',
    companies: 'Companies',
    salary: 'Salary',
    resources: 'Resources',
    login: 'Login',
    postJob: 'Post a Job',
  },
}

interface HeaderProps {
  language: 'vi' | 'en'
  onLanguageToggle: () => void
  isDarkMode: boolean
  onDarkModeToggle: () => void
}

export default function Header({ language, onLanguageToggle, isDarkMode, onDarkModeToggle }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[language]

  return (
    <header className="sticky top-0 z-50 bg-surface dark:bg-surface-dark border-b border-border dark:border-border-dark backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 tap-target">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <span className="font-bold text-xl text-text dark:text-text-dark">WorkThean</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/jobs" className="px-4 py-2 text-sm font-medium text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark rounded-lg transition-colors tap-target">
              {t.jobs}
            </Link>
            <Link href="/companies" className="px-4 py-2 text-sm font-medium text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark rounded-lg transition-colors tap-target">
              {t.companies}
            </Link>
            <Link href="/salary" className="px-4 py-2 text-sm font-medium text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark rounded-lg transition-colors tap-target">
              {t.salary}
            </Link>
            <Link href="/resources" className="px-4 py-2 text-sm font-medium text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark rounded-lg transition-colors tap-target">
              {t.resources}
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={onDarkModeToggle}
              className="p-2 rounded-lg hover:bg-background dark:hover:bg-background-dark transition-colors tap-target"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-text-dark" />
              ) : (
                <Moon className="w-5 h-5 text-text" />
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className="px-3 py-2 text-sm font-medium text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark rounded-lg transition-colors tap-target hidden md:block"
            >
              {language === 'vi' ? 'EN' : 'VN'}
            </button>

            {/* Login */}
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark rounded-lg transition-colors tap-target hidden md:block"
            >
              {t.login}
            </Link>

            {/* Post Job Button */}
            <Link
              href="/post-job"
              className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-lg transition-colors shadow-sm tap-target hidden md:block"
            >
              {t.postJob}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-background dark:hover:bg-background-dark transition-colors tap-target"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-text dark:text-text-dark" />
              ) : (
                <Menu className="w-6 h-6 text-text dark:text-text-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border dark:border-border-dark">
            <nav className="flex flex-col space-y-2">
              <Link href="/jobs" className="px-4 py-3 text-sm font-medium text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark rounded-lg transition-colors">
                {t.jobs}
              </Link>
              <Link href="/companies" className="px-4 py-3 text-sm font-medium text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark rounded-lg transition-colors">
                {t.companies}
              </Link>
              <Link href="/salary" className="px-4 py-3 text-sm font-medium text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark rounded-lg transition-colors">
                {t.salary}
              </Link>
              <Link href="/resources" className="px-4 py-3 text-sm font-medium text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark rounded-lg transition-colors">
                {t.resources}
              </Link>
              <button
                onClick={onLanguageToggle}
                className="px-4 py-3 text-sm font-medium text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark rounded-lg transition-colors text-left"
              >
                {language === 'vi' ? 'English' : 'Tiếng Việt'}
              </button>
              <Link href="/login" className="px-4 py-3 text-sm font-medium text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark rounded-lg transition-colors">
                {t.login}
              </Link>
              <Link href="/post-job" className="mx-4 px-4 py-3 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-lg transition-colors text-center">
                {t.postJob}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
