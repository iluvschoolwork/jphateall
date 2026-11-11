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
        <p className="text-center text-lg mb-6">📺 Estás viendo TDP en Stream desde Zeon</p>

        <div className="w-full h-[calc(100vh-200px)] overflow-hidden bg-white rounded-lg shadow-lg">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-500 flex items-center justify-center z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-green-200 border-t-green-500 rounded-full animate-spin mb-4"></div>
                <p className="text-white text-lg">Conectando</p>
              </div>
            </div>
          )}

          <object data="https://rtvelivestream.rtve.es/rtvesec/tdp/tdp_main_dvr.m3u8?hdnts=exp%3D1764976882%7Ehmac%3D29619767762f0f5390c6e90a33927855e1778fed2304cf7cf56f300148fd69d8&idasset=1712295" type="text/html" className="w-full h-full" title="ZIMGo Zeon Stream">
            <embed src="https://rtvelivestream.rtve.es/rtvesec/tdp/tdp_main_dvr.m3u8?hdnts=exp%3D1764976882%7Ehmac%3D29619767762f0f5390c6e90a33927855e1778fed2304cf7cf56f300148fd69d8&idasset=1712295" type="text/html" className="w-full h-full" title="ZIMGo Zeon Stream" />
          </object>
        </div>
      </div>
    </div>
  )
}
