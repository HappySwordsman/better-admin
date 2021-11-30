export initBScroll from "@/utils/betterScroll";
export betterDate from "@/utils/date";

/**
 * @description 判断设备类型（ios、android、window、linux、MacOs）
 * @returns {string} - ios | android | window | MacOs | linux
 */
export function getSystemName() {
  let deviceMark,
    devices = ["android", "ios", "window", "linux", "MacOs", "other"];
  const iosReg = /\(i[^;]+;( U;)? CPU.+Mac OS X/;
  const macReg = /\(M[^;]+; Intel Mac OS X/;
  const winReg = /(Windows)/;
  const linuxReg = /Linux/;
  const androidReg = /(Android|Adr)/;
  const navigator = window.navigator.userAgent;
  const isAndroid = !!navigator.match(androidReg);
  const isIOS = !!navigator.match(iosReg);
  const isWin = !!navigator.match(winReg);
  const isLinux = !!navigator.match(linuxReg);
  const isMac = !!navigator.match(macReg);
  if (isAndroid) {
    deviceMark = 0;
  } else if (isIOS) {
    deviceMark = 1;
  } else if (isWin) {
    deviceMark = 2;
  } else if (isLinux) {
    deviceMark = 3;
  } else if (isMac) {
    deviceMark = 4;
  } else {
    deviceMark = devices.length - 1;
  }
  return devices[deviceMark];
}

/**
 * @description 判断当前浏览器环境
 * @returns {string} - wechat | qq | qqbrowser | alipay | uc | bd | safari | other
 */
export function getBrowserName() {
  let surroundMark,
    surround = [
      "wechat",
      "qq",
      "qqbrowser",
      "alipay",
      "uc",
      "bd",
      "safari",
      "other",
    ];
  const weChatReg = /micromessenger/;
  const qqReg = /qq\//;
  const qqBrowserReg = /mqqbrowser/;
  const alipayReg = /alipayclient/;
  const ucReg = /ucbrowser/;
  const bdReg = /baiduboxapp/;
  const safariReg = /safari/; // 安卓上大部分浏览器都是基于Safari二次开发 安卓数据不准
  const ua = window.navigator.userAgent.toLocaleLowerCase();
  const isWeChat = !!ua.match(weChatReg);
  const isQQBrowser = !!ua.match(qqBrowserReg);
  const isQQ = !!ua.match(qqReg);
  const isAlipay = !!ua.match(alipayReg);
  const isUc = !!ua.match(ucReg);
  const isBd = !!ua.match(bdReg);
  const isSafari = !!ua.match(safariReg);
  if (isWeChat) {
    surroundMark = 0;
  } else if (isQQ) {
    surroundMark = 1;
  } else if (isQQBrowser) {
    surroundMark = 2;
  } else if (isAlipay) {
    surroundMark = 3;
  } else if (isUc) {
    surroundMark = 4;
  } else if (isBd) {
    surroundMark = 5;
  } else if (isSafari) {
    surroundMark = 6;
  } else {
    surroundMark = surround.length - 1;
  }
  return surround[surroundMark];
}

/**
 * @description 防抖 注释：在高频率事件触发时，只保留最后一次事件
 * @param {function} fn - 事件函数
 * @param {number} [delay] - 延迟时间 default: 300
 * @returns {(function(): void)}
 */
export function debounce(fn, delay = 300) {
  let timeout = null;
  return function () {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
      timeout = null;
    }, delay);
  };
}

/**
 * @description 节流 注释：在一段时间内高频率的触发事件，仅会保留这段时间内第一次触发的事件
 * @param {function} fn - 事件函数
 * @param {number} [delay] - 延迟时间 default: 300
 * @returns {(function(): void)}
 */
export function throttle(fn, delay = 300) {
  let canRun = true;
  return function () {
    if (!canRun) return;
    // 立即设置为false
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, delay);
  };
}

/**
 * @description 异步锁，未解锁状态方法不会触发
 * @param {function} fn
 * @returns {(function(): Promise<boolean>)}
 */
export function asyncLock(fn) {
  const LOCKED = "locked";
  const UNLOCK = "unlock";
  let lockFlag = UNLOCK;
  return async function () {
    if (lockFlag === LOCKED) return lockFlag;
    lockFlag = LOCKED;
    await fn.apply(this, arguments);
    lockFlag = UNLOCK;
    return lockFlag;
  };
}

/**
 * @description 对列表的浅拷贝
 * @param {Object[]} list
 */
export function cloneList(list) {
  try {
    const bakList = [];
    for (let element of list.values()) {
      const tmp = {};
      for (let [key, value] of Object.entries(element)) {
        tmp[key] = value;
      }
      bakList.push(tmp);
    }
    return bakList;
  } catch (error) {
    console.log(error);
  }
}
