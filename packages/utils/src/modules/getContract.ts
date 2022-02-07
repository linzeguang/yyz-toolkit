import { Signer } from "@ethersproject/abstract-signer";
import { Contract } from "@ethersproject/contracts";
import { Provider } from "@ethersproject/providers";
import { simpleRpcProvider } from "./provider";

export const getContract = (
  address: string,
  abi: any,
  signer?: Signer | Provider
) => {
  return new Contract(address, abi, signer ?? simpleRpcProvider);
};
