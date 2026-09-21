import Link from 'next/link'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer({ language }: { language: 'vi' | 'en' }) {
  const t = language === 'vi' ? {
    forJobSeekers: 'Dành cho ứng viên',
    jobs: 'Tìm việc làm',
    companies: 'Công ty',
    salary: 'Lương',
    resources: 'Tài nguyên',
    forEmployers: 'Dành cho nhà tuyển dụng',
    postJob: 'Đăng tin tuyển dụng',
    pricing: 'Bảng giá',
    aboutUs: 'Về chúng tôi',
    about: 'Giới thiệu',
    contact: 'Liên hệ',
    privacy: 'Chính sách bảo mật',
    terms: 'Điều khoản',
    copyright: '© 2024 WorkThean. Tất cả quyền được bảo lưu.',
  } : {
    forJobSeekers: 'For Job Seekers',
    jobs: 'Browse Jobs',
    companies: 'Companies',
    salary: 'Salary',
    resources: 'Resources',
    forEmployers: 'For Employers',
    postJob: 'Post a Job',
    pricing: 'Pricing',
    aboutUs: 'About Us',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    copyright: '© 2024 WorkThean. All rights reserved.',
  }

  return (
    <footer className="bg-surface dark:bg-surface-dark border-t border-border dark:border-border-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="font-bold text-xl text-text dark:text-text-dark">WorkThean</span>
            </div>
            <p className="text-sm text-text-muted dark:text-text-muted mb-4">
              {language === 'vi' 
                ? 'Nền tảng tuyển dụng IT & Tech hàng đầu Việt Nam'
                : 'Leading IT & Tech recruitment platform in Vietnam'
              }
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-background dark:bg-background-dark hover:bg-primary-light dark:hover:bg-primary/20 flex items-center justify-center transition-colors tap-target">
                <Facebook className="w-5 h-5 text-text-muted" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background dark:bg-background-dark hover:bg-primary-light dark:hover:bg-primary/20 flex items-center justify-center transition-colors tap-target">
                <Linkedin className="w-5 h-5 text-text-muted" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background dark:bg-background-dark hover:bg-primary-light dark:hover:bg-primary/20 flex items-center justify-center transition-colors tap-target">
                <Twitter className="w-5 h-5 text-text-muted" />
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="font-bold text-text dark:text-text-dark mb-4">{t.forJobSeekers}</h3>
            <ul className="space-y-2">
              <li><Link href="/jobs" className="text-sm text-text-muted dark:text-text-muted hover:text-primary transition-colors">{t.jobs}</Link></li>
              <li><Link href="/companies" className="text-sm text-text-muted dark:text-text-muted hover:text-primary transition-colors">{t.companies}</Link></li>
              <li><Link href="/salary" className="text-sm text-text-muted dark:text-text-muted hover:text-primary transition-colors">{t.salary}</Link></li>
              <li><Link href="/resources" className="text-sm text-text-muted dark:text-text-muted hover:text-primary transition-colors">{t.resources}</Link></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="font-bold text-text dark:text-text-dark mb-4">{t.forEmployers}</h3>
            <ul className="space-y-2">
              <li><Link href="/post-job" className="text-sm text-text-muted dark:text-text-muted hover:text-primary transition-colors">{t.postJob}</Link></li>
              <li><Link href="/pricing" className="text-sm text-text-muted dark:text-text-muted hover:text-primary transition-colors">{t.pricing}</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-text dark:text-text-dark mb-4">{t.aboutUs}</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-text-muted dark:text-text-muted hover:text-primary transition-colors">{t.about}</Link></li>
              <li><Link href="/contact" className="text-sm text-text-muted dark:text-text-muted hover:text-primary transition-colors">{t.contact}</Link></li>
              <li><Link href="/privacy" className="text-sm text-text-muted dark:text-text-muted hover:text-primary transition-colors">{t.privacy}</Link></li>
              <li><Link href="/terms" className="text-sm text-text-muted dark:text-text-muted hover:text-primary transition-colors">{t.terms}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border dark:border-border-dark text-center text-sm text-text-muted dark:text-text-muted">
          {t.copyright}
        </div>
      </div>
    </footer>
  )
}
