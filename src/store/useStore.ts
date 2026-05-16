import { create } from 'zustand'

export interface GeneratedPhoto {
  id: string
  imageUrl: string
  destination: string
  destinationName: string
  style: string
  styleName: string
  createdAt: Date
}

interface AppState {
  photos: GeneratedPhoto[]
  selectedDestination: string | null
  selectedStyle: string | null
  addPhoto: (photo: Omit<GeneratedPhoto, 'id' | 'createdAt'>) => void
  removePhoto: (id: string) => void
  setDestination: (id: string | null) => void
  setStyle: (id: string | null) => void
  loadPhotos: () => void
}

export const useStore = create<AppState>((set, get) => ({
  photos: [],
  selectedDestination: null,
  selectedStyle: null,

  addPhoto: (photo) => {
    const newPhoto: GeneratedPhoto = {
      ...photo,
      id: Date.now().toString(),
      createdAt: new Date(),
    }
    const updated = [...get().photos, newPhoto]
    set({ photos: updated })
    localStorage.setItem('photos', JSON.stringify(updated))
  },

  removePhoto: (id) => {
    const updated = get().photos.filter((p) => p.id !== id)
    set({ photos: updated })
    localStorage.setItem('photos', JSON.stringify(updated))
  },

  setDestination: (id)
