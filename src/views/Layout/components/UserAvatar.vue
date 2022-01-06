<template>
  <n-dropdown trigger="click" :options="menuOptions">
    <n-avatar
      round
      :size="50"
      src="https://img1.baidu.com/it/u=2288921297,1372081019&fm=26&fmt=auto"
    />
  </n-dropdown>
</template>

<script setup>
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
} from "@vicons/ionicons5";
import renderIcon from "@/utils/renderIcon";
const menuOptions = [
  {
    label: "用户资料",
    key: "profile",
    icon: renderIcon(UserIcon),
  },
  {
    label: "编辑用户资料",
    key: "editProfile",
    icon: renderIcon(EditIcon),
  },
  {
    label: "退出登录",
    key: "logout",
    icon: renderIcon(LogoutIcon),
  },
];
</script>

<style scoped></style>
