import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MindfulBudgets',
  description: 'MindfulBudgets offers personalized financial planning and mental wellness integration for small businesses to optimize spending while reducing stress. It combines AI-driven budgeting tools with guided mental health resources, catering to the unique needs of business owners.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
