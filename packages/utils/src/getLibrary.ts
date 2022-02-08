import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";
import { POLLING_INTERVAL } from "@yyz-toolkit/config";

/**
 * @name getLibrary Web3ReactProvider 工具类
 * @param provider
 * @returns
 */
export const getLibrary = (
  provider: ExternalProvider | JsonRpcFetchFunc
): Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};
