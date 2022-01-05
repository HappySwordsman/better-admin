/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

export default [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Layout"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/common/NotFound"),
  },
];
