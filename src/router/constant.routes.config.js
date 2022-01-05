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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/common/NotFound"),
  },
];
