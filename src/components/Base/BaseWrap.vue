<template>
  <div class="base-wrap">
    <router-view></router-view>
    <BaseFooter class="outer-menu"></BaseFooter>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseFooter from "./BaseFooter.vue";
export default {
  components: {
    BaseFooter
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/css/mixin.scss';
.outer-menu{
  border-top: 1px solid #f5f5f5;
  height: pxToRem(100px);
}
</style>

