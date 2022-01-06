<template>
  <div class="page-wrapper absolute-full">
    <div class="page-body">
      <div class="content-bg"></div>
      <h1 class="page-content">正在建设...</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "InBuilding",
};
</script>

<style scoped lang="scss">
.page-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  .page-body {
    margin-top: -100px;
    .content-bg {
      width: 620px;
      height: 195px;
      background: url("~@/assets/pics/system-error/website-under-construction-bg.png")
        no-repeat center center;
    }
    .page-content {
      text-align: center;
      line-height: 1.5;
      font-size: 38px;
      color: $color-warning;
    }
  }
}
</style>
