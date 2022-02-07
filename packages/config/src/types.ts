import { ConnectorNames } from "./connector";
import { CHAIN_IDS } from "./chain";

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

export type Chains = Record<CHAIN_IDS, Chain>;

export type Address = Record<CHAIN_IDS, string>;

export interface Contracts {
  [key: string]: Address;
}

export interface Connector {
  title: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  connectorId: ConnectorNames;
  priority: number;
}
