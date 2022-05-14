import { useState } from 'react';

const ConnectButton = ({ setIsConnected }) => {
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
    <button
      className="border-2 border-emerald-400 rounded-lg py-2 px-4 font-medium"
      onClick={() => connect()}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectButton;
