import { useEffect, useState } from 'react';

import Head from 'next/head';
import { Landing } from '../components/Landing';
import ConnectWallet from '../components/Connect_Wallet';

const Home = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(undefined);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      setHasMetamask(true);
    } else {
      setHasMetamask(false);
    }
  });

  if (hasMetamask === undefined) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Head>
        <title>NFT Gram</title>
        <meta name="description" content="A decentralize social media app" />
      </Head>
      <main className="h-screen">
        {hasMetamask ? (
          isConnected ? (
            <Landing />
          ) : (
            <ConnectWallet setIsConnected={setIsConnected} />
          )
        ) : (
          'Please install metamask'
        )}
      </main>
    </>
  );
};

export default Home;
