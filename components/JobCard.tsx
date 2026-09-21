'use client'

import { MapPin, DollarSign, Heart, Building2 } from 'lucide-react'
import { useState } from 'react'

export interface JobItem {
  id: string | number
  title: string
  company: string
  logo?: string
  location: string
  salary: string
  salaryUSD?: string
  skills: string[]
  isNew?: boolean
  workModel?: string
  level?: string
  description?: string
  requirements?: string[]
  benefits?: string[]
}

interface JobCardProps {
  job: JobItem
  isSelected?: boolean
  onClick?: () => void
  language?: 'vi' | 'en'
}

export default function JobCard({ job, isSelected, onClick, language = 'vi' }: JobCardProps) {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div
      onClick={onClick}
      className={`p-5 rounded-card border transition-all cursor-pointer bg-surface dark:bg-surface-dark ${
        isSelected
          ? 'border-primary shadow-md ring-1 ring-primary'
          : 'border-border dark:border-border-dark hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-card'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 border border-border dark:border-border-dark flex items-center justify-center font-bold text-primary flex-shrink-0">
            {job.logo ? (
              <img src={job.logo} alt={job.company} className="w-8 h-8 object-contain" onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.parentElement!.innerText = job.company.substring(0, 2).toUpperCase()
              }} />
            ) : (
              job.company.substring(0, 2).toUpperCase()
            )}
          </div>
          <div>
            <h3 className="font-semibold text-base text-text dark:text-text-dark leading-tight hover:text-primary transition-colors">
              {job.title}
            </h3>
            <p className="text-sm text-text-muted dark:text-text-muted mt-1 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              {job.company}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setIsSaved(!isSaved)
          }}
          className={`p-2 rounded-full transition-colors ${
            isSaved ? 'text-red-500 bg-red-50 dark:bg-red-950/30' : 'text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
          title={isSaved ? 'Đã lưu' : 'Lưu việc làm'}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-text-muted dark:text-text-muted">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-slate-400" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1 font-semibold text-primary">
          <DollarSign className="w-4 h-4" />
          <span>{job.salary}</span>
        </div>
        {job.workModel && (
          <span className="px-2 py-0.5 rounded text-xs bg-slate-100 dark:bg-slate-800 text-text-muted">
            {job.workModel}
          </span>
        )}
      </div>

      {job.skills && job.skills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {job.skills.slice(0, 4).map((skill, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 4 && (
            <span className="text-xs text-text-muted self-center">
              +{job.skills.length - 4}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
