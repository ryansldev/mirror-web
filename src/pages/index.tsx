import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Button from '@/components/Button'
import { Card } from '@/components/Card'

import { FaCheck } from "react-icons/fa"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Head>
        <title>Mirror</title>
      </Head>
      
      <section className="py-20 min-h-[100dvh]">
        <div className="container flex flex-col justify-center">
          <Image src="/assets/logo.png" alt="Mirror Logo" height={400} width={400} />
          <div className="flex flex-col gap-4 sm:max-w-[80%]">
            <h1 className="sm:text-4xl text-2xl">
              A rede social pra você sair do barulho do cotidiano e olhar pra si...
            </h1>
            <Button>
              Finalmente
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-stone-100">
        <div className="container">
          <h1 className="sm:text-4xl text-4xl mt-2">
            Um espaço para autoconhecimento e reflexão
          </h1>

          <div className="flex flex-wrap gap-4 mt-8 mb-8">
            <Card
              icon={<FaCheck />}
              type="secondary"
            >
              Reflexões diárias e filosoficas pra te ajudar a desacelerar
            </Card>
            <Card
              icon={<FaCheck />}
              type="secondary"
            >
              Feed leve e organizado, um lugar de respiro e segurança na internet
            </Card>
            <Card
              icon={<FaCheck />}
              type="secondary"
            >
              Mirror significa espelho em inglês, o foco é olhar para si mesmo e expor o que você tem de melhor para o mundo
            </Card>
          </div>

          <Button
            type='secondary'
          >
            Perfeito!
          </Button>
        </div>
      </section>
    </main>
  )
}
