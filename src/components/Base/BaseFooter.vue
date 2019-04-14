<template>
  <ul class="nav-bar-wrap">
    <li v-for="(item, index) in menuArr" :key="index">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      menuArr: [
        {
          name: "首页",
          value: "home"
        },
        {
          name: "全部分类",
          value: "classify"
        },
        {
          name: "购物车",
          value: "cart"
        },
        {
          name: "我的",
          value: "my"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.nav-bar-wrap{
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: space-between;
  display: flex;
  li{
    width: 25%;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

