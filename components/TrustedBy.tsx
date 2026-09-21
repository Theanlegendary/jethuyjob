const companies = ['FPT Software', 'Viettel', 'VNG', 'Tiki', 'Shopee', 'Grab', 'MoMo', 'Sendo']

export default function TrustedBy({ language }: { language: 'vi' | 'en' }) {
  return (
    <section className="py-8 bg-surface dark:bg-surface-dark border-y border-border dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-text-muted dark:text-text-muted mb-6">
          {language === 'vi' ? 'Được tin tưởng bởi các công ty hàng đầu' : 'Trusted by leading companies'}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
          {companies.map((company) => (
            <div key={company} className="text-center">
              <div className="w-24 h-12 bg-background dark:bg-background-dark rounded flex items-center justify-center border border-border dark:border-border-dark">
                <span className="text-xs font-bold text-text dark:text-text-dark">{company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
