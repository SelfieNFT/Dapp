import { useState } from 'react';
import Head from 'next/head';

import ConnectButton from '../components/connect_wallet/connect_button';

const ConnectWallet = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Head>
        <title>NFT Gram | Connect</title>
        <meta name="description" content="A decentralize social media app" />
      </Head>
      <main className="h-screen">
        <div className="h-full flex justify-center items-center ">
          <div className="h-1/4 w-full flex flex-col justify-between items-center">
            <div className="">
              <span className="text-2xl font-semibold">NFT Gram</span>
            </div>
            <div>
              <form className="flex flex-col">
                <label className="mb-4">
                  What is your <spa className="font-semibold">full name</spa>?
                </label>
                <input
                  onChange={handleChange}
                  type="input"
                  value={inputValue}
                  placeholder="Type your name hear"
                  className="outline-none border-b-2 mb-4 border-emerald-400"
                />
                <ConnectButton />
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ConnectWallet;
