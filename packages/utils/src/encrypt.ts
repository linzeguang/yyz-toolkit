/**
 * @name encrypt 脱敏处理
 * @param value 加密字符串
 * @param start 头部留存字符，默认4位📖
 * @param end 尾部留存字符数，默认4位
 * @param fill 加密填充字符，默认"."
 * @param fillLength 加密填充字符长度，默认3
 * @returns string
 */
export function encrypt(
  value: string,
  start: number = 4,
  end: number = 4,
  fill: string = ".",
  fillLength: number = 3
) {
  if (value === "--") return value;
  if (value) {
    const startStr = value.substring(0, start);
    const endStr = value.substring(value.length - end, value.length);
    const fillStr = new Array(fillLength).fill(fill).join("");
    return `${startStr}${fillStr}${endStr}`;
  }
  return "--";
}
