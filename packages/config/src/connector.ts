import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { Metamask, WalletConnect } from "@yyz-toolkit/uikit";
import { chainId, chainRpc } from "./chain";
import { Connector } from "./types";

export {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
export {
  WalletConnectConnector,
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
} from "@web3-react/walletconnect-connector";

// 轮询间隔
export const POLLING_INTERVAL = 12000;
export const connectorLocalStorageKey = "connectorIdv2";
export const walletLocalStorageKey = "wallet";

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
}

export const connectors: Connector[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    priority: 2,
  },
];

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
