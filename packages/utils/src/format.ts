import { BigNumber } from "bignumber.js";

/**
 * @name toPrecision 精度处理
 * @param val 格式化的字符串或数字
 * @param decimalPlaces 精度: 默认0
 * @param roundingMode 1: 不四舍五入，0,2-8: 四舍五入
 * @returns
 */
export function toPrecision(
  val: string | number,
  decimalPlaces: number = 0,
  roundingMode: BigNumber.RoundingMode = 1
) {
  return new BigNumber(val).toFixed(decimalPlaces, roundingMode);
}

/**
 * @name addThousandSeparator 千分位格式化
 * @param val 格式化的字符串或数字
 * @param decimalPlaces 精度: 默认0
 * @param roundingMode 1: 不四舍五入，0,2-8: 四舍五入
 * @returns
 */
export function addThousandSeparator(
  val: BigNumber.Value,
  decimalPlaces: number = 0,
  roundingMode: BigNumber.RoundingMode = 1
) {
  return new BigNumber(val).toFormat(decimalPlaces, roundingMode);
}
