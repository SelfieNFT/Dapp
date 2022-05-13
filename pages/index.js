import { useEffect, useState } from 'react';
import Head from 'next/head';

import { Landing } from '../components/landing';
import ConnectWallet from '../components/connect_wallet';
import ConnectButton from '../components/connect_wallet/connect_button';
import InstallMetamask from '../components/connect_wallet/install_metamask';
import Loading from '../components/loading';

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
    return <Loading />;
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
            <ConnectWallet>
              <ConnectButton setIsConnected={setIsConnected} />
            </ConnectWallet>
          )
        ) : (
          <ConnectWallet>
            <InstallMetamask />
          </ConnectWallet>
        )}
      </main>
    </>
  );
};

export default Home;
