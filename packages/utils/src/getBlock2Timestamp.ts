import { BlockTag } from "@ethersproject/providers";
import { simpleRpcProvider } from "./provider";

/**
 * @name getBlock2Timestamp 区块数转化为时间戳
 * @param block 区块参数
 * @returns 秒级时间戳
 */
export async function getBlock2Timestamp(
  block: BlockTag | string | Promise<BlockTag | string>
) {
  const { timestamp } = await simpleRpcProvider.getBlock(block);

  return timestamp;
}
