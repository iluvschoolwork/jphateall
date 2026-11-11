"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { LogOut, Download, Smartphone, Monitor, Shield, Star, CheckCircle } from "lucide-react"

export default function ZimAppPage() {
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    const storedUsername = localStorage.getItem("username")

    if (isAuthenticated !== "true") {
      router.push("/login")
    } else {
      setUsername(storedUsername || "")
      setLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("username")
    router.push("/login")
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando ZIM App...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">ZIM App</h1>
            <p className="text-gray-600">Descarga la aplicación oficial de ZIM en tu iPad del colegio.</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </button>
        </div>

        {/* App Features */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">ZIM App - Aplicación para el iPad</h2>
            <p className="text-gray-600">Usa todo ZIM y funciones extras desde un atajo dinámico para el iPad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-semibold mb-2">Acceso Offline</h3>
              <p className="text-sm text-gray-600">Usa ZIM App incluso sin conexión a internet</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <Star className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="font-semibold mb-2">Smart ZIM</h3>
              <p className="text-sm text-gray-600">Utiliza la IA desbloqueada de ZIM App</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                <Shield className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="font-semibold mb-2">Showlife</h3>
              <p className="text-sm text-gray-600">Nuestra red social integrada completamente en un atajo</p>
            </div>
          </div>
        </div>

        {/* Download Sections */}
        <div className="max-w-2xl mx-auto mb-8">
          {/* Desktop Downloads */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-blue-50 mr-3">
                <Monitor className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-lg">Enlaces de descarga</h3>
            </div>
            <p className="text-gray-600 mb-6">Descarga ZIM App en tu dispositivo con pocos clicks.</p>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <div>
                  <h4 className="font-medium">Última versión</h4>
                  <p className="text-sm text-gray-500">Descarga la última versión de ZIM App desde la web original.</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                    <Download className="h-4 w-4 inline mr-2" />
                    <a href="https://zimgo.vercel.app/zimapp" className="">
              Ir a ZIMGo
            </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Installation Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Instrucciones de Instalación</h3>
          <div className="text-blue-800 text-sm space-y-2">
            <p>
              <strong>iPad:</strong> Exporta el archivo ZIP a la aplicación de Archivos del
              sistema. Púlsalo y accede a tu nueva carpeta llamada "ZimAppFiles". Abre el archivo
              .shortcut con la aplicación de Atajos y pulsa "Añadir atajo" para importarlo.
            </p>
            <p>
              <strong>Aplicación solo disponible para dispositivos Apple o con Apple Shortcuts instalado.</strong>
            </p>
          </div>
        </div>
      </div>
  )
}
