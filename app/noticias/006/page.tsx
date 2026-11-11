import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose">
        <h2>
          Noticias
        </h2>
        <p><strong>Tenemos que hablar.</strong> 02/10/25</p>
        <p>
          Estoy seguro de que en Maristas algún profesor sabe quién soy. Simplemente que
          si algún profesor lee esto que sepáis que no me importa que bloqueeis ZIMGo, o
          que no queráis que este disponible. Es mi mayor proyecto personal, siempre
          intentaré mantenerlo en pie.
          Vamos a hacer que ZIMGo sea de pago por suscripción en Maristas. Tendrá incluido
          todo lo que tiene ahora mismo pero arreglado para que funcione perfectamente en
          dispositivos táctiles y en la red del colegio. 
        </p>
      </div>
    </div>
  )
}
