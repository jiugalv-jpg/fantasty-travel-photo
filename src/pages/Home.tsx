import { useEffect, useState } from 'react'
import { ChevronRight, Sparkles, Camera, Globe } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { destinations } from '../store/destinations'
import { useStore } from '../store/useStore'
import { getDailyUsage } from '../lib/utils'

export default function Home() {
  const navigate = useNavigate()
  const setDestination = useStore((state) => state.setDestination)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    useStore.getState().loadPhotos()
    setTimeout(() => setIsLoaded(true), 100)
  }, [])

  const handleCardClick = (destinationId: string) => {
    setDestination(destinationId)
    navigate('/generate')
  }

  const dailyUsage = getDailyUsage()
  const remaining = 5 - dailyUsage

  return (
    <div className="min-h-screen animate-fade-in">
      <header className="bg-gradient-to-r from-pink-500 to-pink-400 text-white py-8 px-4 rounded-b-3xl shadow-lg">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={24} />
            <h1 className="text-2xl font-bold">幻境旅拍</h1>
          </div>
          <p className="text-pink-100 mb-6">
            上传你的照片，AI帮你置身世界名胜
          </p >
          <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="flex items-center gap-2">
              <Camera size={16} />
              <span className="text-sm">今日剩余次数</span>
            </div>
            <span className="text-xl font-bold">{remaining}</span>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6">
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Globe size={20} className="text-pink-500" />
              精选目的地
            </h2>
            <span className="text-sm text-gray-500">12个世界名胜</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {destinations.map((dest, index) => (
              <div
                key={dest.id}
                onClick={() => handleCardClick(dest.id)}
                onMouseEnter={() => setHoveredCard(dest.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative overflow-hidden rounded-2xl shadow-md cursor-pointer transition-all duration-300 ${
                  hoveredCard === dest.id
                    ? 'scale-105 shadow-xl'
                    : 'scale-100'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <img
                  src={dest.imageUrl}
                  alt={dest.name}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-lg">{dest.emoji}</span>
                    <span className="font-bold">{dest.name}</span>
                  </div>
                  <span className="text-xs text-pink-200">{dest.country}</span>
                </div>
                <div
                  className={`absolute top-2 right-2 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center transition-opacity ${
                    hoveredCard === dest.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <ChevronRight size={14} className="text-pink-500" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md">
          <h3 className="font-bold text-gray-800 mb-4">✨ 如何使用</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-pink-500 font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">上传照片</p >
                <p className="text-sm text-gray-500">选择你的正面照</p >
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-pink-500 font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">选择目的地</p >
                <p className="text-sm text-gray-500">12个世界级名胜任你选</p >
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-pink-500 font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">选择风格</p >
                <p className="text-sm text-gray-500">6种精选滤镜风格</p >
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="
