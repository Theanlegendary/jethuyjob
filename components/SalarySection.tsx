'use client'

import { useState } from 'react'

export default function SalarySection({ language }: { language: 'vi' | 'en' }) {
  const [grossSalary, setGrossSalary] = useState('25000000')
  const [netSalary, setNetSalary] = useState(22375000)

  const formatNumber = (num: string) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const calculateNet = (gross: number) => {
    const bhxh = gross * 0.08
    const bhyt = gross * 0.015
    const bhtn = gross * 0.01
    const taxable = gross - bhxh - bhyt - bhtn - 11000000
    const tax = taxable > 0 ? taxable * 0.1 : 0
    return Math.floor(gross - bhxh - bhyt - bhtn - tax)
  }

  const handleInputChange = (value: string) => {
    const numbers = value.replace(/[^0-9]/g, '')
    setGrossSalary(numbers)
    if (numbers) {
      setNetSalary(calculateNet(parseInt(numbers)))
    }
  }

  return (
    <section className="py-12 md:py-16 bg-background dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-text dark:text-text-dark mb-8 text-center">
          {language === 'vi' ? 'Tính lương Gross - Net' : 'Salary Calculator'}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <div className="bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-6">
            <h3 className="font-bold text-lg text-text dark:text-text-dark mb-4">
              {language === 'vi' ? 'Máy tính lương' : 'Calculator'}
            </h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-text dark:text-text-dark mb-2">
                {language === 'vi' ? 'Lương Gross (VND)' : 'Gross Salary (VND)'}
              </label>
              <input
                type="text"
                value={formatNumber(grossSalary)}
                onChange={(e) => handleInputChange(e.target.value)}
                className="w-full px-4 py-3 bg-background dark:bg-background-dark border border-border dark:border-border-dark rounded-lg text-text dark:text-text-dark outline-none focus:border-primary transition-colors text-lg font-semibold"
              />
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted dark:text-text-muted">BHXH (8%)</span>
                <span className="font-medium text-text dark:text-text-dark">
                  -{formatNumber(String(Math.floor(parseInt(grossSalary || '0') * 0.08)))}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted dark:text-text-muted">BHYT (1.5%)</span>
                <span className="font-medium text-text dark:text-text-dark">
                  -{formatNumber(String(Math.floor(parseInt(grossSalary || '0') * 0.015)))}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted dark:text-text-muted">BHTN (1%)</span>
                <span className="font-medium text-text dark:text-text-dark">
                  -{formatNumber(String(Math.floor(parseInt(grossSalary || '0') * 0.01)))}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-border dark:border-border-dark">
              <div className="flex justify-between items-center">
                <span className="text-text-muted dark:text-text-muted">
                  {language === 'vi' ? 'Lương Net' : 'Net Salary'}
                </span>
                <span className="text-2xl font-bold text-accent-green">
                  {formatNumber(String(netSalary))} ₫
                </span>
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-6">
            <h3 className="font-bold text-lg text-text dark:text-text-dark mb-4">
              {language === 'vi' ? 'Mức lương trung bình' : 'Average Salary by Role'}
            </h3>
            <div className="space-y-4">
              {[
                { role: 'Junior', salary: '10-20M' },
                { role: 'Mid-level', salary: '20-40M' },
                { role: 'Senior', salary: '40-80M' },
                { role: 'Lead', salary: '80-150M' },
              ].map((item) => (
                <div key={item.role}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-text dark:text-text-dark">{item.role}</span>
                    <span className="font-semibold text-accent-green">{item.salary}</span>
                  </div>
                  <div className="w-full bg-background dark:bg-background-dark rounded-full h-2">
                    <div 
                      className="bg-accent-green h-2 rounded-full"
                      style={{ width: `${20 + parseInt(item.salary) / 2}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
