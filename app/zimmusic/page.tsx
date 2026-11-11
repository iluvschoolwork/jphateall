"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Search, Play, Pause, SkipBack, SkipForward, Volume2, Music, X, Plus, RefreshCw } from "lucide-react"

// ###############################################
// #                                             #
// #  Este archivo es pura IA, no recomiendo     #
// #  partir de él para nada. Si apoyas el       #
// #  vibe-coding y quieres usarlo, pues vale.   #
// #                                             #
// ###############################################

interface Song {
  id: string
  title: string
  artist: string
  thumbnail: string
}

interface PlayerState {
  currentSong: Song | null
  isPlaying: boolean
  volume: number
}

export default function ZimMusicPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [queueSearchQuery, setQueueSearchQuery] = useState("")
  const [songs, setSongs] = useState<Song[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [playerState, setPlayerState] = useState<PlayerState>({
    currentSong: null,
    isPlaying: false,
    volume: 0.7,
  })
  const [queue, setQueue] = useState<Song[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showPlayer, setShowPlayer] = useState(false)
  const [recommendations, setRecommendations] = useState<Song[]>([])
  const [showQueueSearch, setShowQueueSearch] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem("zimmusic_recent_searches")
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  const filteredQueueSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(queueSearchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(queueSearchQuery.toLowerCase()),
  )

  const handleSearch = async (query: string = searchQuery) => {
    if (!query.trim()) return

    setIsLoading(true)
    setSearchPerformed(true)

    // Add to recent searches
    const newRecentSearches = [query, ...recentSearches.filter((s) => s !== query)].slice(0, 5)
    setRecentSearches(newRecentSearches)
    localStorage.setItem("zimmusic_recent_searches", JSON.stringify(newRecentSearches))

    try {
      const response = await fetch(`/api/youtube/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()

      const formattedSongs: Song[] =
        data.items?.slice(0, 12).map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          artist: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.medium.url,
        })) || []

      setSongs(formattedSongs)
    } catch (error) {
      console.error("Error searching:", error)
      setSongs([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSongSelect = (song: Song) => {
    setPlayerState((prev) => ({
      ...prev,
      currentSong: song,
      isPlaying: true,
    }))
    setQueue([song])
    setCurrentIndex(0)
    setShowPlayer(true)
    getRecommendations(song.artist)
  }

  const addToQueue = (song: Song) => {
    setQueue((prev) => [...prev, song])
    setQueueSearchQuery("")
  }

  const getRecommendations = (artist: string) => {
    const recommendations = songs.filter(
      (song) => song.artist.toLowerCase().includes(artist.toLowerCase()) && song.id !== playerState.currentSong?.id,
    )
    setRecommendations(recommendations.slice(0, 5))
  }

  const togglePlayPause = () => {
    setPlayerState((prev) => ({
      ...prev,
      isPlaying: !prev.isPlaying,
    }))
  }

  const playNext = () => {
    if (currentIndex < queue.length - 1) {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      setPlayerState((prev) => ({
        ...prev,
        currentSong: queue[nextIndex],
        isPlaying: true,
      }))
      getRecommendations(queue[nextIndex].artist)
    }
  }

  const playPrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1
      setCurrentIndex(prevIndex)
      setPlayerState((prev) => ({
        ...prev,
        currentSong: queue[prevIndex],
        isPlaying: true,
      }))
      getRecommendations(queue[prevIndex].artist)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch()
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setPlayerState((prev) => ({ ...prev, volume: newVolume }))
  }

  const removeFromQueue = (index: number) => {
    const newQueue = queue.filter((_, i) => i !== index)
    setQueue(newQueue)
    if (currentIndex >= newQueue.length) {
      setCurrentIndex(Math.max(0, newQueue.length - 1))
    }
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("zimmusic_recent_searches")
  }

  if (showPlayer && playerState.currentSong) {
    return (
      <div className="w-full h-[calc(100vh-64px)] bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col">
        <div className="bg-black bg-opacity-50 p-4 flex items-center justify-between">
          <button
            onClick={() => setShowPlayer(false)}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            <X size={20} />
            <span>Volver</span>
          </button>
          <div className="text-white text-sm font-semibold">ZimMusic</div>
          <div className="w-20"></div>
        </div>

        <div className="flex-1 flex">
          {/* Player principal */}
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <div className="mb-6">
              <img
                src={playerState.currentSong.thumbnail || "/placeholder.svg"}
                alt={playerState.currentSong.title}
                className="w-64 h-64 rounded-xl shadow-2xl object-cover"
              />
            </div>

            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-white mb-2 max-w-md line-clamp-2">
                {playerState.currentSong.title}
              </h1>
              <p className="text-lg text-gray-400 max-w-md">{playerState.currentSong.artist}</p>
            </div>

            <div className="flex items-center gap-4 text-white mb-8 w-full max-w-md">
              <Volume2 size={18} />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={playerState.volume}
                onChange={handleVolumeChange}
                className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm w-10 text-right">{Math.round(playerState.volume * 100)}</span>
            </div>

            <div className="flex items-center gap-8">
              <button
                onClick={playPrevious}
                disabled={currentIndex === 0}
                className="text-white hover:text-green-400 transition-colors disabled:opacity-50"
              >
                <SkipBack size={32} />
              </button>
              <button
                onClick={togglePlayPause}
                className="bg-green-500 text-white rounded-full p-4 hover:bg-green-600 transition-colors shadow-lg"
              >
                {playerState.isPlaying ? <Pause size={32} /> : <Play size={32} />}
              </button>
              <button
                onClick={playNext}
                disabled={currentIndex === queue.length - 1}
                className="text-white hover:text-green-400 transition-colors disabled:opacity-50"
              >
                <SkipForward size={32} />
              </button>
            </div>

            {/* YouTube player para reproducción */}
            <iframe
              key={playerState.currentSong.id}
              className="hidden"
              width="0"
              height="0"
              src={`https://www.youtube.com/embed/${playerState.currentSong.id}?autoplay=${playerState.isPlaying ? 1 : 0}&modestbranding=1`}
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Cola y búsqueda de cola */}
          <div className="w-80 bg-black bg-opacity-70 border-l border-gray-700 flex flex-col overflow-hidden">
            {/* Recomendaciones */}
            <div className="flex-1 overflow-y-auto p-4 border-b border-gray-700">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Recomendaciones</h3>
              <div className="space-y-2">
                {recommendations.map((song) => (
                  <button
                    key={song.id}
                    onClick={() => addToQueue(song)}
                    className="w-full text-left p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <p className="text-gray-200 text-sm font-medium truncate">{song.title}</p>
                    <p className="text-gray-500 text-xs truncate">{song.artist}</p>
                    <button className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mt-2 w-full">
                      Agregar
                    </button>
                  </button>
                ))}
              </div>
            </div>

            {/* Búsqueda en cola */}
            <div className="p-3 border-b border-gray-700">
              <button
                onClick={() => setShowQueueSearch(!showQueueSearch)}
                className="w-full flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors text-sm"
              >
                <Search size={16} />
                <span>Agregar a cola</span>
              </button>
              {showQueueSearch && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={queueSearchQuery}
                    onChange={(e) => setQueueSearchQuery(e.target.value)}
                    placeholder="Buscar canción..."
                    className="w-full px-2 py-1 rounded bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <div className="mt-2 max-h-40 overflow-y-auto space-y-1">
                    {filteredQueueSongs.slice(0, 5).map((song) => (
                      <button
                        key={song.id}
                        onClick={() => addToQueue(song)}
                        className="w-full text-left p-1 bg-gray-700 hover:bg-gray-600 rounded text-xs text-gray-200 truncate"
                      >
                        {song.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cola */}
            <div className="flex-1 overflow-y-auto p-4">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Cola ({queue.length})</h3>
              <div className="space-y-2">
                {queue.map((song, index) => (
                  <div
                    key={`${song.id}-${index}`}
                    className={`p-2 rounded-lg transition-all ${
                      index === currentIndex
                        ? "bg-green-500 bg-opacity-20 border border-green-500"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-200 text-sm font-medium truncate">{song.title}</p>
                        <p className="text-gray-500 text-xs truncate">{song.artist}</p>
                      </div>
                      {index !== currentIndex && (
                        <button
                          onClick={() => removeFromQueue(index)}
                          className="text-gray-400 hover:text-red-400 text-xs"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div className="mb-4 p-3 rounded-full bg-green-50">
          <Music className="h-12 w-12 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold mb-2">ZimMusic</h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-4">
          Escucha música sin límites con cola de reproducción y recomendaciones personalizadas.
        </p>
        <p className="text-sm text-gray-500">Reproduce música de YouTube con controles de reproducción</p>
        <p>EN DESARROLLO. NO FUNCIONA Y NO USAR.</p>
      </div>

      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Buscar Música</h2>
          <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por título o artista..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isLoading ? <RefreshCw className="animate-spin" size={20} /> : <Search size={20} />}
              Buscar
            </button>
          </form>

          {/* Recent searches */}
          {recentSearches.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Búsquedas recientes</h3>
                <button onClick={clearRecentSearches} className="text-sm text-green-500 hover:text-green-600">
                  Limpiar
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(search)
                      handleSearch(search)
                    }}
                    className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm hover:bg-green-100 transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-green-200 border-t-green-500 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">Buscando música...</p>
          </div>
        </div>
      )}

      {songs.length > 0 && !isLoading && (
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Resultados {searchQuery && `para "${searchQuery}"`} ({songs.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {songs.map((song) => (
              <div
                key={song.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => handleSongSelect(song)}
              >
                <div className="relative overflow-hidden h-40">
                  <img
                    src={song.thumbnail || "/placeholder.svg"}
                    alt={song.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all">
                    <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2">{song.title}</h3>
                  <p className="text-gray-600 mb-2">{song.artist}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      addToQueue(song)
                    }}
                    className="w-full text-sm bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors font-medium"
                  >
                    <Plus size={16} className="inline mr-1" />
                    Agregar a cola
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!searchPerformed && !isLoading && (
        <div className="text-center py-12">
          <Music size={64} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Descubre nueva música</h3>
          <p className="text-gray-500">Busca tu canción, artista o tema favorito</p>
        </div>
      )}
    </div>
  )
}
