import { Check, Sparkles, Crown, Gem } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { getDailyUsage } from '../lib/utils'

const plans = [
  {
    name: '免费版',
    icon: Sparkles,
    price: '0',
    description: '每日体验',
    features: [
      '每日5次生成',
      '6种精选风格',
      '12个目的地',
      '本地存储',
      '基础画质',
    ],
    popular: false,
    color: 'gray',
  },
  {
    name: '会员版',
    icon: Crown,
    price: '19',
    description: '月度订阅',
    features: [
      '每日20次生成',
      '全部风格解锁',
      '全部目的地',
      '云端存储',
      '高清画质',
      '优先生成',
    ],
    popular: true,
    color: 'pink',
  },
  {
    name: '专业版',
    icon: Gem,
    price: '49',
    description: '年度订阅',
    features: [
      '无限次生成',
      '全部风格解锁',
      '全部目的地',
      '云端存储',
      '4K超清画质',
      '优先生成',
      '专属客服',
      'API调用',
    ],
    popular: false,
    color: 'purple',
  },
]

export default function Pricing() {
  const navigate = useNavigate()
  const dailyUsage = getDailyUsage()

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-800 mb-2">升级会员</h1>
          <p className="text-gray-500">解锁更多功能，畅享无限创作</p >
          <p className="text-sm text-pink-500 mt-2">今日已使用 {dailyUsage}/5 次</p >
        </div>

        <div className="space-y-4">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-br from-pink-500 to-pink-400 text-white shadow-xl scale-105'
                    : 'bg-white shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                    最受欢迎
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-white/20' : 'bg-pink-100'
                    }`}
                  >
                    <Icon
                      size={24}
                      className={plan.popular ? 'text-white' : 'text-pink-500'}
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg ${
                        plan.popular ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        plan.popular ? 'text-pink-100' : 'text-gray-500'
                      }`}
                    >
                      {plan.description}
                    </p >
                  </div>
                </div>

                <div className="mb-6">
                  <span
                    className={`text-4xl font-bold ${
                      plan.popular ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    ¥{plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.popular ? 'text-pink-100' : 'text-gray-500'
                    }`}
                  >
                    {plan.name === '免费版' ? '/永久' : '/月'}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check
                        size={16}
                        className={plan.popular ? 'text-pink-200' : 'text-green-500'}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? 'text-white/90' : 'text-gray-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-medium transition-all ${
                    plan.popular
                      ? 'bg-white text-pink-500 hover:bg-pink-50'
                      : plan.name === '免费版'
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                  }`}
                  onClick={() => {
                    if (plan.name === '免费版') {
                      navigate('/generate')
                    } else {
                      alert('支付功能开发中，敬请期待！')
                    }
                  }}
                >
                  {plan.name === '免费版' ? '继续使用' : '立即升级'}
                </button>
              </div>
            )
          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          支付安全由第三方支付平台保障
        </p >
      </div>
    </div>
  )
}
