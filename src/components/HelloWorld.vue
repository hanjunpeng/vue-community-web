<template>
  <div>
    <div class="testvue">你好</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/mixin.scss";
.testvue {
  display: flex;
  width: pxToRem(10px);
  height: pxToRem(20px);
  background: #333;
}
</style>
