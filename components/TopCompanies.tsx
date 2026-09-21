import Link from 'next/link'

const companies = [
  { name: 'FPT Software', industry: 'Software Development', roles: 45, featured: 'Senior Backend Engineer' },
  { name: 'Viettel Digital', industry: 'Telecommunications', roles: 32, featured: 'Mobile Developer' },
  { name: 'VNG Corporation', industry: 'Gaming & Tech', roles: 28, featured: 'AI Engineer' },
  { name: 'Tiki', industry: 'E-commerce', roles: 38, featured: 'Full-stack Developer' },
  { name: 'Shopee', industry: 'E-commerce', roles: 52, featured: 'Product Manager' },
  { name: 'Grab', industry: 'Transportation', roles: 41, featured: 'Data Analyst' },
]

export default function TopCompanies({ language }: { language: 'vi' | 'en' }) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text dark:text-text-dark">
            {language === 'vi' ? 'Công ty hàng đầu' : 'Top Companies'}
          </h2>
          <Link
            href="/companies"
            className="text-primary hover:text-primary-hover font-semibold text-sm md:text-base tap-target"
          >
            {language === 'vi' ? 'Xem tất cả' : 'View all'} →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Link
              key={company.name}
              href={`/companies/${company.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-6 hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1"
            >
              {/* Logo */}
              <div className="w-16 h-16 bg-background dark:bg-background-dark rounded-lg flex items-center justify-center mb-4 border border-border dark:border-border-dark">
                <span className="text-2xl font-bold text-primary">{company.name.charAt(0)}</span>
              </div>

              {/* Company Name */}
              <h3 className="font-bold text-text dark:text-text-dark mb-2 group-hover:text-primary transition-colors">
                {company.name}
              </h3>

              {/* Industry */}
              <p className="text-sm text-text-muted dark:text-text-muted mb-4">
                {company.industry}
              </p>

              {/* Open Roles */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-text-muted dark:text-text-muted">
                  {language === 'vi' ? 'Đang tuyển' : 'Open roles'}
                </span>
                <span className="font-bold text-primary">{company.roles}</span>
              </div>

              {/* Featured Role */}
              <div className="text-sm">
                <span className="text-text-muted dark:text-text-muted">
                  {language === 'vi' ? 'Nổi bật:' : 'Featured:'}{' '}
                </span>
                <span className="text-text dark:text-text-dark font-medium">{company.featured}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
