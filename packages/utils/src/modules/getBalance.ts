import { formatEther } from "@ethersproject/units";
import { format } from "./format";
import { getWeb3 } from "./getWeb3";

// 获取余额
export async function getBalance(address: string) {
  const web3 = getWeb3();

  try {
    const balance = await web3.eth.getBalance(address);
    return format(formatEther(balance), 6);
  } catch (error) {
    return null;
  }
}
