"use client"

import { useState, useEffect } from "react"

export default function MinecraftPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-[calc(100vh-64px)] overflow-hidden bg-gray-900">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-green-200 border-t-green-500 rounded-full animate-spin mb-4"></div>
            <p className="text-white text-lg">Cargando Super Mario World...</p>
          </div>
        </div>
      )}

      <object
        data="https://ext.minijuegos.com/smw/emujs/play.php?c=snes&f=Super%20Mario%20World%20(U).smc&mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=205484&mp_game_uid=super-mario-world-online&mp_game_url=https%3A%2F%2Fwww.minijuegos.com%2Fembed%2Fsuper-mario-world-online&mp_int=1&mp_locale=es_ES&mp_player_type=IFRAME&mp_site_https_url=https%3A%2F%2Fwww.minijuegos.com%2F&mp_site_name=minijuegos.com&mp_site_url=https%3A%2F%2Fwww.minijuegos.com%2F&mp_timezone=Europe%2FMadrid&mp_view_type="
        type="text/html"
        className="w-full h-full"
        title="Super Mario World"
      >
        <embed
          src="https://ext.minijuegos.com/smw/emujs/play.php?c=snes&f=Super%20Mario%20World%20(U).smc&mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=205484&mp_game_uid=super-mario-world-online&mp_game_url=https%3A%2F%2Fwww.minijuegos.com%2Fembed%2Fsuper-mario-world-online&mp_int=1&mp_locale=es_ES&mp_player_type=IFRAME&mp_site_https_url=https%3A%2F%2Fwww.minijuegos.com%2F&mp_site_name=minijuegos.com&mp_site_url=https%3A%2F%2Fwww.minijuegos.com%2F&mp_timezone=Europe%2FMadrid&mp_view_type="
          type="text/html"
          className="w-full h-full"
          title="Super Mario World"
        />
      </object>
    </div>
  )
}
