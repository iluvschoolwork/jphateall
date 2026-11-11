"use client"

import { useState, useEffect } from "react"

export default function GeometryDashPage() {
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
            <p className="text-white text-lg">Cargando Plants vs Zombies...</p>
          </div>
        </div>
      )}

      <object data="https://ext.minijuegosgratis.com/pvz-modded/game/index.html?mp_api_as3_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fas3%2Flatest.swf&mp_api_as3_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-as%2F&mp_api_id=6973&mp_api_js_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fjs%2Flatest.js&mp_api_js_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-js%2F&mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=24954&mp_game_uid=plants-vs-zombies&mp_game_url=https%3A%2F%2Fwww.minijuegos.com%2Fjuego%2Fplants-vs-zombies&mp_int=1&mp_locale=es_ES&mp_player_type=IFRAME&mp_site_https_url=https%3A%2F%2Fwww.minijuegos.com%2F&mp_site_name=minijuegos.com&mp_site_url=https%3A%2F%2Fwww.minijuegos.com%2F&mp_timezone=Europe%2FMadrid&mp_view_type=&mini_signature=e6f952bda262a02fb17757b027ae7706&xdm_e=https%3A%2F%2Fwww.minijuegos.com&xdm_c=default6658&xdm_p=1" type="text/html" className="w-full h-full" title="com.rpcir58.zimgo.unitycontainer">
        <embed src="https://ext.minijuegosgratis.com/pvz-modded/game/index.html?mp_api_as3_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fas3%2Flatest.swf&mp_api_as3_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-as%2F&mp_api_id=6973&mp_api_js_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fjs%2Flatest.js&mp_api_js_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-js%2F&mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=24954&mp_game_uid=plants-vs-zombies&mp_game_url=https%3A%2F%2Fwww.minijuegos.com%2Fjuego%2Fplants-vs-zombies&mp_int=1&mp_locale=es_ES&mp_player_type=IFRAME&mp_site_https_url=https%3A%2F%2Fwww.minijuegos.com%2F&mp_site_name=minijuegos.com&mp_site_url=https%3A%2F%2Fwww.minijuegos.com%2F&mp_timezone=Europe%2FMadrid&mp_view_type=&mini_signature=e6f952bda262a02fb17757b027ae7706&xdm_e=https%3A%2F%2Fwww.minijuegos.com&xdm_c=default6658&xdm_p=1" type="text/html" className="w-full h-full" title="com.rpcir58.zimgo.unitycontainer" />
      </object>
    </div>
  )
}
