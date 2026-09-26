'use client'

import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastProps {
  type: ToastType
  message: string
  description?: string
  duration?: number
  onClose: () => void
}

export default function Toast({ type, message, description, duration = 5000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    // Enter animation
    setTimeout(() => setIsVisible(true), 10)

    // Auto close
    const timer = setTimeout(() => {
      handleClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  const handleClose = () => {
    setIsLeaving(true)
    setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, 300)
  }

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-orange-500" />
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />
    }
  }

  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'border-green-500/20 bg-green-50 dark:bg-green-900/20'
      case 'error':
        return 'border-red-500/20 bg-red-50 dark:bg-red-900/20'
      case 'warning':
        return 'border-orange-500/20 bg-orange-50 dark:bg-orange-900/20'
      case 'info':
        return 'border-blue-500/20 bg-blue-50 dark:bg-blue-900/20'
    }
  }

  return (
    <div
      className={`
        fixed top-20 right-4 z-[100] max-w-md w-full
        transition-all duration-300 ease-out
        ${isVisible && !isLeaving ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
    >
      <div
        className={`
          ${getStyles()}
          rounded-lg border-2 shadow-lg backdrop-blur-sm
          p-4 flex items-start gap-3
          animate-in slide-in-from-right
        `}
      >
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          {getIcon()}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-text dark:text-text-dark mb-0.5">
            {message}
          </p>
          {description && (
            <p className="text-sm text-text-muted dark:text-text-muted">
              {description}
            </p>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="flex-shrink-0 p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors tap-target"
          aria-label="Close notification"
        >
          <X className="w-4 h-4 text-text-muted" />
        </button>

        {/* Progress bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-current opacity-30 rounded-b-lg"
          style={{
            animation: `shrink ${duration}ms linear forwards`,
          }}
        />
      </div>
    </div>
  )
}

// Toast Manager Component
interface ToastData {
  id: string
  type: ToastType
  message: string
  description?: string
  duration?: number
}

interface ToastManagerProps {
  toasts: ToastData[]
  onRemove: (id: string) => void
}

export function ToastManager({ toasts, onRemove }: ToastManagerProps) {
  return (
    <div className="fixed top-20 right-4 z-[100] flex flex-col gap-2">
      {toasts.map((toast, index) => (
        <div key={toast.id} style={{ marginTop: index * 8 }}>
          <Toast
            type={toast.type}
            message={toast.message}
            description={toast.description}
            duration={toast.duration}
            onClose={() => onRemove(toast.id)}
          />
        </div>
      ))}
    </div>
  )
}

// Add to globals.css
const toastStyles = `
@keyframes shrink {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
`
