"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, Search } from "lucide-react"

interface Sound {
  id: string
  name: string
  file: string
  color: string
}

const BUTTON_COLORS = [
  "from-red-500 to-red-600",
  "from-green-500 to-green-600",
  "from-purple-500 to-purple-600",
  "from-pink-400 to-pink-500",
  "from-yellow-500 to-yellow-600",
  "from-blue-500 to-blue-600",
  "from-cyan-400 to-cyan-500",
  "from-gray-700 to-gray-800",
  "from-lime-500 to-lime-600",
  "from-orange-500 to-orange-600",
  "from-teal-500 to-teal-600",
  "from-indigo-500 to-indigo-600",
]

const SOUND_LIST = [
  { name: "Apple Pay", url: "https://www.myinstants.com/media/sounds/applepay.mp3" },
  { name: "67", url: "https://www.myinstants.com/media/sounds/67_SQlv2Xv.mp3" },
  { name: "CALVOOOOOO", url: "https://www.myinstants.com/media/sounds/calvoooooooooooooooooooooooooooo.mp3" },
  { name: "Tu madre tiene una", url: "https://www.myinstants.com/media/sounds/tu-madre-tiene-una_4GG4162.mp3" },
  { name: "Buenas tardes grupo", url: "https://www.myinstants.com/media/sounds/buenas-tardes-grupo.mp3" },
  { name: "Alarma de Auron play", url: "https://www.myinstants.com/media/sounds/alarma-de-auron-play.mp3" },
  { name: "VINE BOOM SOUND", url: "https://www.myinstants.com/media/sounds/vine-boom.mp3" },
  { name: "TODAS ME GUSTA RECORDAR", url: "https://www.myinstants.com/media/sounds/todas-mis-pajas-me-gusta-recordar.mp3" },
  { name: "POU ESTOURADO", url: "https://www.myinstants.com/media/sounds/pou-estourado_zIWCpMy.mp3" },
  { name: "contesta puñetas", url: "https://www.myinstants.com/media/sounds/contesta-punetas.mp3" },
  { name: "ANTONIO LOBATO!!!", url: "https://www.myinstants.com/media/sounds/antonio-lobato_8zPnpk3.mp3" },
  { name: "Doraemon puerta mágica", url: "https://www.myinstants.com/media/sounds/doraemon-puerta-magica.mp3" },
  { name: "Chavales que es viernes", url: "https://www.myinstants.com/media/sounds/chavales-que-es-viernes.mp3" },
  { name: "5 noches con mi tio", url: "https://www.myinstants.com/media/sounds/5-noches-con-mi-tio.mp3" },
  { name: "SEÑORA SU HIJO ESTÁ", url: "https://www.myinstants.com/media/sounds/senora-su-hijo-esta-biendo_IyhrFhn.mp3" },
  { name: "por favor necesito", url: "https://www.myinstants.com/media/sounds/por-favor-necesito-pito-me-muero.mp3" },
  { name: "a calamardo le gusta mi", url: "https://www.myinstants.com/media/sounds/a-calamardo-le-gusta-mi-p1t0.mp3" },
  { name: "Hub Intro Sound", url: "https://www.myinstants.com/media/sounds/hub-intro-sound.mp3" },
  { name: "Among Us role reveal sound", url: "https://www.myinstants.com/media/sounds/among-us-role-reveal-sound.mp3" },
  { name: "Arriba España 2.0", url: "https://www.myinstants.com/media/sounds/tmpt387w2yy.mp3" },
  { name: "Te huele el", url: "https://www.myinstants.com/media/sounds/te-huele-el-chocho-a-limon.mp3" },
  { name: "Mercadona", url: "https://www.myinstants.com/media/sounds/mercadona.mp3" },
  { name: "levántenseeeee", url: "https://www.myinstants.com/media/sounds/levantenseeeee.mp3" },
  { name: "Como dijo Vladimir", url: "https://www.myinstants.com/media/sounds/como-dijo-vladimir.mp3" },
  { name: "GET OUT", url: "https://www.myinstants.com/media/sounds/tuco-get-out.mp3" },
  { name: "Dame un grr troll", url: "https://www.myinstants.com/media/sounds/dame-un-grr-troll.mp3" },
  { name: "AAAAAAAAAAAAAAAAAAA", url: "https://www.myinstants.com/media/sounds/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-e-lutador.mp3" },
  { name: "VA A JUGAR O QUE", url: "https://www.myinstants.com/media/sounds/va-jugar-o-que.mp3" },
  { name: "Himno de España", url: "https://www.myinstants.com/media/sounds/himno-de-espana.mp3" },
  { name: "Xocas tu put* madre", url: "https://www.myinstants.com/media/sounds/tu-put-madre-xocas.mp3" },
  { name: "Gemi2222", url: "https://www.myinstants.com/media/sounds/gemi2222.mp3" },
  // Agrega más sonidos aquí con el formato:
  // { name: "Nombre del Sonido", url: "/mysounds/archivo.mp3" },
]

