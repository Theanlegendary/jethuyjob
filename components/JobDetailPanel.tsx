'use client'

import { MapPin, DollarSign, Building2, Briefcase, Calendar, CheckCircle2, Share2, Bookmark } from 'lucide-react'
import { useState } from 'react'

interface JobDetailPanelProps {
  job: any
  language?: 'vi' | 'en'
  onApply?: () => void
}

export default function JobDetailPanel({ job, language = 'vi', onApply }: JobDetailPanelProps) {
  const [isSaved, setIsSaved] = useState(false)

  if (!job) return null

  return (
    <div className="bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-6 space-y-6 shadow-card">
      {/* Header */}
      <div className="border-b border-border dark:border-border-dark pb-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 border border-border dark:border-border-dark flex items-center justify-center font-bold text-lg text-primary flex-shrink-0">
              {job.logo ? (
                <img src={job.logo} alt={job.company} className="w-10 h-10 object-contain" onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.innerText = job.company.substring(0, 2).toUpperCase()
                }} />
              ) : (
                job.company?.substring(0, 2).toUpperCase() || 'WT'
              )}
            </div>
            <div>
              <h2 className="text-xl font-bold text-text dark:text-text-dark leading-snug">
                {job.title}
              </h2>
              <p className="text-sm font-medium text-text-muted dark:text-text-muted mt-1 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-slate-400" />
                {job.company}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="mt-4 grid grid-cols-2 gap-3 py-3 px-3.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border dark:border-border-dark text-sm">
          <div>
            <span className="text-xs text-text-muted block">{language === 'vi' ? 'Mức lương' : 'Salary'}</span>
            <span className="font-semibold text-primary">{job.salary}</span>
          </div>
          <div>
            <span className="text-xs text-text-muted block">{language === 'vi' ? 'Địa điểm' : 'Location'}</span>
            <span className="font-medium text-text dark:text-text-dark">{job.location}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex items-center gap-3">
          <button
            type="button"
            onClick={onApply}
            className="flex-1 py-2.5 px-4 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold text-sm transition-colors text-center shadow-sm"
          >
            {language === 'vi' ? 'Ứng tuyển ngay' : 'Apply Now'}
          </button>
          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            className={`p-2.5 rounded-lg border border-border dark:border-border-dark transition-colors ${
              isSaved ? 'text-red-500 bg-red-50 dark:bg-red-950/30' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title={isSaved ? 'Đã lưu' : 'Lưu công việc'}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Skills */}
      {job.skills && job.skills.length > 0 && (
        <div className="space-y-2.5">
          <h3 className="font-semibold text-sm text-text dark:text-text-dark">
            {language === 'vi' ? 'Kỹ năng yêu cầu' : 'Required Skills'}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {job.skills.map((skill: string, idx: number) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <div className="space-y-2.5 text-sm text-text dark:text-text-dark leading-relaxed">
        <h3 className="font-semibold text-sm text-text dark:text-text-dark">
          {language === 'vi' ? 'Mô tả công việc' : 'Job Description'}
        </h3>
        <p className="text-text-muted dark:text-text-muted">
          {job.description || (language === 'vi' 
            ? 'Tham gia phát triển các hệ thống enterprise quy mô lớn, tối ưu hóa hiệu năng và mở rộng kiến trúc microservices. Làm việc trực tiếp với đội ngũ chuyên gia công nghệ hàng đầu.' 
            : 'Join the development of large-scale enterprise platforms, optimize system performance and scale microservices architectures.')}
        </p>
      </div>

      {/* Responsibilities */}
      <div className="space-y-2.5 text-sm">
        <h3 className="font-semibold text-sm text-text dark:text-text-dark">
          {language === 'vi' ? 'Trách nhiệm chính' : 'Key Responsibilities'}
        </h3>
        <ul className="space-y-2 text-text-muted dark:text-text-muted">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>{language === 'vi' ? 'Thiết kế, xây dựng và duy trì các hệ thống backend / frontend hiệu năng cao.' : 'Design, build, and maintain high-performance scalable systems.'}</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>{language === 'vi' ? 'Hợp tác chặt chẽ với Product Manager và Tech Lead để chuyển giao tính năng.' : 'Collaborate closely with Product Managers and Tech Leads.'}</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>{language === 'vi' ? 'Đảm bảo tiêu chuẩn code sạch, viết unit tests và tối ưu CI/CD pipelines.' : 'Ensure clean code standards, write unit tests, and maintain CI/CD pipelines.'}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
