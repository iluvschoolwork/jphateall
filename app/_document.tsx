import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* archivo usado para verificar tu web en google search console */}
        <script async src="YOUR GOOGLE SEARCH CONSOLE LINK HERE"
     crossorigin="anonymous"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
