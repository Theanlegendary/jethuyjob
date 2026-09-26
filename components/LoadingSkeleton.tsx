'use client'

export function JobCardSkeleton() {
  return (
    <div className="bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-6 animate-pulse">
      {/* Badge skeleton */}
      <div className="w-12 h-5 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
      
      {/* Company logo skeleton */}
      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4" />
      
      {/* Title skeleton */}
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3" />
      
      {/* Company name skeleton */}
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3" />
      
      {/* Location skeleton */}
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-3" />
      
      {/* Salary skeleton */}
      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4" />
      
      {/* Skills skeleton */}
      <div className="flex gap-2">
        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-6 w-14 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </div>
  )
}

export function JobListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {[1, 2, 3, 4].map((i) => (
        <JobCardSkeleton key={i} />
      ))}
    </div>
  )
}

export function SearchBarSkeleton() {
  return (
    <div className="max-w-4xl mx-auto animate-pulse">
      <div className="bg-surface dark:bg-surface-dark rounded-card p-2 flex gap-2 border border-border dark:border-border-dark">
        <div className="flex-1 h-12 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="w-48 h-12 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="w-32 h-12 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </div>
  )
}

export function CompanyCardSkeleton() {
  return (
    <div className="bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-6 animate-pulse">
      {/* Logo skeleton */}
      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 mx-auto" />
      
      {/* Company name skeleton */}
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
      
      {/* Industry skeleton */}
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto mb-4" />
      
      {/* Open roles skeleton */}
      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto mb-3" />
      
      {/* Featured role skeleton */}
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto" />
    </div>
  )
}

export function ProfileSkeleton() {
  return (
    <div className="bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-6 animate-pulse">
      {/* Avatar skeleton */}
      <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full mb-4" />
      
      {/* Name skeleton */}
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2" />
      
      {/* Title skeleton */}
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4" />
      
      {/* Stats skeleton */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-1" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        <div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-1" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        <div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-1" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  )
}

// Shimmer variant with more sophisticated animation
export function ShimmerCard() {
  return (
    <div className="bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-6 relative overflow-hidden">
      <div className="shimmer-effect absolute inset-0" />
      <JobCardSkeleton />
    </div>
  )
}