export default function MySoundsPage() {
  const [sounds, setSounds] = useState<Sound[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSound, setActiveSound] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const loadedSounds: Sound[] = SOUND_LIST.map((sound, index) => ({
      id: `sound-${index}`,
      name: sound.name,
      file: sound.url,
      color: BUTTON_COLORS[index % BUTTON_COLORS.length],
    }))
    setSounds(loadedSounds)
  }, [])

  const playSound = (soundFile: string, soundId: string) => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    const audio = new Audio(soundFile)
    audioRef.current = audio
    setActiveSound(soundId)

    audio.play()
    audio.onended = () => setActiveSound(null)
  }

  const filteredSounds = sounds.filter((sound) => sound.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Volume2 className="h-8 w-8 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-900">MySounds</h1>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar sonidos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <p className="text-gray-600">
            MySounds <span className="text-gray-400">&gt;</span>{" "}
            <span className="text-gray-900">Todos los sonidos</span>
          </p>
        </div>

        {filteredSounds.length === 0 ? (
          <div className="text-center py-20">
            <Volume2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg mb-2">Cargando sonidos...</p>
            <p className="text-gray-400">
              Es extraño que consigas leer este mensaje. 
              ¿Lo habrás hecho desde el F12 o te ha dado tiempo a leerlo? 
              A ver, esto sale porque los sonidos no cargan. También puede ser que no haya ningún sonido, 
              pero como ahora mismo mientras escribo esto si que hay, pues me extraña. Bueno, ya que has llegado hasta aquí,
              te doy un descuentillo para la tienda de ZIMGo: s0undsf4iluret3xt</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredSounds.map((sound) => (
              <div key={sound.id} className="flex flex-col items-center gap-3">
                {/* Sound Button */}
                <button
                  onClick={() => playSound(sound.file, sound.id)}
                  className={`
                    relative w-28 h-28 rounded-full
                    bg-gradient-to-b ${sound.color}
                    shadow-lg hover:shadow-xl
                    transform transition-all duration-150
                    ${activeSound === sound.id ? "scale-95" : "hover:scale-105"}
                    active:scale-95
                    before:content-[''] before:absolute before:inset-2
                    before:rounded-full before:bg-gradient-to-b before:from-white/30 before:to-transparent
                    after:content-[''] after:absolute after:inset-0
                    after:rounded-full after:shadow-inner
                  `}
                  aria-label={`Reproducir ${sound.name}`}
                >
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div
                      className={`
                      w-16 h-16 rounded-full bg-gradient-to-b from-black/20 to-black/40
                      flex items-center justify-center
                      shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]
                    `}
                    >
                      {activeSound === sound.id && (
                        <div className="absolute inset-0 rounded-full animate-pulse bg-white/20" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Sound Name */}
                <p className="text-gray-900 text-sm font-medium text-center max-w-[120px] truncate">{sound.name}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
