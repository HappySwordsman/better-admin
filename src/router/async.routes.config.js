import $router from "@/router";
import * as ionicons5 from "@vicons/ionicons5";
import renderIcon from "@/utils/renderIcon";

export const asyncRoutesOptions = [
  {
    menuName: "平台管理",
    menuKey: "Platform",
    iconName: "Build",
    children: [
      {
        path: "/platform-menu",
        menuKey: "PlatformMenu",
        menuName: "菜单管理",
        componentPath: "/common/InBuilding",
      },
      {
        path: "/platform-role",
        menuKey: "PlatformRole",
        menuName: "角色管理",
        componentPath: "/common/InBuilding",
      },
      {
        path: "/platform-user",
        menuKey: "PlatformUser",
        menuName: "用户管理",
        componentPath: "/common/InBuilding",
      },
      {
        path: "/platform-department",
        menuKey: "PlatformDepartment",
        menuName: "部门管理",
        componentPath: "/common/InBuilding",
      },
    ],
  },
];

function doAddRouteByMenuOption(menuOption) {
  $router.addRoute("Home", {
    path: menuOption.path,
    name: menuOption.menuKey,
    component: () => import(`../views${menuOption.componentPath}`),
    meta: {
      title: menuOption.menuName,
      keepAlive: menuOption.keepAlive,
    },
  });
}

export function createAsyncRoutesByMenuOptions(routeOptions) {
  for (const routeOption of routeOptions.values()) {
    if (routeOption.path) {
      doAddRouteByMenuOption(routeOption);
    }
    if (routeOption.children) {
      createAsyncRoutesByMenuOptions(routeOption.children);
    }
  }
}

export function createAsyncRouteMenuOptions(routeOptions) {
  return routeOptions.map((routeOption) => {
    let icon, children;
    if (routeOption.iconName) {
      icon = renderIcon(ionicons5[routeOption.iconName]);
    }
    if (routeOption.children) {
      children = createAsyncRouteMenuOptions(routeOption.children);
    }
    return {
      label: routeOption.menuName,
      key: routeOption.menuKey,
      icon,
      children,
    };
  });
}
