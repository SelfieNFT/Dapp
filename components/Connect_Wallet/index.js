import { useEffect, useState } from 'react';

const ConnectWallet = ({ setIsConnected }) => {
  const [signer, setSigner] = useState(undefined);

  async function connect() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }
  return (
    <div className="h-full flex justify-center items-center ">
      <div className="h-1/4 flex flex-col justify-between items-center">
        <div className="">
          <span className="text-2xl font-semibold">NFT Gram</span>
        </div>
        <button
          className="border-2 border-emerald-400 rounded-lg py-2 px-4 font-medium"
          onClick={() => connect()}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet;
