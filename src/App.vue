<script setup lang="ts">

import HelloWorld from "@components/HelloWorld.vue";
import variable from "@/assets/styles/variable.module.scss";

const style = {
  'background-color': variable.bgColor
}
</script>

<template>
  <div>
    <div :style="style">
      <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
      <el-button type="info"><i-ep-InfoFilled />Info</el-button>
      <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
      <el-button type="danger"><i-ep-WarnTriangleFilled />Danger</el-button>
    </div>
    <svg-icon icon-class="vue" />
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="scss"  scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

