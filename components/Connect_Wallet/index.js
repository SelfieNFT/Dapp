const ConnectWallet = ({ children }) => {
  return (
    <div className="h-full flex justify-center items-center ">
      <div className="h-1/4 w-full flex flex-col justify-between items-center">
        <div className="">
          <span className="text-2xl font-semibold">NFT Gram</span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ConnectWallet;
