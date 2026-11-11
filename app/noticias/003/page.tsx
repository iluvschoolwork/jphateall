import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose">
        <h2>
          Noticias
        </h2>
        <p><strong>Nuevo dominio de ZIMGo</strong> 23/09/25</p>
        <p>
          ¡Tenemos un nuevo enlace para desbloquear ZIMGo! Si el enlace principal está
          bloqueado en tu entorno laboral, puedes probar con https://d7yhctei4qkzg.cloudfront.net/.
          💚 Gracias a los que hacéis posible este proyecto.
        </p>
      </div>
    </div>
  )
}
