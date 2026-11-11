import { GamepadIcon as GameController } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GamesPage() {
  // Array of game objects with custom titles and descriptions
  const games = [
    {
      id: 1,
      title: "Minecraft",
      description: "Juega a Minecraft 1.8.8 desde ZIMGo.",
      image: "/images/minecraft.png",
      link: "/ju3gos/minecraft",
    },
    {
      id: 2,
      title: "Geometry Dash",
      description: "Juega a Geometry Dash Lite desde ZIMGo. Compatible con modo táctil.",
      image: "/images/geometrydash.jpg",
      link: "/ju3gos/geometrydash",
    },
    {
      id: 3,
      title: "Fruit Ninja",
      description: "Corta las frutas y evita las bombas en este juego tan adictivo.",
      image:
        "https://www.coolmathgames.com/sites/default/files/styles/mobile_game_image/public/FruitNinja_OG-Logo.jpg.webp?itok=p9HjDBpn",
      link: "/ju3gos/fruit-ninja",
    },
    {
      id: 4,
      title: "Flappy Bird",
      description: "Salta y evita tocar las tuberías con este gran clásico.",
      image: "https://techfrontier.com.au/wp-content/uploads/2025/07/Remembering-Flappy-Bird.jpg",
      link: "/ju3gos/flappy-bird",
    },
    {
      id: 5,
      title: "Subway Surfers",
      description: "Juega a Subway Surfers desde ZIMGo.",
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/03/subway-surfers.jpg?tf=3840x",
      link: "/ju3gos/subway-surfers",
    },
    {
      id: 6,
      title: "Agar.io",
      description: "Comete a las bolas pequeñas y hazte cada vez más grande.",
      image: "https://lh4.googleusercontent.com/proxy/bNZXGsuurxs7ZIBx8ELmxnrI5knk0AyZ62k2FEYq5DXRNWnwtsoCY5HaGsri5WkUI_yfL8Bg290MY7IFZakgVlJHU72uSANfr9Yb5bvgN8j9Y2Jp00A",
      link: "/ju3gos/agario",
    },
    {
      id: 7,
      title: "Level Devil",
      description: "Divertido y a la vez frustrante, juego de plataformas.",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3242750/a78a03f1047a590e6b9b0360ec361924d7f98959/capsule_616x353.jpg?t=1743000677",
      link: "/ju3gos/level-devil",
    },
    {
      id: 8,
      title: "Crossy Road",
      description: "Cruza la carretera en este juego infinito de estrategia.",
      image: "https://static1.squarespace.com/static/5cedd5e7c6e7df0001bbb67c/t/675b681dbe3e687a57ff005c/1734043683478/CrossyRoad_Banner.png?format=1500w",
      link: "/ju3gos/crossy-road",
    },
    {
      id: 9,
      title: "FC 25",
      description: "Juega a un fan-made de FC 25 en ZIMGo.",
      image: "https://img.asmedia.epimg.net/resizer/v2/OM6D4IGPLFHZTLNP2PZVXGJY3Q.jpg?auth=37c91b6633b9bb6c9e2dc06573b562af0ac5ddae99eebd9a4e65b50ddd07d5a2&width=644&height=362&smart=true",
      link: "/ju3gos/fc-25",
    },
    {
      id: 10,
      title: "Krunker.io",
      description: "Juega a diferentes modalidades shooter como FFA, Deadmatch o Capture the Flag.",
      image:
        "https://imgs.crazygames.com/games/krunker-io/cover-1591336739727.png?metadata=none&quality=100&width=1200&height=630&fit=crop",
      link: "/ju3gos/krunker",
    },
    {
      id: 11,
      title: "Car Racing",
      description: "¡Esquiva a los coches en este juego de carreras dinámico!",
      image:
        "https://cdn1.epicgames.com/spt-assets/9a81f51cb53441daa0adb2c3bd1d46dd/mr-racer--premium-1us35.jpg?resize=1&w=480&h=270&quality=medium",
      link: "/ju3gos/car-racing",
    },
    {
      id: 12,
      title: "Friday Night Funkin",
      description: "Juega a FNF de itch.io desde ZIMGo. Disponible también para táctil.",
      image: "https://abg-static.s3.amazonaws.com/media/fridaynightfunkin-thumbnail.webp",
      link: "/ju3gos/fnf",
    },
    {
      id: 13,
      title: "Among Us",
      description: "Juega a un fanmade de Among Us desde ZIMGo. Modo online incompatible.",
      image: "https://www.lavanguardia.com/files/image_449_220/uploads/2020/12/16/5fd9d501ac6eb.jpeg",
      link: "/ju3gos/amongus",
    },
    {
      id: 14,
      title: "Clash Royale",
      description: "Juega a un fanmade de Clash Royale (Clash of Vikings) en ZIMGo.",
      image: "https://www.exitlag.com/blog/wp-content/uploads/2025/04/How-to-play-Clash-Royale-on-PC_-the-ultimate-setup-and-optimization-guide.webp",
      link: "/ju3gos/clashroyale",
    },
    {
      id: 15,
      title: "Tomb of the Mask",
      description: "¡Intenta coger todos los puntos sin morir en este juego arcade de aventuras!",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tomb_of_the_Mask_logo.png",
      link: "/ju3gos/tombofthemask",
    },
    {
      id: 16,
      title: "Rainbow Obby",
      description: "¡Haz parkour en diferentes vehículos en este juego ambientado en Roblox!",
      image: "https://amongus-online.net/images/rainbow-obby.webp",
      link: "/ju3gos/rainbow-obby",
    },
    {
      id: 17,
      title: "UNO",
      description: "El clásico juego de cartas, también disponible en ZIMGo.",
      image: "/images/unojuego.jpg",
      link: "/ju3gos/uno",
    },
    {
      id: 18,
      title: "Evo F5",
      description: "Conducción libre de coches en mapa abierto.",
      image: "https://static.lambocars.com/wp-content/uploads/2023/08/Screenshot-2023-08-24-at-12.33.13-PM.jpg",
      link: "/ju3gos/evof5",
    },
    {
      id: 19,
      title: "Bloxd.io",
      description: "Juega minijuegos de supervivencia, Bedwars, OneBlock, Creativo o Parkour.",
      image: "https://store-images.s-microsoft.com/image/apps.11333.14525867990573942.b18ba388-cb6a-4211-ae53-f44b808b4a89.5c17d572-681e-4a53-b029-2881a495f4e7",
      link: "/ju3gos/bloxdio"
    },
    {
      id: 20,
      title: "Super Mario World (SNES)",
      description: "¡Juega al Super Mario World de la SNES desde ZIMGo!",
      image: "/images/super-mario-world.png",
      link: "/ju3gos/super-mario-world",
    },
    {
      id: 21,
      title: "Super Mario 64 (N64)",
      description: "¡Juega al gran primer 3D de Super Mario desde ZIMGo!",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e9/Super_Mario_64.png",
      link: "/ju3gos/mario-64",
    },
    {
      id: 22,
      title: "Super Mario Bros",
      description: "El primer éxito de Mario, disponible en ZIMGo.",
      image: "/images/super-mario-bros.png",
      link: "/ju3gos/super-mario-bros",
    },
    {
      id: 23,
      title: "Big Brain Academy (DS)",
      description: "¡Descubre cuanto pesa tu cerebro en este juego de lógica!",
      image: "https://assetsio.gnwcdn.com/nintendo-announces-new-big-brain-academy-focused-on-multiplayer-1630591351399.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      link: "/ju3gos/big-brain-academy",
    },
    {
      id: 24,
      title: "Mario Kart DS",
      description: "Juega al Mario Kart de la Nintendo DS desde ZIMGo.",
      image: "https://www.numuki.com/game/card/mario-kart-ds-5026.webp",
      link: "/ju3gos/mario-kart-ds",
    },
    {
      id: 25,
      title: "Ninja Parkour Multiplayer",
      description: "¡Completa el parkour con tus amigos en este juego pixel!",
      image: "https://i.ytimg.com/vi/DZXnjKAUpss/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGDUgZShkMA8=&rs=AOn4CLBUu9TgJyyzCtSFv9cBJ48c9KWJ2g",
      link: "/ju3gos/ninja-parkour-multiplayer",
    },
    {
      id: 26,
      title: "Brain Test: Tricky Puzzles",
      description: "Desafía a tu cerebro con diversos puzzles de IQ.",
      image: "https://app.backbone.com/_next/image/?url=https%3A%2F%2Ffiles.backbon3.com%2Fcdn-cgi%2Fimage%2Fwidth%3D648%2Cheight%3D364%2Cfit%3Dscale-down%2Fcontent%2F2024%2FbrainTest-tile.jpg&w=640&q=75&dpl=dpl_DirtPti2cuZzaWmVHJT2aPqfuMAD",
      link: "/ju3gos/brain-test",
    },
    {
      id: 27,
      title: "Drive Mad",
      description: "¡Ajusta tu velocidad para llegar a la línea de meta!",
      image: "https://play-lh.googleusercontent.com/7weoz3zruq7IqRMwFX0CitO7MataDLpbC9lUuFyw_xzJOLeIHCZTgSsIqT4oLOSoRQ=w526-h296-rw",
      link: "/ju3gos/drive-mad"
    },
    {
      id: 28,
      title: "Polytrack",
      description: "Compite por el mejor tiempo en circuitos basados en Trackmania.",
      image: "https://lh3.googleusercontent.com/umNWwv7EZj_ygBcjTsTPux6pNLvGXwLs1E0Xja57jNMQJpPVhrnL5xNhjogqXndpPe_qZX5GEyRa-fePUvtMMEGR=s1280-w1280-h800",
      link: "/ju3gos/polytrack",
    },
    {
      id: 29,
      title: "2 Player Games",
      description: "¡Juega a lo que quieras con tus amigos en la misma pantalla!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkoFIHMeRrlUuyipblhjyV9aVC7oyv6GSxQ&s",
      link: "/ju3gos/2pl-g4mes",
    },
    {
      id: 30,
      title: "Steal a Brainrot",
      description: "Una versión fanmade del popular juego de Roblox.",
      image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/06/secret-brainrots-steal-a-brainrot.jpg?w=1600&h=1200&fit=crop",
      link: "/ju3gos/stealabrainrot",
    },
    {
      id: 31,
      title: "Plants vs Zombies",
      description: "Planta flores y defiéndete de los zombies en este clásico juego de estrategia.",
      image: "https://wallpapers.com/images/hd/plants-vs-zombies-background-aie3jp2968n49pkm.jpg",
      link: "/ju3gos/pvz",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div className="mb-4 p-3 rounded-full bg-green-50">
          <GameController className="h-12 w-12 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold mb-6">Juegos ZIM</h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">Juega a lo que quieras de forma rápida y sencilla.</p>
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
                  Jugar desde ZIMGo
                </Link>
              ) : (
                <button className="text-green-500 font-medium hover:text-green-600 transition-colors">
                  Jugar desde ZIMGo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
