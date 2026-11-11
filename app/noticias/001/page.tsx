import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose">
        <h2>
          Noticias
        </h2>
        <p><strong>¡Ahora se pueden ver noticias desde ZIMGo!</strong> 01/10/25</p>
        <p>
          Hemos creado un nuevo apartado para ver diferentes noticias diarias y actualizaciones que antes solo estaban
          disponibles desde el canal de WhatsApp de ZIMGo. También hemos importado diferentes noticias anteriores,
          que antes solo salían en la página de inicio de ZIMGo.
        </p>
      </div>
    </div>
  )
}
