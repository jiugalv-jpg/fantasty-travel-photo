import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export function getDailyUsage(): number {
  const today = new Date().toDateString()
  const data = localStorage.getItem('dailyUsage')
  if (!data) return 0

  const { date, count } = JSON.parse(data)
  if (date !== today) return 0

  return count
}

export function incrementDailyUsage(): void {
  const today = new Date().toDateString()
  const current = getDailyUsage()
  localStorage.setItem(
    'dailyUsage',
    JSON.stringify({ date: today, count: current + 1 })
  )
}
