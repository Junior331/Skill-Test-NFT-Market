import { QueryClient } from "@tanstack/react-query";
import { createConfig } from "wagmi";
import { avalanche, avalancheFuji, mainnet } from "wagmi/chains";
import { http } from "viem";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { metaMaskWallet, walletConnectWallet } from "@rainbow-me/rainbowkit/wallets";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet, walletConnectWallet],
    },
  ],
  {
    appName: "Skill Test Nft Marketplace",
    projectId: 'YOUR_PROJECT_ID',
  }
);

export const config = createConfig({
  connectors,
  chains: [mainnet, avalanche, avalancheFuji],
  transports: {
    [mainnet.id]: http(),
    [avalanche.id]: http(),
    [avalancheFuji.id]: http(),
  },
  ssr: true,
});

export const client = new QueryClient();
