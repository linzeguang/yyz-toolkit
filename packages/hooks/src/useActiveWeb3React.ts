import { useEffect, useState, useRef } from "react";
import { Web3ReactContextInterface, Web3Provider } from "@yyz-toolkit/utils";
import { simpleRpcProvider, useWeb3React } from "@yyz-toolkit/utils";
import * as config from "@yyz-toolkit/config";

export default function useActiveWeb3React(): Web3ReactContextInterface<
  Web3Provider
> {
  const { library, chainId, ...web3React } = useWeb3React();
  const refEth = useRef(library);
  const [provider, setProvider] = useState(library || simpleRpcProvider);

  useEffect(() => {
    if (library !== refEth.current) {
      setProvider(library || simpleRpcProvider);
      refEth.current = library;
    }
  }, [library]);

  return {
    chainId: chainId || config.chainId,
    library: provider,
    ...web3React,
  };
}
