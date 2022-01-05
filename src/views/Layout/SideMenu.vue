<template>
  <n-menu
    :value="$route.name"
    :options="menuOptions"
    @update-value="handleSelectedMenu"
  ></n-menu>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import {
  createAsyncRouteMenuOptions,
  asyncRoutesOptions,
} from "@/router/async.routes.config";

const menuOptions = createAsyncRouteMenuOptions(asyncRoutesOptions);
const $router = useRouter();
const $route = useRoute();
const handleSelectedMenu = (key, menuOption) => {
  $router.push({
    name: key,
  });
};
</script>

<style scoped></style>
