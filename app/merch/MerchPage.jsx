"use client";

import CryptoCheckout from "@/app/components/CryptoCheckout";
import MerchItem from "@/app/components/MerchItem";
import useCart from "@/app/hooks/useCart";
import { merchItems } from "@/app/lib/products";
import { useState } from "react";

export default function MerchPage() {
  const { cart, addToCart, removeFromCart } = useCart();
  const [walletAddress, setWalletAddress] = useState(null);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const connectWallet = async () => {
    // Check if MetaMask is installed (desktop)
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Desktop wallet connection failed:", error);
        alert(`Connection failed: ${error.message}`);
      }
    }
    // Mobile-specific connection
    else if (isMobile()) {
      try {
        // Open MetaMask mobile deep link
        window.location.href = `https://metamask.app.link/dapp/${window.location.host}${window.location.pathname}`;
      } catch (error) {
        console.error("Mobile wallet connection failed:", error);
        alert("Please install MetaMask mobile app to connect");
      }
    } else {
      alert("Please install MetaMask or another Ethereum wallet!");
    }
  };

  console.log(walletAddress);

  const openCheckout = () => setShowCheckoutModal(true);
  const closeCheckout = () => setShowCheckoutModal(false);

  return (
    <div
      className="md:pt-20 pt-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: "radial-gradient(circle at center, #c4103d, #be123c)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="md:text-4xl text-3xl font-bold text-white mb-2">
            Baby the Deer Merch
          </h1>
          <p className="md:text-lg text-white">
            Exclusive crypto-themed merchandise
          </p>

          {walletAddress ? (
            <div className="mt-4 flex items-center justify-center">
              <div className="bg-amber-100 text-amber-800 font-medium py-2 px-4 rounded-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-amber-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415z"
                    clipRule="evenodd"
                  />
                </svg>
                Connected:{" "}
                {`${walletAddress.substring(0, 6)}...${walletAddress.substring(
                  walletAddress.length - 4
                )}`}
              </div>
              {/* <button
                onClick={() => setWalletAddress(null)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-full transition-all duration-300"
              >
                Disconnect
              </button> */}
            </div>
          ) : (
            <button
              onClick={connectWallet}
              className="mt-4 bg-yellow-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 flex items-center mx-auto"
            >
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
              Connect Wallet
            </button>
          )}
        </div>

        {/* Merch Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map((product) => (
            <MerchItem
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>

        {/* Cart Summary (Sticky at bottom) */}
        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4 z-10">
            <button
              onClick={openCheckout}
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Checkout ({cart.length})
            </button>
          </div>
        )}

        {/* Checkout Modal */}
        {showCheckoutModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-amber-800 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Your Order
                  </h2>
                  <button
                    onClick={closeCheckout}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <ul className="divide-y divide-amber-100 mb-6">
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="py-3 flex justify-between items-center"
                    >
                      <div>
                        <span className="font-medium text-gray-800">
                          {item.name}
                        </span>
                        <span className="ml-2 text-sm text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                          {item.selectedSize}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-amber-600 mr-4">
                          {item.price} ETH
                        </span>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-amber-600 hover:text-amber-800 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <CryptoCheckout
                  cart={cart}
                  walletAddress={walletAddress}
                  onClose={closeCheckout}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
