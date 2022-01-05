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

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (!hasDoAddRoutes) {
    createAsyncRoutesByMenuOptions(asyncRoutesOptions);
    hasDoAddRoutes = true;
    NProgress.done();
    return next({
      replace: true,
      path: to.path,
    });
  }
  console.log(to);

  next();
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
