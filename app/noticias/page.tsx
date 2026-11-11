import { GamepadIcon as GameController } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GamesPage() {
  // Array of game objects with custom titles and descriptions
  const games = [
    {
      id: 1,
      title: "Tenemos que hablar.",
      description: "02/10/25",
      link: "/noticias/006",
    },
    {
      id: 2,
      title: "Deeptionary | Futuro proyecto",
      description: "02/10/25",
      link: "/noticias/005",
    },
    {
      id: 3,
      title: "ZIM App Versión 4.1",
      description: "19/09/25",
      link: "/noticias/004",
    },
    {
      id: 4,
      title: "Nuevo dominio de ZIMGo",
      description: "23/09/25",
      link: "/noticias/003",
    },
    {
      id: 5,
      title: "Canal de WhatsApp",
      description: "01/10/25",
      link: "/noticias/002",
    },
    {
      id: 6,
      title: "¡Ahora se pueden ver noticias desde ZIMGo!",
      description: "01/10/25",
      link: "/noticias/001",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div className="mb-4 p-3 rounded-full bg-green-50">
          <GameController className="h-12 w-12 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold mb-6">Noticias</h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">Mira diferentes novedades enviadas por el equipo de ZIMGo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {games.map((game) => (
          <div
            key={game.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{game.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{game.description}</p>
              {game.link ? (
                <Link href={game.link} className="text-green-500 font-medium hover:text-green-600 transition-colors">
                  Ver noticia completa
                </Link>
              ) : (
                <button className="text-green-500 font-medium hover:text-green-600 transition-colors">
                  Ver noticia completa
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
