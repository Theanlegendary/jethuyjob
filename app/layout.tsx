import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WorkThean - Tìm việc IT & Tech tại Việt Nam',
  description: 'Nền tảng tuyển dụng IT & Tech hàng đầu Việt Nam. Kết nối với các công ty công nghệ top đầu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="light">
      <body>{children}</body>
    </html>
  )
}
