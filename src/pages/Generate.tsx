import { useState, useEffect } from 'react'
import { Upload, Wand2, Check, X, Loader2, Download, RotateCcw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { destinations, styles } from '../store/destinations'
import { useStore } from '../store/useStore'
import { generateTravelPhoto } from '../lib/api'
import { getDailyUsage, incrementDailyUsage } from '../lib/utils'

export default function Generate() {
  const navigate = useNavigate()
  const [image, setImage] = useState<string | null>(null)
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null)
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const [description, setDescription] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [dailyUsage, setDailyUsage] = useState(0)

  const addPhoto = useStore((state) => state.addPhoto)

  useEffect(() => {
    setDailyUsage(getDailyUsage())
  }, [])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerate = async () => {
    if (!image || !selectedDestination || !selectedStyle) return

    if (dailyUsage >= 5) {
      navigate('/pricing')
      return
    }

    setIsGenerating(true)

    const dest = destinations.find((d) => d.id === selectedDestination)
    const style = styles.find((s) => s.id === selectedStyle)

    try {
      const response = await generateTravelPhoto({
        image,
        destination: selectedDestination,
        style: selectedStyle,
        description,
      })

      if (response.success && response.imageUrl) {
        setResult(response.imageUrl)
        incrementDailyUsage()
        setDailyUsage((prev) => prev + 1)

        if (dest && style) {
          addPhoto({
            imageUrl: response.imageUrl,
            destination: selectedDestination,
            destinationName: dest.name,
            style: selectedStyle,
            styleName: style.name,
          })
        }
      }
    } catch {
      alert('生成失败，请重试')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (!result) return
    const link = document.createElement('a')
    link.href = result
    link.download = `travel-photo-${Date.now()}.jpg`
    link.click()
  }

  const handleRetry = () => {
    setResult(null)
    setSelectedDestination(null)
    setSelectedStyle(null)
    setDescription('')
  }

  if (result) {
    return (
      <div className="min-h-screen px-4 py-6">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
            <div className="relative">
              <img
                src={result}
                alt="Generated photo"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                <Check size={16} className="text-green-500" />
                <span className="text-sm font-medium">生成成功</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {destinations.find((d) => d.id === selectedDestination)?.emoji && (
                    <span className="text-2xl">
                      {destinations.find((d) => d.id === selectedDestination)?.emoji}
                    </span>
                  )}
                  <div>
                    <p className="font-bold text-gray-800">
                      {destinations.find((d) => d.id === selectedDestination)?.name}
                    </p >
                    <p className="text-sm text-gray-500">
                      {styles.find((s) => s.id === selectedStyle)?.name}风格
                    </p >
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleDownload}
                  className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full font-medium flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  下载照片
                </button>
                <button
                  onClick={handleRetry}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium flex items-center justify-center gap-2"
                >
                  <RotateCcw size={18} />
                  再生成
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <h2 className="font-bold text-gray-800 mb-4">上传你的照片</h2>
          <label
            className={`w-full h-40 border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all ${
              image
                ? 'border-pink-300 bg-pink-50'
                : 'border-gray-300 hover:border-pink-400 hover:bg-pink-50'
            }`}
          >
            {image ? (
              <img
                src={image}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <>
                <Upload size={32} className="text-gray-400 mb-2" />
                <span className="text-gray-500">点击或拖拽上传照片</span>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          {image && (
            <button
              onClick={() => setImage(null)}
              className="mt-3 flex items-center gap-1 text-red-500 text-sm"
            >
              <X size={16} />
              更换照片
            </button>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <h2 className="font-bold text-gray-800 mb-4">选择目的地</h2>
          <div className="grid grid-cols-3 gap-3">
            {destinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setSelectedDestination(dest.id)}
                className={`p-3 rounded-xl transition-all ${
                  selectedDestination === dest.id
                    ? 'bg-pink-100 ring-2 ring-pink-400'
                    : 
