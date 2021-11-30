// api文档 https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-api.html#%E5%B1%9E%E6%80%A7

import BScroll, { CustomOptions } from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";
import observeDOM from "@better-scroll/observe-dom";
import ScrollBar from "@better-scroll/scroll-bar";
import PullUp from "@better-scroll/pull-up";
import Slide from "@better-scroll/slide";

BScroll.use(ScrollBar);
BScroll.use(observeDOM);
BScroll.use(MouseWheel);
BScroll.use(PullUp);
BScroll.use(Slide);

/**
 * @description better-scroll 配置
 * @type {BScrollOptions}
 */
export const BScrollOptions = CustomOptions;

const defaultOpt = {
  click: true,
  tap: "tap",
  freeScroll: false,
  scrollX: false,
  scrollY: true,
  observeDOM: true,
  mouseWheel: {
    speed: 20,
    invert: false,
    easeTime: 300,
  },
  scrollbar: {
    fade: false,
    interactive: false,
  },
  disableMouse: false,
  pullUpLoad: {
    threshold: 30,
  },
  startY: 0,
  bounce: true,
  eventPassthrough: "",
  probeType: 0,
};
/**
 *
 * @param el
 * @param {BScrollOptions} [options]
 * @returns {BScroll}
 */
function initBScroll(el, options = {}) {
  return new BScroll(el, {
    ...defaultOpt,
    ...options,
  });
}

export default initBScroll;
