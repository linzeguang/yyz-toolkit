import {
  Connector,
  walletLocalStorageKey,
  connectorLocalStorageKey,
} from "@yyz-toolkit/config";

/**
 * @name saveWalletConfig 存储已连接钱包信息
 * @param walletConfig 钱包配置信息
 */
export const saveWalletConfig = (connector: Connector) => {
  window.localStorage.setItem(walletLocalStorageKey, connector.title);
  window.localStorage.setItem(connectorLocalStorageKey, connector.connectorId);
};

/**
 * @name removeWalletConfig 移除钱包标识
 */
export const removeWalletConfig = () => {
  window.localStorage.removeItem(connectorLocalStorageKey);
};
