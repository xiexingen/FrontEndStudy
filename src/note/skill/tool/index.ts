/**
 * 金额格式化
 * @param value 要格式化的数值
 * @returns string 返回格式化后的字符串
 */
export function moneyFormat(value: number): string {
  return value.toString().replace(/(?!^)(?=(\d{3})+$)/g, ',');
}

/**
 * 密码长度是6-12位，由数字、小写字符和大写字母组成，但必须至少包括2种字符
 */
export function passwordVertify(password: string) {
  return /((?=.*\d)((?=.*[a-z])|(?=.*[A-Z])))|(?=.*[a-z])(?=.*[A-Z])^[a-zA-Z\d]{6,12}$/.test(
    password,
  );
}

/**
 * 手机号码 3-4-4 格式化
 * @param value 手机号码
 * @returns 格式化后的手机号码
 */
export function phoneFormat(value: string): string {
  return String(value)
    .slice(0, 11)
    .replace(/(?<=\d{3})\d+/, ($0) => '-' + $0)
    .replace(/(?<=[\d-]{8})\d{1,4}/, ($0) => '-' + $0);
}

/**
 * 生成一个不重复的id
 * @param length number id长度,不超过10位
 * @returns string 返回 随机字符串
 */
export function randomId(length: number): string {
  return Math.random().toString(36).substr(3, length);
}

/**
 * 生成评分值
 * @param value 的分
 * @returns 星星级别字符串
 */
export function rate(value: number): string {
  return '★★★★★☆☆☆☆☆'.slice(5 - value, 10 - value);
}

/**
 * 小数位数精确
 * @param number 数值
 * @param decimal 要精确的位数
 * @returns 精确后的值
 */
export function roundNumber(number: number, decimal: number): number {
  return Math.round(number * 10 ** decimal) / 10 ** decimal;
}

/**
 * 在指定范围能生成随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 生成的随机数
 */
export function rangeRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 返回传入的对象的类型
 * @param value 值
 * @returns 类型字符串
 */
export function type(value: any): string {
  return Object.prototype.toString
    .call(value)
    .replace(/\[object (\w+)\]/, '$1')
    .toLowerCase();
}