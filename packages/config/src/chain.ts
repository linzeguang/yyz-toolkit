import { Chains, Chain } from "types";

export enum CHAIN_IDS {
  GC_TEST = 735,
}

export const chains: Chains = {
  [CHAIN_IDS.GC_TEST]: {
    chainBrowser:
      "http://ec2-13-251-38-31.ap-southeast-1.compute.amazonaws.com:4000",
    chainId: CHAIN_IDS.GC_TEST,
    chainName: "Gamechain test",
    simpleName: "GC_TEST",
    chainRpc:
      "http://ec2-13-251-38-31.ap-southeast-1.compute.amazonaws.com:7345",
    nativeCurrency: {
      name: "GAM",
      symbol: "GAM",
      decimals: 18,
    },
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
