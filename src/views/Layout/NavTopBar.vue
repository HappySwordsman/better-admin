<template>
  <header class="nav-top-bar">
    <div class="nav-top-left-item"></div>
    <div class="nav-top-right-item clearfix">
      <div class="item-block avatar-box">
        <user-avatar />
      </div>
    </div>
  </header>
</template>

<script setup>
import UserAvatar from "@/views/Layout/components/UserAvatar";
</script>

<style scoped lang="scss">
.nav-top-bar {
  height: $nav-top-bar-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  .avatar-box {
    cursor: pointer;
    height: 50px;
    user-select: none;
  }
}
.item-block {
  float: right;
}
</style>
