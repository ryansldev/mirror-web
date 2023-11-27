import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-[100dvh] flex-col items-center justify-center ${inter.className}`}
    >
      <Head>
        <title>Mirror</title>
      </Head>
      <Image src="/assets/logo.png" alt="Mirror Logo" height={512} width={512} />
    </main>
  )
}
