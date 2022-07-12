<template>
  <div class="empty-layout">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.empty-layout {
  width: 100%;
  height: 100%;
  background: gray;
  opacity: 0.5;
  overflow: hidden;
}
</style>