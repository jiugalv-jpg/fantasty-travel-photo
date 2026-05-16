import { useEffect } from 'react'
import { Download, Trash2, Calendar, MapPin, Palette } from 'lucide-react'
import { useStore } from '../store/useStore'
import Empty from '../components/Empty'
import { formatDate } from '../lib/utils'

export default function History() {
  const photos = useStore((state) => state.photos)
  const removePhoto = useStore((state) => state.removePhoto)

  useEffect(() => {
    useStore.getState().loadPhotos()
  }, [])

  const handleDownload = (url: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = `travel-photo-${Date.now()}.jpg`
    link.click()
  }

  if (photos.length === 0) {
    return <Empty />
  }

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-bold text-gray-800 mb-6">生成历史</h1>

        <div className="space-y-4">
          {photos
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            .map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden animate-fade-in"
              >
                <div className="relative">
                  <img
                    src={photo.imageUrl}
                    alt="Generated"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => handleDownload(photo.imageUrl)}
                      className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Download size={16} className="text-gray-700" />
                    </button>
                    <button
                      onClick={() => removePhoto(photo.id)}
                      className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                    >
                      <Trash2 size={16} className="text-gray-700" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-pink-500" />
                      <span className="font-medium text-gray-800">{photo.destinationName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Palette size={14} className="text-pink-500" />
                      <span className="text-sm text-gray-500">{photo.styleName}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={12} />
                    {formatDate(photo.createdAt)}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
