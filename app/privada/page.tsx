"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { LogOut, FileText, Download, Shield } from "lucide-react"

export default function RecursosPrivadosPage() {
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
          <p className="mt-4 text-gray-600">Cargando recursos privados...</p>
        </div>
      </div>
    )
  }

  const isAdmin = username === "admin" // replace this with your own admin username

  // crea aquí tu propio apartado de cuentas.
  // para hacer que funcione el botón de desactivar cuenta, cambialo por tu correo o link de contacto.

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Recursos privados</h1>
            <p className="text-gray-600 mt-2">
              ¡Te damos la bienvenida, <span className="font-semibold">{username}</span>!
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </button>
        </div>
        
        
      
        
        <h2>{" \n "}</h2>
        <button className="text-red-500 font-medium hover:text-red-600 transition-colors"><a href="mailto:zimgoteam@gmail.com?subject=Desactivar%20mi%20cuenta&body=Correo%20generado%20autom%C3%A1ticamente%2C%20d%C3%A9jalo%20as%C3%AD%20y%20env%C3%ADalo.%0D%0A%0D%0ANombre%20de%20cuenta%3A%20%7Busername%7D%0D%0AContrase%C3%B1a%3A%20%7Bpassword%7D%0D%0ASolicitud%20de%20desactivaci%C3%B3n%20de%20cuenta%20y%20eliminaci%C3%B3n%20de%20datos%20personales." className="">
              <strong>Solicitar desactivación de cuenta</strong>
            </a></button>
      </div>
    </div>
  )
}
