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
            <p className="text-white text-lg">Cargando Clash Royale...</p>
          </div>
        </div>
      )}

      <object
        data="https://html5.gamedistribution.com/rvvASMiM/7fb6eddc884e4a0380f40410134650a3/index.html?gdpr-targeting=0&gdpr-tracking=0&gdpr-third-party=0&euConsent=undefined&gd_sdk_referrer_url=https%3A%2F%2Fwww.misjuegos.com%2Fjuego%2Fclash_royale_online.html&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2h0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tLzdmYjZlZGRjODg0ZTRhMDM4MGY0MDQxMDEzNDY1MGEzLz9nZHByLXRhcmdldGluZz0wJmdkcHItdHJhY2tpbmc9MCZnZHByLXRoaXJkLXBhcnR5PTAmZXVDb25zZW50PXVuZGVmaW5lZCZnZF9zZGtfcmVmZXJyZXJfdXJsPWh0dHBzOi8vd3d3Lm1pc2p1ZWdvcy5jb20vanVlZ28vY2xhc2hfcm95YWxlX29ubGluZS5odG1sIiwicGFyZW50RG9tYWluIjoibWlzanVlZ29zLmNvbSIsInRvcERvbWFpbiI6Im1pc2p1ZWdvcy5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9"
        type="text/html"
        className="w-full h-full"
        title="Clash Royale"
      >
        <embed
          src="https://html5.gamedistribution.com/rvvASMiM/7fb6eddc884e4a0380f40410134650a3/index.html?gdpr-targeting=0&gdpr-tracking=0&gdpr-third-party=0&euConsent=undefined&gd_sdk_referrer_url=https%3A%2F%2Fwww.misjuegos.com%2Fjuego%2Fclash_royale_online.html&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2h0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tLzdmYjZlZGRjODg0ZTRhMDM4MGY0MDQxMDEzNDY1MGEzLz9nZHByLXRhcmdldGluZz0wJmdkcHItdHJhY2tpbmc9MCZnZHByLXRoaXJkLXBhcnR5PTAmZXVDb25zZW50PXVuZGVmaW5lZCZnZF9zZGtfcmVmZXJyZXJfdXJsPWh0dHBzOi8vd3d3Lm1pc2p1ZWdvcy5jb20vanVlZ28vY2xhc2hfcm95YWxlX29ubGluZS5odG1sIiwicGFyZW50RG9tYWluIjoibWlzanVlZ29zLmNvbSIsInRvcERvbWFpbiI6Im1pc2p1ZWdvcy5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9"
          type="text/html"
          className="w-full h-full"
          title="Clash Royale"
        />
      </object>
    </div>
  )
}
