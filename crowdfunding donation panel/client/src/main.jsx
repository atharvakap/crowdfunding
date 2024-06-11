import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import {
	ChainId,
	ThirdwebProvider,
	useContract,
	metamaskWallet,
} from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<ThirdwebProvider
		supportedWallets={[
			metamaskWallet({
				recommended: true,
			})
		]}
		activeChain={Sepolia}
		// clientId="0xAf1EcB1b76fde99cB871F020F61608ACD44183B4"
		clientId="8db575ff3ffc2fe25fa4ccf1d6b8f906"
	>
		<Router>
			<StateContextProvider>
				<App />
			</StateContextProvider>
		</Router>
	</ThirdwebProvider>
);
