<template>
  <n-dropdown trigger="click" :options="menuOptions">
    <n-avatar
      round
      :size="50"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
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
