import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";
import { POLLING_INTERVAL } from "@yyz-toolkit/config";

export const getLibrary = (
  provider: ExternalProvider | JsonRpcFetchFunc
): Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};
