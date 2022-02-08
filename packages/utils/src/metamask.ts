import { chainId, chain } from "@yyz-toolkit/config";
/**
 * @name setupNetwork 设置网络节点
 */
export const setupNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    try {
      provider.request &&
        (await provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: chain?.chainName ?? chainId,
              nativeCurrency: chain?.nativeCurrency,
              rpcUrls: [chain?.chainRpc],
              blockExplorerUrls: [chain?.chainBrowser],
            },
          ],
        }));
      return true;
    } catch (error) {
      console.error("Failed to setup the network in Metamask:", error);
      return false;
    }
  } else {
    console.error(
      `Can't setup the ${chainId} network on metamask because window.ethereum is undefined`
    );
    return false;
  }
};

/**
 * @name switchNetwork 切换网络
 */
export const switchNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    try {
      provider.request &&
        (await provider.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
            },
          ],
        }));
      return true;
    } catch (error) {
      console.error(`Failed to switch the network in Metamask:`, error);
      return false;
    }
  } else {
    console.error(
      `Can't switch the ${chainId} network on metamask because window.ethereum is undefined`
    );
    return false;
  }
};
