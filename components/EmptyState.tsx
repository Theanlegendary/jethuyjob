'use client'

import { Search, Briefcase, Building2, Heart } from 'lucide-react'

const translations = {
  vi: {
    noJobs: {
      title: 'Không tìm thấy công việc nào',
      description: 'Thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác',
      action: 'Xóa bộ lọc',
    },
    noSavedJobs: {
      title: 'Chưa có việc làm đã lưu',
      description: 'Nhấn vào biểu tượng ❤️ để lưu các công việc bạn quan tâm',
      action: 'Khám phá việc làm',
    },
    noCompanies: {
      title: 'Không tìm thấy công ty nào',
      description: 'Thử tìm kiếm với từ khóa hoặc ngành nghề khác',
      action: 'Xem tất cả công ty',
    },
    loading: {
      title: 'Đang tải...',
      description: 'Vui lòng đợi trong giây lát',
    },
  },
  en: {
    noJobs: {
      title: 'No jobs found',
      description: 'Try adjusting your filters or search with different keywords',
      action: 'Clear filters',
    },
    noSavedJobs: {
      title: 'No saved jobs yet',
      description: 'Click the ❤️ icon to save jobs you\'re interested in',
      action: 'Explore jobs',
    },
    noCompanies: {
      title: 'No companies found',
      description: 'Try searching with different keywords or industries',
      action: 'View all companies',
    },
    loading: {
      title: 'Loading...',
      description: 'Please wait a moment',
    },
  },
}

interface EmptyStateProps {
  type: 'noJobs' | 'noSavedJobs' | 'noCompanies' | 'loading'
  language: 'vi' | 'en'
  onAction?: () => void
}

export default function EmptyState({ type, language, onAction }: EmptyStateProps) {
  const t = translations[language][type]

  const getIcon = () => {
    switch (type) {
      case 'noJobs':
        return <Search className="w-16 h-16 text-text-muted" />
      case 'noSavedJobs':
        return <Heart className="w-16 h-16 text-text-muted" />
      case 'noCompanies':
        return <Building2 className="w-16 h-16 text-text-muted" />
      case 'loading':
        return <Briefcase className="w-16 h-16 text-primary animate-bounce" />
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 smooth-appear">
      {/* Icon with subtle animation */}
      <div className="mb-6 opacity-50 float-animation">
        {getIcon()}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-text dark:text-text-dark mb-2 text-center">
        {t.title}
      </h3>

      {/* Description */}
      <p className="text-text-muted dark:text-text-muted text-center max-w-md mb-6">
        {t.description}
      </p>

      {/* Action Button (if applicable) */}
      {onAction && (t as any).action && type !== 'loading' && (
        <button
          onClick={onAction}
          className="btn-ripple px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all shadow-sm hover:shadow-lg hover:scale-105 active:scale-95"
        >
          {(t as any).action}
        </button>
      )}

      {/* Loading spinner */}
      {type === 'loading' && (
        <div className="mt-4 flex space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      )}
    </div>
  )
}
