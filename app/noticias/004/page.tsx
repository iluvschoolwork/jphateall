import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose">
        <h2>
          Noticias
        </h2>
        <p><strong>ZIM App Versión 4.1</strong> 19/09/25</p>
        <p>
          Hay una nueva versión de nuestro Atajo de Apple Shortcuts, que contiene muchas
          funciones nuevas muy interesantes y útiles tanto para trabajo, entretenimiento
          y desbloqueo. En este atajo está la primera versión de nuestra nueva Inteligencia
          Artificial, llamada Smart ZIM, que se integra completamente en el atajo y está
          basada en GPT-4. Ahora se pueden seleccionar diferentes niveles de corrección
          al generar códigos QR.
        </p>
      </div>
    </div>
  )
}
