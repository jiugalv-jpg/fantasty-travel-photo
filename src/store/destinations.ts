export interface Destination {
  id: string
  name: string
  country: string
  emoji: string
  description: string
  imageUrl: string
}

export const destinations: Destination[] = [
  {
    id: 'paris',
    name: '巴黎',
    country: '法国',
    emoji: '🗼',
    description: '浪漫之都，埃菲尔铁塔下的优雅',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
  },
  {
    id: 'santorini',
    name: '圣托里尼',
    country: '希腊',
    emoji: '🏛️',
    description: '蓝白小镇，爱琴海的梦幻明珠',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
  },
  {
    id: 'tokyo',
    name: '东京',
    country: '日本',
    emoji: '🗾',
    description: '现代都市与传统文化的完美融合',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
  },
  {
    id: 'swiss',
    name: '阿尔卑斯',
    country: '瑞士',
    emoji: '🏔️',
    description: '雪山巍峨，童话般的纯净世界',
    imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop',
  },
  {
    id: 'maldives',
    name: '马尔代夫',
    country: '马尔代夫',
    emoji: '🏝️',
    description: '椰林树影，水清沙白的度假天堂',
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop',
  },
  {
    id: 'venice',
    name: '威尼斯',
    country: '意大利',
    emoji: '🚣',
    description: '水上城市的独特魅力与浪漫',
    imageUrl: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&h=600&fit=crop',
  },
  {
    id: 'newyork',
    name: '纽约',
    country: '美国',
    emoji: '🗽',
    description: '不夜城的繁华与自由女神像',
    imageUrl: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&h=600&fit=crop',
  },
  {
    id: 'bali',
    name: '巴厘岛',
    country: '印尼',
    emoji: '🌴',
    description: '热带风情与宗教文化的交织',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
  },
  {
    id: 'london',
    name: '伦敦',
    country: '英国',
    emoji: '🎡',
    description: '英伦风情的优雅与泰晤士河的浪漫',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop',
  },
  {
    id: 'dubai',
    name: '迪拜',
    country: '阿联酋',
    emoji: '🏙️',
    description: '沙漠中的奢华与未来感的都市',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
  },
  {
    id: 'iceland',
    name: '冰岛',
    country: '冰岛',
    emoji: '🌌',
    description: '极光下的神秘与自然的壮美',
    imageUrl: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&h=600&fit=crop',
  },
  {
    id: 'morocco',
    name: '摩洛哥',
    country: '摩洛哥',
    emoji: '🕌',
    description: '色彩斑斓的北非风情',
    imageUrl: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&h=600&fit=crop',
  },
]

export const styles = [
  { id: 'japanese', name: '日系清新', emoji: '🌸', description: '柔和色调，自然光感' },
  { id: 'french', name: '法式浪漫', emoji: '🥐', description: '慵懒优雅，咖啡馆风情' },
  { id: 'korean', name: '韩系ins', emoji: '✨', description: '干净通透，精致生活' },
  { id: 'vintage', name: '复古胶片', emoji: '🎞️', description: '怀旧颗粒感，时光质感' },
  { id: 'fantasy', name: '梦幻仙境', emoji: '🧚', description: '魔法光效，童话氛围' },
  { id: 'tropical', name: '热带风情', emoji: '🌴', description: '明亮饱和，海岛气息' },
]
