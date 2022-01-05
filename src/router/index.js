import { createRouter, createWebHistory } from "vue-router";
import constantRoutes from "@/router/constant.routes.config";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
});

export function resetRouter() {
  const whiteRouteNames = ["Login", "404"];
  // 卸载原先路由：仅需移除父路由，子路由也会同时移除
  for (const RouteRecordRaw of constantRoutes.values()) {
    if (whiteRouteNames.includes(RouteRecordRaw.name)) continue;
    router.removeRoute(RouteRecordRaw.name);
    router.addRoute(RouteRecordRaw);
  }
}

export default router;
