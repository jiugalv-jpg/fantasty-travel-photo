import { Inbox } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Empty() {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
      <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mb-6">
        <Inbox size={48} className="text-pink-400" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">暂无生成记录</h3>
      <p className="text-gray-500 mb-6">上传照片，开启你的梦幻之旅</p >
      <Link
        to="/generate"
        className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
      >
        开始创作
      </Link>
    </div>
  )
}
