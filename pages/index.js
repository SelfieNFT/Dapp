import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFT Gram</title>
        <meta name="description" content="A decentralize social media app" />
      </Head>

      <main >
        <h1 className='text-3xl text-green-500 font-bold underline'>NFT Gram</h1>
      </main>
    </div>
  )
}
