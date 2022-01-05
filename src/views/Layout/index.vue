<template>
  <n-layout class="full-win">
    <n-layout-header>
      <nav-top-bar />
    </n-layout-header>
    <n-layout has-sider class="layout-main-body">
      <n-layout-sider
        :native-scrollbar="false"
        collapse-mode="width"
        :width="200"
        :collapsed="sideCollapsed"
      >
        <side-menu />
      </n-layout-sider>
      <n-layout-content :native-scrollbar="false">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script>
import NavTopBar from "@/views/Layout/NavTopBar.vue";
import SideMenu from "@/views/Layout/SideMenu.vue";
export default {
  name: "PageLayout",
  data() {
    return {
      sideCollapsed: false,
    };
  },
  components: {
    NavTopBar,
    SideMenu,
  },
};
</script>

<style scoped lang="scss">
.n-layout-header {
  position: relative;
  z-index: 2;
  box-shadow: rgb(0 0 0 / 20%) 0 4px 8px;
}
.n-layout-sider {
  box-shadow: rgb(0 0 0 / 20%) 0 4px 8px;
}
.layout-main-body {
  height: calc(100% - $nav-top-bar-height);
}
</style>
