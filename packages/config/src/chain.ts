import { Chains, Chain } from "types";

export enum CHAIN_IDS {
  GC_TEST = 735,
  BSC_TEST = 97,
  BSC = 56,
}

export const chains: Chains = {
  [CHAIN_IDS.GC_TEST]: {
    chainBrowser: "https://43.132.183.20:4000/",
    chainId: CHAIN_IDS.GC_TEST,
    chainName: "Gamechain test",
    simpleName: "GC_TEST",
    chainRpc: "http://101.32.177.140:7345",
    nativeCurrency: {
      name: "GAM",
      symbol: "GAM",
      decimals: 18,
    },
  },
  [CHAIN_IDS.BSC_TEST]: {
    chainBrowser: "https://testnet.bscscan.com/",
    chainId: CHAIN_IDS.BSC_TEST,
    chainName: "Binance Smart Chain Testnet",
    simpleName: "bnb",
    chainRpc: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
  [CHAIN_IDS.BSC]: {
    chainBrowser: "https://bsc-dataseed1.ninicoin.io",
    chainId: CHAIN_IDS.BSC,
    chainName: "BNB Smart Chain Mainnet",
    simpleName: "bnb",
    chainRpc: "https://bscscan.com/",
  },
};

export let chainId: CHAIN_IDS = CHAIN_IDS.GC_TEST;

export let chainRpc: Chain["chainRpc"] = chains[chainId].chainRpc;

export let chain: Chain = chains[chainId];

export function initChain(id: CHAIN_IDS) {
  console.log("当前链环境: ", id);
  chainId = id;
  chainRpc = chains[id].chainRpc;
  chain = chains[id];
}
