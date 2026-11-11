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
            <p className="text-white text-lg">Cargando 2 Player Games...</p>
          </div>
        </div>
      )}

      <object data="https://html5.gamedistribution.com/rvvASMiM/4625c660923c42b8a5c8e4d2fbdc98ee/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.minijuegos.com%2Fjuego%2F2-player-battle&mp_api_as3_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fas3%2Flatest.swf&mp_api_as3_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-as%2F&mp_api_id=8850&mp_api_js_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fjs%2Flatest.js&mp_api_js_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-js%2F&mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=255668&mp_game_uid=2-player-battle&mp_game_url=https%3A%2F%2Fwww.minijuegos.com%2Fjuego%2F2-player-battle&mp_int=1&mp_locale=es_ES&mp_player_type=IFRAME&mp_site_https_url=https%3A%2F%2Fwww.minijuegos.com%2F&mp_site_name=minijuegos.com&mp_site_url=https%3A%2F%2Fwww.minijuegos.com%2F&mp_timezone=Europe%2FMadrid&mp_view_type=&mini_signature=3609096ebf10f8e182598cd73fff3b29&xdm_e=https%3A%2F%2Fwww.minijuegos.com&xdm_c=default748&xdm_p=1&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5taW5panVlZ29zLmNvbS9qdWVnby8yLXBsYXllci1iYXR0bGUiLCJwYXJlbnREb21haW4iOiJtaW5panVlZ29zLmNvbSIsInRvcERvbWFpbiI6Im1pbmlqdWVnb3MuY29tIiwiaGFzSW1wcmVzc2lvbiI6ZmFsc2UsImxvYWRlckVuYWJsZWQiOnRydWUsImhvc3QiOiJodG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInZlcnNpb24iOiIxLjUuMTgifQ%253D%253D" type="text/html" className="w-full h-full" title="com.rpcir58.zimgo.unitycontainer">
        <embed src="https://html5.gamedistribution.com/rvvASMiM/4625c660923c42b8a5c8e4d2fbdc98ee/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.minijuegos.com%2Fjuego%2F2-player-battle&mp_api_as3_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fas3%2Flatest.swf&mp_api_as3_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-as%2F&mp_api_id=8850&mp_api_js_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fjs%2Flatest.js&mp_api_js_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-js%2F&mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=255668&mp_game_uid=2-player-battle&mp_game_url=https%3A%2F%2Fwww.minijuegos.com%2Fjuego%2F2-player-battle&mp_int=1&mp_locale=es_ES&mp_player_type=IFRAME&mp_site_https_url=https%3A%2F%2Fwww.minijuegos.com%2F&mp_site_name=minijuegos.com&mp_site_url=https%3A%2F%2Fwww.minijuegos.com%2F&mp_timezone=Europe%2FMadrid&mp_view_type=&mini_signature=3609096ebf10f8e182598cd73fff3b29&xdm_e=https%3A%2F%2Fwww.minijuegos.com&xdm_c=default748&xdm_p=1&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5taW5panVlZ29zLmNvbS9qdWVnby8yLXBsYXllci1iYXR0bGUiLCJwYXJlbnREb21haW4iOiJtaW5panVlZ29zLmNvbSIsInRvcERvbWFpbiI6Im1pbmlqdWVnb3MuY29tIiwiaGFzSW1wcmVzc2lvbiI6ZmFsc2UsImxvYWRlckVuYWJsZWQiOnRydWUsImhvc3QiOiJodG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInZlcnNpb24iOiIxLjUuMTgifQ%253D%253D" type="text/html" className="w-full h-full" title="com.rpcir58.zimgo.unitycontainer" />
      </object>
    </div>
  )
}
