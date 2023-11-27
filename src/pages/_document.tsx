import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#000" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Mirror" />
        <meta name="description" content="Light version of social networks" />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
