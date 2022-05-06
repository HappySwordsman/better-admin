import router from "@/router";
import {
  asyncRoutesOptions,
  createAsyncRoutesByMenuOptions,
} from "@/router/async.routes.config";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

// 动态路由是否已添加
let hasDoAddRoutes = false;
NProgress.configure({ showSpinner: false });

router.beforeEach((to) => {
  NProgress.start();
  if (!hasDoAddRoutes) {
    // 挂载动态路由
    createAsyncRoutesByMenuOptions(asyncRoutesOptions);
    hasDoAddRoutes = true;
    NProgress.done();
    // 确保挂载后的路由可以正常访问做一次重定向
    return {
      replace: true,
      path: to.path,
    };
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
