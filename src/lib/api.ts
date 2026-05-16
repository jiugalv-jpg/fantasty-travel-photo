export interface GenerateRequest {
  image: string
  destination: string
  style: string
  description?: string
}

export interface GenerateResponse {
  success: boolean
  imageUrl?: string
  message?: string
}

export async function generateTravelPhoto(
  request: GenerateRequest
): Promise<GenerateResponse> {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const seed = Math.floor(Math.random() * 1000)
  const placeholderUrl = `https://picsum.photos/seed/${request.destination}${seed}/800/600`

  return {
    success: true,
    imageUrl: placeholderUrl,
  }
}
