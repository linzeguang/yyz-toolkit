import { Contracts } from "types";
import { CHAIN_IDS } from "chain";

const { GC_TEST, BSC } = CHAIN_IDS;

export const contracts: Contracts = {
  node: {
    [GC_TEST]: "0x1111111111111111111111111111111111111111",
    [BSC]: "",
  },
};
