import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ConnectorNames } from "@yyz-toolkit/types";
import { getChain } from "./chain";

const { chainId, chainRpc } = getChain();

export const injected = new InjectedConnector({
  supportedChainIds: [chainId],
});

export const walletConnect = new WalletConnectConnector({
  rpc: { [chainId]: chainRpc },
  qrcode: true,
});

export const ConnectorsByName: { [name in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletConnect,
};
