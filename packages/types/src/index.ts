export interface Chain {
  chainId: number;
  chainRpc: string;
  chainName: string;
  simpleName?: string;
  chainBrowser?: string;
  nativeCurrency?: {
    name?: string;
    symbol?: string;
    decimals?: number;
  };
}

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
}

export interface Connector {
  title: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  connectorId: ConnectorNames;
  priority: number;
}
