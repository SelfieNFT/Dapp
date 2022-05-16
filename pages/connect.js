import Head from 'next/head';
import ConnectButton from '../components/connect_wallet/connect_button';

const ConnectWallet = () => {
  return (
    <>
      <Head>
        <title>NFT Gram | Home</title>
        <meta name="description" content="A decentralize social media app" />
      </Head>
      <main className="h-screen">
        <div className="h-full flex justify-center items-center ">
          <div className="h-1/4 w-full flex flex-col justify-between items-center">
            <div className="">
              <span className="text-2xl font-semibold">NFT Gram</span>
            </div>
            {/* <ConnectButton setIsConnected={setIsConnected} /> */}
            <ConnectButton />
          </div>
        </div>
      </main>
    </>
  );
};

export default ConnectWallet;
