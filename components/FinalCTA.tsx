import Link from 'next/link'
import { Briefcase, Users } from 'lucide-react'

export default function FinalCTA({ language }: { language: 'vi' | 'en' }) {
  const t = language === 'vi' ? {
    leftTitle: 'Tìm công việc phù hợp',
    leftDesc: 'Khám phá hàng nghìn cơ hội việc làm từ các công ty công nghệ hàng đầu',
    leftBtn: 'Tìm việc ngay',
    rightTitle: 'Tuyển dụng nhân tài',
    rightDesc: 'Kết nối với ứng viên chất lượng cao và xây dựng đội ngũ tuyệt vời',
    rightBtn: 'Đăng tin tuyển dụng',
  } : {
    leftTitle: 'Find your perfect job',
    leftDesc: 'Discover thousands of opportunities from leading tech companies',
    leftBtn: 'Browse jobs',
    rightTitle: 'Hire top talent',
    rightDesc: 'Connect with qualified candidates and build your dream team',
    rightBtn: 'Post a job',
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-primary-light to-transparent dark:from-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Job Seekers */}
          <div className="bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-8 hover:shadow-card-hover transition-all">
            <div className="w-12 h-12 bg-primary-light dark:bg-primary/20 rounded-lg flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-text dark:text-text-dark mb-4">
              {t.leftTitle}
            </h3>
            <p className="text-text-muted dark:text-text-muted mb-6">
              {t.leftDesc}
            </p>
            <Link
              href="/jobs"
              className="inline-block px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-colors tap-target"
            >
              {t.leftBtn}
            </Link>
          </div>

          {/* For Employers */}
          <div className="bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-8 hover:shadow-card-hover transition-all">
            <div className="w-12 h-12 bg-accent-green-light dark:bg-accent-green/20 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-accent-green" />
            </div>
            <h3 className="text-2xl font-bold text-text dark:text-text-dark mb-4">
              {t.rightTitle}
            </h3>
            <p className="text-text-muted dark:text-text-muted mb-6">
              {t.rightDesc}
            </p>
            <Link
              href="/post-job"
              className="inline-block px-6 py-3 border-2 border-border dark:border-border-dark text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark font-semibold rounded-lg transition-colors tap-target"
            >
              {t.rightBtn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
