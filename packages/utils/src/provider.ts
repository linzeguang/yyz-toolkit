import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { chainRpc } from "@yyz-toolkit/config";

export * from "@web3-react/core";
export * from "@ethersproject/providers";
export const simpleRpcProvider = new StaticJsonRpcProvider(chainRpc);
