import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindfulBudgets',
  description: 'MindfulBudgets offers personalized financial planning and mental wellness integration for small businesses to optimize spending while reducing stress. It combines AI-driven budgeting tools with guided mental health resources, catering to the unique needs of business owners.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">MindfulBudgets</h1>
      <p className="mt-4 text-lg">MindfulBudgets offers personalized financial planning and mental wellness integration for small businesses to optimize spending while reducing stress. It combines AI-driven budgeting tools with guided mental health resources, catering to the unique needs of business owners.</p>
    </main>
  )
}
