"use client"

import { useState, useEffect } from "react"

export default function KoFiPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-lg mb-6">📺 Estás viendo La 1 en Stream desde Zeon</p>

        <div className="w-full h-[calc(100vh-200px)] overflow-hidden bg-white rounded-lg shadow-lg">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-500 flex items-center justify-center z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-green-200 border-t-green-500 rounded-full animate-spin mb-4"></div>
                <p className="text-white text-lg">Conectando</p>
              </div>
            </div>
          )}

          <object data="https://rtvelivestream.rtve.es/rtvesec/la1/la1_main_dvr.m3u8?hdnts=exp%3D1764974627%7Ehmac%3D382ea3ec8759fc79dfc029224577b3f3f577c4b1ca179b2d024bf4306111193c&idasset=1688877" type="text/html" className="w-full h-full" title="ZIMGo Zeon Stream">
            <embed src="https://rtvelivestream.rtve.es/rtvesec/la1/la1_main_dvr.m3u8?hdnts=exp%3D1764974627%7Ehmac%3D382ea3ec8759fc79dfc029224577b3f3f577c4b1ca179b2d024bf4306111193c&idasset=1688877" type="text/html" className="w-full h-full" title="ZIMGo Zeon Stream" />
          </object>
        </div>
      </div>
    </div>
  )
}
