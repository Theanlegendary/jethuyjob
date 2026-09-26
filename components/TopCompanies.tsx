import Link from 'next/link'

const companies = [
  { name: 'NIKE VIETNAM', short: 'Nike', filter: 'nike', badge: 'VIỆC MỚI', badgeEn: 'NEW JOBS' },
  { name: 'SAMSUNG VIETNAM', short: 'Samsung', filter: 'samsung', badge: 'VIỆC MỚI', badgeEn: 'NEW JOBS' },
  { name: "L'ORÉAL VIETNAM", short: "L'Oréal", filter: 'loreal', badge: 'VIỆC MỚI', badgeEn: 'NEW JOBS' },
  { name: 'UNILEVER VIETNAM', short: 'Unilever', filter: 'unilever', badge: 'VIỆC MỚI', badgeEn: 'NEW JOBS' },
  { name: 'ZARA VIETNAM', short: 'Zara', filter: 'zara', badge: 'VIỆC MỚI', badgeEn: 'NEW JOBS' },
  { name: 'SHOPEE VIETNAM', short: 'Shopee', filter: 'shopee', badge: 'VIỆC MỚI', badgeEn: 'NEW JOBS' },
]

export default function TopCompanies({ language }: { language: 'vi' | 'en' }) {
  return (
    <section className="py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#004182] bg-gradient-to-r from-[#003b77] to-[#0a66c2] rounded-xl p-5 md:p-7 shadow-md">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/20 gap-2">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                {language === 'vi' ? 'Top Nhà Tuyển Dụng Hàng Đầu' : 'Top Employers Hiring'}
              </h2>
              <p className="text-xs md:text-sm text-white/85">
                {language === 'vi'
                  ? 'Khám phá cơ hội nghề nghiệp tại các doanh nghiệp tiêu biểu'
                  : 'Explore career opportunities from verified leading employers'}
              </p>
            </div>
            <Link
              href="/jobs"
              className="text-white hover:text-sky-200 font-bold text-sm inline-flex items-center gap-1.5 self-start sm:self-auto transition-colors"
            >
              <span>{language === 'vi' ? 'Xem tất cả công ty' : 'View all companies'}</span>
              <span>→</span>
            </Link>
          </div>

          {/* 6-Company Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {companies.map((company) => (
              <Link
                key={company.name}
                href={`/jobs?q=${company.filter}`}
                className="bg-white rounded-lg p-3.5 flex flex-col items-center justify-between text-center min-h-[160px] shadow-sm hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 border border-white/30 group"
              >
                <div className="w-full h-14 flex items-center justify-center mb-2">
                  <span className="text-xl font-black text-slate-800 tracking-tight group-hover:text-[#0a66c2] transition-colors">
                    {company.short}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-slate-800 uppercase tracking-tight mb-2 line-clamp-2 leading-tight">
                  {company.name}
                </div>

                <span className="bg-sky-50 text-sky-700 border border-sky-200 font-extrabold text-[10.5px] px-3 py-1 rounded tracking-wider uppercase">
                  {language === 'vi' ? company.badge : company.badgeEn}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
