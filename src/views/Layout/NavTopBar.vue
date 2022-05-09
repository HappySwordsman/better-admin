<template>
  <header class="bt-layout__header-bar">
    <div class="bt-layout__header-bar--left-item">
      <h1 class="bt-layout__header-bar-title">better admin</h1>
    </div>
    <div class="bt-layout__header-bar--right-item">
      <div
        class="bt-layout__header-bar--item-block bt-layout__header-bar--avatar"
      >
        <user-avatar />
      </div>
    </div>
  </header>
</template>

<script setup>
import UserAvatar from "@/views/Layout/components/UserAvatar.vue";
</script>

<style scoped lang="scss"></style>
