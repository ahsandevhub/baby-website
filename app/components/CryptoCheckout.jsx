"use client";

import { ethers } from "ethers";

export default function CryptoCheckout({ cart, walletAddress, onClose }) {
  const totalEth = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = async () => {
    try {
      // Updated Ethers v6 syntax
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // Send transaction directly to your wallet
      const tx = await signer.sendTransaction({
        to: walletAddress,
        value: ethers.parseEther(totalEth.toString()),
      });

      alert(`Payment sent! TX Hash: ${tx.hash}`);
      onClose(); // Close modal after successful payment
      // Here you would typically send order details to your backend
    } catch (error) {
      console.error("Payment failed:", error);
      alert(`Payment failed: ${error.message}`);
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-amber-50 p-6 rounded-xl border border-amber-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Total Amount</h3>
        <div className="flex items-center">
          <span className="text-2xl font-bold text-amber-600 mr-1">
            {totalEth.toFixed(4)}
          </span>
          <span className="text-gray-500">ETH</span>
        </div>
      </div>

      <button
        onClick={handlePayment}
        disabled={!walletAddress}
        className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center mb-4
          ${
            walletAddress
              ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-amber-200/50"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
      >
        {walletAddress ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415z"
                clipRule="evenodd"
              />
            </svg>
            Confirm Payment
          </>
        ) : (
          "Connect Wallet First"
        )}
      </button>

      <div className="text-xs text-gray-500 text-center">
        <p>Powered by Baby the Deer</p>
      </div>
    </div>
  );
}
