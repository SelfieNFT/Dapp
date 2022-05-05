import Head from 'next/head';
import { Landing } from '../components/Landing';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFT Gram</title>
        <meta name="description" content="A decentralize social media app" />
      </Head>
      <Landing />
    </div>
  );
}
