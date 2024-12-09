import "../styles/globals.css";

import { WagmiProvider } from "wagmi";
import { client, config } from "../config/wagmi";
import { QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";

import { NavBar, Footer } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";


const MyApp = ({ Component, pageProps }) => (
  <div>
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider theme={darkTheme()}>
          <NFTMarketplaceProvider>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </NFTMarketplaceProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </div>
);

export default MyApp;
