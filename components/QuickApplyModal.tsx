'use client'

import { X, Upload, CheckCircle } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const translations = {
  vi: {
    title: 'Ứng tuyển nhanh',
    name: 'Họ và tên',
    namePlaceholder: 'Nguyễn Văn A',
    phone: 'Số điện thoại',
    phonePlaceholder: '0912 345 678',
    email: 'Email',
    emailPlaceholder: 'example@email.com',
    cv: 'CV của bạn',
    cvPlaceholder: 'Kéo thả hoặc click để tải CV (PDF, DOC, DOCX)',
    coverLetter: 'Thư xin việc (tùy chọn)',
    coverPlaceholder: 'Viết vài dòng về bản thân và lý do bạn phù hợp...',
    submit: 'Gửi ứng tuyển',
    cancel: 'Hủy',
    success: 'Đã gửi ứng tuyển thành công!',
    successDesc: 'Chúng tôi sẽ liên hệ với bạn sớm nhất.',
    close: 'Đóng',
    errors: {
      nameRequired: 'Vui lòng nhập họ tên',
      phoneRequired: 'Vui lòng nhập số điện thoại',
      phoneInvalid: 'Số điện thoại không hợp lệ',
      emailRequired: 'Vui lòng nhập email',
      emailInvalid: 'Email không hợp lệ',
      cvRequired: 'Vui lòng tải lên CV',
    },
  },
  en: {
    title: 'Quick Apply',
    name: 'Full name',
    namePlaceholder: 'John Doe',
    phone: 'Phone number',
    phonePlaceholder: '+84 912 345 678',
    email: 'Email',
    emailPlaceholder: 'example@email.com',
    cv: 'Your CV',
    cvPlaceholder: 'Drag & drop or click to upload CV (PDF, DOC, DOCX)',
    coverLetter: 'Cover letter (optional)',
    coverPlaceholder: 'Write a few lines about yourself and why you\'re a good fit...',
    submit: 'Submit application',
    cancel: 'Cancel',
    success: 'Application submitted successfully!',
    successDesc: 'We will contact you soon.',
    close: 'Close',
    errors: {
      nameRequired: 'Please enter your name',
      phoneRequired: 'Please enter phone number',
      phoneInvalid: 'Invalid phone number',
      emailRequired: 'Please enter email',
      emailInvalid: 'Invalid email',
      cvRequired: 'Please upload your CV',
    },
  },
}

interface QuickApplyModalProps {
  job: any
  language: 'vi' | 'en'
  onClose: () => void
}

export default function QuickApplyModal({ job, language, onClose }: QuickApplyModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cv: null as File | null,
    coverLetter: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const t = translations[language]

  useEffect(() => {
    // Trap focus in modal
    const firstFocusable = modalRef.current?.querySelector('button, input, textarea')
    if (firstFocusable instanceof HTMLElement) {
      firstFocusable.focus()
    }

    // Handle Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = t.errors.nameRequired
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.errors.phoneRequired
    } else if (!/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = t.errors.phoneInvalid
    }

    if (!formData.email.trim()) {
      newErrors.email = t.errors.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.errors.emailInvalid
    }

    if (!formData.cv) {
      newErrors.cv = t.errors.cvRequired
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, cv: file })
      setErrors({ ...errors, cv: '' })
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file && (file.type === 'application/pdf' || file.type.includes('word'))) {
      setFormData({ ...formData, cv: file })
      setErrors({ ...errors, cv: '' })
    }
  }

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-surface dark:bg-surface-dark rounded-card p-8 max-w-md w-full text-center" onClick={(e) => e.stopPropagation()}>
          <CheckCircle className="w-16 h-16 text-accent-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-text dark:text-text-dark mb-2">{t.success}</h3>
          <p className="text-text-muted dark:text-text-muted mb-6">{t.successDesc}</p>
          <button
            onClick={onClose}
            className="w-full py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-colors tap-target"
          >
            {t.close}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto" onClick={onClose}>
      <div
        ref={modalRef}
        className="bg-surface dark:bg-surface-dark rounded-card p-6 md:p-8 max-w-2xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-text dark:text-text-dark">{t.title}</h2>
            {job && (
              <p className="text-sm text-text-muted dark:text-text-muted mt-1">
                {job.title} - {job.company}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-background dark:hover:bg-background-dark transition-colors tap-target"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-text-muted" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-text dark:text-text-dark mb-2">
              {t.name} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value })
                setErrors({ ...errors, name: '' })
              }}
              placeholder={t.namePlaceholder}
              className={`w-full px-4 py-3 bg-background dark:bg-background-dark border ${
                errors.name ? 'border-red-500' : 'border-border dark:border-border-dark'
              } rounded-lg text-text dark:text-text-dark placeholder-text-muted outline-none focus:border-primary transition-colors tap-target`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text dark:text-text-dark mb-2">
                {t.phone} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value })
                  setErrors({ ...errors, phone: '' })
                }}
                placeholder={t.phonePlaceholder}
                className={`w-full px-4 py-3 bg-background dark:bg-background-dark border ${
                  errors.phone ? 'border-red-500' : 'border-border dark:border-border-dark'
                } rounded-lg text-text dark:text-text-dark placeholder-text-muted outline-none focus:border-primary transition-colors tap-target`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-text dark:text-text-dark mb-2">
                {t.email} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                  setErrors({ ...errors, email: '' })
                }}
                placeholder={t.emailPlaceholder}
                className={`w-full px-4 py-3 bg-background dark:bg-background-dark border ${
                  errors.email ? 'border-red-500' : 'border-border dark:border-border-dark'
                } rounded-lg text-text dark:text-text-dark placeholder-text-muted outline-none focus:border-primary transition-colors tap-target`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* CV Upload */}
          <div>
            <label className="block text-sm font-medium text-text dark:text-text-dark mb-2">
              {t.cv} <span className="text-red-500">*</span>
            </label>
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`w-full p-6 border-2 border-dashed ${
                isDragging ? 'border-primary bg-primary-light dark:bg-primary/10' :
                errors.cv ? 'border-red-500' :
                'border-border dark:border-border-dark'
              } rounded-lg cursor-pointer transition-colors hover:border-primary`}
            >
              <div className="text-center">
                <Upload className="w-10 h-10 text-text-muted mx-auto mb-2" />
                {formData.cv ? (
                  <p className="text-text dark:text-text-dark font-medium">{formData.cv.name}</p>
                ) : (
                  <p className="text-text-muted dark:text-text-muted text-sm">{t.cvPlaceholder}</p>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv}</p>}
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-medium text-text dark:text-text-dark mb-2">
              {t.coverLetter}
            </label>
            <textarea
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              placeholder={t.coverPlaceholder}
              rows={4}
              className="w-full px-4 py-3 bg-background dark:bg-background-dark border border-border dark:border-border-dark rounded-lg text-text dark:text-text-dark placeholder-text-muted outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse md:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border border-border dark:border-border-dark text-text dark:text-text-dark font-semibold rounded-lg hover:bg-background dark:hover:bg-background-dark transition-colors tap-target"
            >
              {t.cancel}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-colors tap-target disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {language === 'vi' ? 'Đang gửi...' : 'Submitting...'}
                </span>
              ) : (
                t.submit
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
