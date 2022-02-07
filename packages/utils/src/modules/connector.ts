import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { Connector, ConnectorNames } from "@yyz-toolkit/types";
import { Metamask, WalletConnect } from "@yyz-toolkit/uikit";
import { chain } from "./chain";

export const POLLING_INTERVAL = 12000;
export const connectorLocalStorageKey = "connectorIdv2";
export const walletLocalStorageKey = "wallet";

const { chainId, chainRpc } = chain;

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

export const connectors: Connector[] = [
  {
    title: "Metamask",
    icon: Metamask as any,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect as any,
    connectorId: ConnectorNames.WalletConnect,
    priority: 2,
  },
];
