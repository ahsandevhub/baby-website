import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";

// 1. Define your WalletConnect project ID (get from https://cloud.walletconnect.com)
const projectId = "46d5d0bbe9632b0f66a923ece8cc21ae";

// 2. Create Wagmi config
const metadata = {
  name: "Baby the Deer Merch",
  description: "Official merchandise store",
  url: "https://www.babythedeer.io",
  icons: ["https://www.babythedeer.io/logo.jpg"],
};

const chains = [mainnet];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create Web3Modal instance
createWeb3Modal({ wagmiConfig, projectId, chains });

export { WagmiConfig, wagmiConfig };
