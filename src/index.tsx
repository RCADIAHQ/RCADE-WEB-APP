import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { root as rootChain } from 'rootnameservice';
import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const queryClient = new QueryClient();



const config = createConfig(
  getDefaultConfig({

    chains: [rootChain],
    transports: {
      [rootChain.id]: http(
        rootChain.rpcUrls.default.http[0]
      ),
    },

    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

    appName: "Your App Name",

    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiProvider config={config} >
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider 
          theme="auto" 
          options={{
            enforceSupportedChains: true,
          }}
          customTheme={{
            "--ck-connectbutton-background": "#ff00d9",
            "--ck-connectbutton-color": "#150112",
            
          }}
        >
          <App />
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
