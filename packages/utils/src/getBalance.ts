import { formatEther } from "@ethersproject/units";
import { addThousandSeparator } from "./format";
import { getWeb3 } from "./getWeb3";

/**
 * @name getBalance 获取地址对应的余额
 * @param address 地址
 * @returns 千分位处理后的余额或者null
 */
export async function getBalance(address: string) {
  const web3 = getWeb3();
  const provider = window.ethereum;

  try {
    let balance: string = "";
    if (provider) {
      console.log("metamask balance");
      balance = await provider.request({
        method: "eth_getBalance",
        params: [address, "latest"],
      });
    } else {
      console.log("web3 balance");
      balance = await web3.eth.getBalance(address);
    }
    return balance ? addThousandSeparator(formatEther(balance), 6) : null;
  } catch (error) {
    return null;
  }
}
