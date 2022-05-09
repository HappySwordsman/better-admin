<template>
  <n-layout class="bt-layout full-win">
    <n-layout-header class="bt-layout__header">
      <nav-top-bar />
    </n-layout-header>
    <n-layout has-sider class="bt-layout__main">
      <n-layout-sider
        class="bt-layout__main-sider"
        :native-scrollbar="false"
        collapse-mode="width"
        :width="200"
        :collapsed="sideCollapsed"
      >
        <side-menu />
      </n-layout-sider>
      <n-layout-content
        class="bt-layout__main-content"
        :native-scrollbar="false"
      >
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

<style scoped lang="scss"></style>
