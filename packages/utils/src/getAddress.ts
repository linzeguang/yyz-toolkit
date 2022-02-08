import { Address, chainId } from "@yyz-toolkit/config";

/**
 * @name getAddress 获取链对应的地址
 * @param address 地址集合
 * @returns 地址字符串
 */
export const getAddress = (address: Address) => {
  return address[chainId];
};
