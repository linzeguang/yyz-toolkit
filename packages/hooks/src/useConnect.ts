import {
  Connector,
  ConnectorNames,
  ConnectorsByName,
  NoEthereumProviderError,
  UserRejectedRequestErrorInjected,
  UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@yyz-toolkit/config";
import {
  removeWalletConfig,
  saveWalletConfig,
  setupNetwork,
  switchNetwork,
  UnsupportedChainIdError,
  useWeb3React,
} from "@yyz-toolkit/utils";
import { useCallback } from "react";

export function useConnect() {
  const { activate, deactivate } = useWeb3React();

  const connectWallet = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = ConnectorsByName[connectorID];
      if (connector) {
        activate(connector, async (error: Error) => {
          // ChainId 错误
          if (error instanceof UnsupportedChainIdError) {
            const hasSwitch = await switchNetwork();
            if (hasSwitch) return activate(connector);

            const hasSetup = await setupNetwork();
            if (hasSetup) return activate(connector);
          } else {
            // 移除本地存储的钱包标识
            removeWalletConfig();
            if (error instanceof NoEthereumProviderError) {
              // 供应商错误 - 不是以太或者币安店供应商
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector;
                walletConnector.walletConnectProvider = null;
              }
              // 授权错误 - 请授权访问您的帐户
            } else {
              console.log(error.name, error.message);
            }
          }
          throw error;
        });
      } else {
        removeWalletConfig();
        // Unable to find connector 无法找到连接器
        // The connector config is wrong 连接器配置错误
      }
    },
    [activate]
  );

  const connect = useCallback(
    (connector: Connector) => {
      const isIOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

      if (connector.title === "Trust Wallet" && isIOS) {
        connectWallet(ConnectorNames.WalletConnect);
      } else {
        connectWallet(connector.connectorId);
      }

      saveWalletConfig(connector);
    },
    [connectWallet]
  );

  const disconnect = useCallback(() => {
    deactivate();

    if (window.localStorage.getItem("walletconnect")) {
      ConnectorsByName.walletconnect.close();
      ConnectorsByName.walletconnect.walletConnectProvider = null;
    }

    removeWalletConfig();
  }, [deactivate]);

  return { connect, disconnect };
}
