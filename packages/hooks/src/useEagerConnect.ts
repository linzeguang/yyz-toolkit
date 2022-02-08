import { useEffect, useState } from "react";
import {
  chainId,
  connectorLocalStorageKey,
  ConnectorNames,
  connectors,
} from "@yyz-toolkit/config";
import { useConnect } from "./useConnect";

// 自动连接钱包
export function useEagerConnect() {
  const [netWorkId, setNetWorkId] = useState(chainId.toString());
  const { connect, disconnect } = useConnect();

  useEffect(() => {
    const connectorId = window.localStorage.getItem(
      connectorLocalStorageKey
    ) as ConnectorNames;
    const walletConfig = connectors.find(
      (connector) => connector.connectorId === connectorId
    );

    if (connectorId && walletConfig && chainId.toString() === netWorkId) {
      console.log("connect");
      connect(walletConfig);
    } else {
      console.log("disconnect");
      disconnect();
    }
  }, [connect, disconnect, netWorkId]);

  useEffect(() => {
    const provider = window.ethereum;
    provider?.on("networkChanged", (chainId: string) => {
      console.log("networkChanged: ", chainId);
      setNetWorkId(chainId);
    });
  }, []);
}
