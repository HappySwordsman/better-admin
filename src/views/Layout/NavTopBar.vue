<template>
  <header class="nav-top-bar">
    <div class="nav-top-left-item">
      <h1 class="page-title">better admin</h1>
    </div>
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
  .page-title {
    font-family: photogenics;
    font-weight: bold;
    color: transparent;
    background-image: linear-gradient(90deg, $color-primary, $color-success);
    -webkit-background-clip: text;
    line-height: 42px;
    height: 42px;
    font-size: 28px;
    margin: 0;
    cursor: pointer;
  }
}
.item-block {
  float: right;
}
</style>
