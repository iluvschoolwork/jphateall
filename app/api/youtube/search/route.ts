import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("q")
  const maxResults = searchParams.get("maxResults") || "12"

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 })
  }

  try {
    const API_KEY = "YOUR_API_KEY_HERE"
    const encodedQuery = encodeURIComponent(query)
    const searchUrl =
      "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=" +
      encodedQuery +
      "&maxResults=" +
      maxResults +
      "&key=" +
      API_KEY

    const response = await fetch(searchUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      console.error("YouTube API error:", response.status, response.statusText)
      const mockData = generateMockResults(query)
      return NextResponse.json(mockData)
    }

    const data = await response.json()

    const videos = data.items
      ? data.items.map((item: any) => {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
            channel: item.snippet.channelTitle,
            publishedAt: formatDate(item.snippet.publishedAt),
            description: item.snippet.description,
          }
        })
      : []

    return NextResponse.json({
      videos: videos,
      total: data.pageInfo ? data.pageInfo.totalResults : 0,
    })
  } catch (error) {
    console.error("YouTube API error:", error)
    const mockData = generateMockResults(query)
    return NextResponse.json(mockData)
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) return "hace 1 día"
  if (diffDays < 7) return "hace " + diffDays + " días"
  if (diffDays < 30) return "hace " + Math.floor(diffDays / 7) + " semanas"
  if (diffDays < 365) return "hace " + Math.floor(diffDays / 30) + " meses"
  return "hace " + Math.floor(diffDays / 365) + " años"
}

function generateMockResults(query: string) {
  const mockVideos = [
    {
      id: "4dJxf5sCnUE",
      title: "ZIMGo Rewind 2025",
      thumbnail: "https://img.youtube.com/vi/4dJxf5sCnUE/mqdefault.jpg",
      channel: "ZIMGo",
      publishedAt: "2 sept 2025",
      description: "Ha ocurrido un error. Avisa a un partner o contacta con zimgoteam@gmail.com cuanto antes.",
    },
    {
      id: "_FJrj68rY1A",
      title: "Tu búsqueda: " + query,
      thumbnail: "/images/pepenoyt.png",
      channel: "Desconocido",
      publishedAt: "Sin fecha de publicación",
      description: "Ha ocurrido un error. Avisa a un partner o contacta con zimgoteam@gmail.com cuanto antes.",
    },
  ]

  return { videos: mockVideos, total: mockVideos.length }
}
