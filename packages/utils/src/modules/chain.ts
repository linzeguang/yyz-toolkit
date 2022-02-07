import { Chain } from "@yyz-toolkit/types";

const GAMChainTest: Chain = {
  chainBrowser: "https://43.132.183.20:4000/",
  chainId: 735,
  chainName: "Gamechain test",
  simpleName: "GC_TEST",
  chainRpc: "http://101.32.177.140:7345",
  nativeCurrency: {
    name: "GAM",
    symbol: "GAM",
    decimals: 18,
  },
};

export let chain: Chain = GAMChainTest;

export function initChain(_chain: Chain) {
  console.log("初始化链环境");
  console.log("当前链环境: ", _chain.chainId);
  chain = Object.assign(_chain, chain);
}
