class BetterDate {}

/**
 * @description 检查日期
 * @param {date | number | string} date - new Date() | new Date().getTime() | '2020-10-10'
 * @returns {boolean}
 */
BetterDate.prototype.checkDate = function (date) {
  if (typeof date === "string") {
    const mts = date.match(/(\/Date(\d+)\/)/);
    if (mts && mts.length >= 3) {
      date = parseInt(mts[2]);
    }
  }
  date = new Date(date);
  return !(!date || date.toUTCString() === "Invalid Date");
};

/**
 * @description 获取日期的周数
 * @param {date | number | string} date - new Date() | new Date().getTime() | '2020-10-10'
 * @returns {number}
 */
BetterDate.prototype.getWeekNumber = function (date) {
  if (!this.checkDate(date)) throw new Error("非法日期格式");
  const _date = new Date(date);
  _date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  _date.setDate(_date.getDate() + 3 - ((_date.getDay() + 6) % 7));
  // January 4 is always in week 1.
  const week1 = new Date(_date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
  // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
  return (
    1 +
    Math.round(
      ((_date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
};

/**
 * @description 对日期进行格式化，
 * @param {date | number | string} date - new Date() | new Date().getTime() | '2020-10-10'
 * @param {string} format - default: "yyyy-MM-dd"  进行格式化的模式字符串 yyyy-MM-dd hh:mm:ss:SS q W
 * @example
 * format(new Date())
 * // '2021-10-10'
 *
 * format(new Date(), 'yyyy.MM.dd hh:mm:ss')
 * // 2021.10.10 12:12:01
 *  支持的模式字母有：
 *  y:年,
 *  M:年中的月份(1-12),
 *  W:年中的第几周,
 *  d:月份中的天(1-31),
 *  h:小时(0-23),
 *  m:分(0-59),
 *  s:秒(0-59),
 *  S:毫秒(0-999),
 *  q:季度(1-4)
 * @returns {string}
 */
BetterDate.prototype.format = function (date, format = "yyyy-MM-dd") {
  if (!this.checkDate(date)) throw new Error("非法日期格式");
  date = new Date(date);
  const map = {
    M: date.getMonth() + 1, // 月份
    W: this.getWeekNumber(date), // 周
    d: date.getDate(), // 日
    h: date.getHours(), // 小时
    m: date.getMinutes(), // 分
    s: date.getSeconds(), // 秒
    q: Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };

  return format.replace(/([yMWdhmsqS])+/g, (all, t) => {
    let v = map[t];
    if (v !== undefined) {
      if (all.length > 1) {
        v = "0" + v;
        v = v.substr(v.length - 2);
      }
      return v;
    } else if (t === "y") {
      return (date.getFullYear() + "").substr(4 - all.length);
    }
    return all;
  });
};

/**
 * @description 映射本（上、下）周，21天的中文表达
 * @param {date | number | string} date - new Date() | new Date().getTime() | '2020-10-10'
 * @param {date | number | string} [curDate] - 校准时间，默认使用客户端的日期 new Date() | new Date().getTime() | '2020-10-10'
 * @param {string} [prefixFormat] - 仅支持 yyyy-MM-dd
 * @param {string} [suffixFormat] - 仅支持 hh:mm:ss:SS q
 * @returns {string}
 * @example
 * dateToZh(new Date())
 * // “今天”
 */
BetterDate.prototype.dateToZh = function (
  date,
  curDate = new Date().getTime(),
  prefixFormat,
  suffixFormat
) {
  const curTimestamp = new Date(curDate).getTime();
  const _date = new Date(curTimestamp).getDate();
  const day = new Date(curTimestamp).getDay();
  const year = new Date(curTimestamp).getFullYear();
  const mondayTimestamp = new Date(curTimestamp).setDate(
    _date - (day ? day - 1 : 6)
  );
  const weekZh = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  const prevPrefix = "上";
  const nextPrefix = "下";
  const mapping = {
    "+0": "今天",
    "-1": "昨天",
    "-2": "前天",
    "+1": "明天",
    "+2": "后天",
  };
  const mappingFormat = {};
  const suffix = suffixFormat ? this.format(date, suffixFormat) : "";
  for (const [key, d] of weekZh.entries()) {
    const mondayDate = new Date(mondayTimestamp).getDate();
    mappingFormat[
      this.format(
        new Date(mondayTimestamp).setDate(mondayDate - 7 + key),
        prefixFormat
      )
    ] = `${prevPrefix}${d}`;
    mappingFormat[
      this.format(
        new Date(mondayTimestamp).setDate(mondayDate + key),
        prefixFormat
      )
    ] = `${d}`;
    mappingFormat[
      this.format(
        new Date(mondayTimestamp).setDate(mondayDate + 7 + key),
        prefixFormat
      )
    ] = `${nextPrefix}${d}`;
  }
  // 特殊时间覆盖原有时间
  for (const [key, d] of Object.entries(mapping)) {
    mappingFormat[
      this.format(
        new Date(curTimestamp).setDate(_date + parseInt(key)),
        prefixFormat
      )
    ] = d;
  }
  // =1 取映射集合中的中文表达
  // =2 直接使用时间格式同年去年份
  return (
    (mappingFormat[this.format(date, prefixFormat)] ||
      // 正则用于去除当前年
      this.format(date, prefixFormat).replace(
        new RegExp(`${year}.`, "g"),
        ""
      )) + suffix
  );
};

const betterDate = new BetterDate();
export default betterDate;
