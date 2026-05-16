import { Home, Wand2, History, Crown } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', icon: Home, label: '首页' },
  { path: '/generate', icon: Wand2, label: '创作' },
  { path: '/history', icon: History, label: '历史' },
  { path: '/pricing', icon: Crown, label: '会员' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-pink-100 z-50">
      <div className="max-w-md mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all ${
                isActive ? 'text-pink-500' : 'text-gray-400'
              }`}
            >
              <Icon size={22} className={isActive ? 'scale-110' : ''} />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
