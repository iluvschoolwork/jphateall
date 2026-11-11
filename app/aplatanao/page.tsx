import { GamepadIcon as GameController } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GamesPage() {
  // Array of game objects with custom titles and descriptions
  const games = [
    {
      id: 1,
      title: "Aplatanao: El Comienzo",
      description: "Edición Atajos - Español - 76MB",
      image: "/images/pixelcraft.png",
      link: "/apps/pixelcraft",
    },
    {
      id: 2,
      title: "Photoshop",
      description: "Versión de prueba de Photoshop desde ZIMGo.",
      image: "https://conciliafacil.es/wp-content/uploads/2024/05/photoshop.jpg",
      link: "/apps/photoshop",
    },
    {
      id: 3,
      title: "Visual Studio Code",
      description: "Accede a una versión limitada de Visual Studio Code.",
      image:
        "https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/welcome-page.png",
      link: "/apps/visualstudio",
    },
    {
      id: 4,
      title: "Editor de Scratch",
      description: "Usa el editor de Scratch Lab desde ZIMGo. Proyectos incompatibles con Scratch normal.",
      image: "/images/scratchlab.png",
      link: "/apps/scratch",
    },
    {
      id: 5,
      title: "Talk AI",
      description: "Habla con la Inteligencia Artificial basada en GPT-5 desde ZIMGo.",
      image:
        "https://meta-data.es/wp-content/uploads/2023/06/Imagenes-blog-4.png",
      link: "/apps/talkai",
    },
    {
      id: 6,
      title: "PNG To Minecraft",
      description: "Sube una imagen y conviertela en un archivo de World Edit.",
      image: "/images/pngtoschem.png",
      link: "/apps/schematic",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div className="mb-4 p-3 rounded-full bg-green-50">
          <GameController className="h-12 w-12 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold mb-6">Aplatanao</h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">Juego creado por todo el equipo de ZIMGo</p>
      </div>

      <div className="max-w-4xl mx-auto prose">
        <h2>¿Qué es Aplatanao?</h2>
        <p>
          Aplatanao es un juego de historia principalmente hecho en Atajos de Apple. Es un juego de rol (RPG) donde puedes hablar con diferentes personajes y ir avanzando en la historia. Puedes caerle bien o mal a cada persona, y dependiendo de tu trato con ella te hablará diferente y irá cambiando la historia.
        </p>

        <h2>Ayúdanos, te lo agradeceremos.</h2>
          <p>
            Reporta cualquier fallo de cualquier edición o versión de Aplatanao o danos ideas para continuar transcuyendo la historia en futuros juegos.Envíanos un email a {" "}
            <a href="mailto:zimgoteam@gmail.com" className="text-green-500 hover:text-green-600">
              <strong>zimgoteam@gmail.com</strong>
            </a>
            .
            ¡Gracias por colaborar!
          </p>

        <h2><strong>🍌 Desarrolladores de Aplatanao</strong></h2>
          <p>
            RP_Circulo: Programador principal, creador de la historia.
            Testers: alvaro_1pl, resdo9, Huguito77YT, Samael705
            Colaboradores en la historia: resdo9
          </p>
          <p>
           <a href="/legal" className="text-green-500 hover:text-green-600">
              Información legal
           </a>
          </p>
      </div>
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
                <span className="text-gray-400">Game {game.id} Coming Soon</span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{game.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{game.description}</p>
              {game.link ? (
                <Link href={game.link} className="text-green-500 font-medium hover:text-green-600 transition-colors">
                  Descargar Aplatanao
                </Link>
              ) : (
                <button className="text-green-500 font-medium hover:text-green-600 transition-colors">
                  Abrir aplicación
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
