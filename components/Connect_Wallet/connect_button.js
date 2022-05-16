import { useState } from 'react';

const ConnectButton = ({ inputValue }) => {
  const [signer, setSigner] = useState(undefined);

  const usernameRegex = /^[a-zA-Z\s]+$/;
  const nameIsValid = inputValue.match(usernameRegex);

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    }
  }

  const connect = () => {
    if (nameIsValid) {
      connectWallet();
    } else {
      alert('enter a valid username');
    }
  };

  return (
    <button
      className="border-2 border-emerald-400 rounded-lg py-2 px-4 font-medium"
      onClick={() => connect()}
    >
      Connect
    </button>
  );
};

export default ConnectButton;
