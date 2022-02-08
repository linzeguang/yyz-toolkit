import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { chainRpc } from "@yyz-toolkit/config";

export const simpleRpcProvider = new StaticJsonRpcProvider(chainRpc);
