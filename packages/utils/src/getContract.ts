import { Signer } from "@ethersproject/abstract-signer";
import { Contract } from "@ethersproject/contracts";
import { Provider } from "@ethersproject/providers";
import { simpleRpcProvider } from "./provider";

/**
 * @name getContract 获取合约
 * @param address 合约地址
 * @param abi 合约abi
 * @param signer 可选参数
 * @returns 合约
 */
export const getContract = (
  address: string,
  abi: any,
  signer?: Signer | Provider
) => {
  return new Contract(address, abi, signer ?? simpleRpcProvider);
};
