import { GamepadIcon as GameController } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GamesPage() {
  // Array of game objects with custom titles and descriptions
  const games = [
    {
      id: 1,
      title: "LOS40",
      description: "Escucha LOS40 Principales desde Zeon. Creditos: streamtheworld.com",
      image: "https://i.ytimg.com/vi/bvJkIbIetEc/maxresdefault.jpg",
      link: "/zeon/los40",
    },
    {
      id: 2,
      title: "Cadena 100",
      description: "Escucha Cadena 100 desde Zeon. Creditos: flumotion.com",
      image: "https://graffica.info/wp-content/uploads/imagen_noticia_5390.jpg",
      link: "/zeon/cadena100",
    },
    {
      id: 3,
      title: "La 1",
      description: "Mira La 1 en directo desde Zeon",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Logo_La_1.svg",
      link: "/zeon/la1",
    },
    {
      id: 4,
      title: "La 2",
      description: "Mira La 2 en directo desde Zeon",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_La_2.svg",
      link: "/zeon/la2",
    },
    {
      id: 5,
      title: "24h",
      description: "Mira 24h en directo desde Zeon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Logo_Canal_24_horas.svg/1200px-Logo_Canal_24_horas.svg.png",
      link: "/zeon/24h",
    },
    {
      id: 6,
      title: "Real Madrid TV",
      description: "Mira Real Madrid TV en directo desde Zeon",
      image: "https://images.pluto.tv/channels/67a3b45a21af380008133aa4/featuredImage.jpg?auto=&q=70&fit=fill&fill=blur&ixlib=react-9.1.5",
      link: "/zeon/realmadridtv",
    },
    {
      id: 7,
      title: "TDP",
      description: "Mira Teledeporte en directo desde Zeon",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Teledeporte.svg/1200px-Teledeporte.svg.png",
      link: "/zeon/tdp",
    },
    {
      id: 8,
      title: "Clan",
      description: "Mira Clan en directo desde Zeon",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Clan_logo.svg/1200px-Clan_logo.svg.png",
      link: "/zeon/clan",
    },
    {
      id: 9,
      title: "Antena 3",
      description: "Mira Antena 3 en directo desde Zeon",
      image: "https://imagenes.atresplayer.com/atp/clipping/cmsimages01/2025/11/04/75602CF8-7668-4223-B121-3FFFA4177E2E//720x540.jpg",
      link: "/zeon/antena3",
    },
    {
      id: 10,
      title: "TV Galega 2",
      description: "Mira la televisión gallega en directo desde Zeon",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEbARclH4XPPpvNVbBV68XfkdZhEbnZIc5A&s",
      link: "/zeon/tvg2",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div className="mb-4 p-3 rounded-full bg-green-50">
          <GameController className="fa fa-television" />
        </div>
        <h1 className="text-4xl font-bold mb-6">Zeon</h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">Accede a radios y canales de televisión en directo desde ZIMGo.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {games.map((game) => (
          <div
            key={game.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              {game.image ? (
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              ) : (
                <span className="text-gray-400">Canal {game.id} disponible pronto.</span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{game.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{game.description}</p>
              {game.link ? (
                <Link href={game.link} className="text-green-500 font-medium hover:text-green-600 transition-colors">
                  Stream desde Zeon
                </Link>
              ) : (
                <button className="text-green-500 font-medium hover:text-green-600 transition-colors">
                  Stream desde Zeon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
