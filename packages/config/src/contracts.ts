import { Contracts } from "./types";
import { CHAIN_IDS } from "./chain";

const { GC_TEST } = CHAIN_IDS;

export const contracts: Contracts = {
  node: {
    [GC_TEST]: "0x1111111111111111111111111111111111111111",
  },
  market: {
    [GC_TEST]: "0x949F0D32ff605c4d4F6853116308C90e6d834d11",
  },
};
