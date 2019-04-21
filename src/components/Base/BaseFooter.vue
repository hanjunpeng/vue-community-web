<template>
  <ul class="nav-bar-wrap">
    <li
      v-for="(item, index) in Dict.BASEFOOTER"
      :key="index"
      :class="[
        item.value,
        $store.state.menu.active === `index/${item.value}` ? 'is-active' : ''
      ]"
      @click="handleClick(item, index)"
    >
      <i></i>
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick(item, index) {
      this.$store.commit("setMenuActive", `index/${item.value}`);
      this.$router.push(item.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.nav-bar-wrap {
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: space-between;
  display: flex;
  li {
    width: 25%;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    i {
      @include backgroundImage();
      width: 20px;
      height: 20px;
      margin-bottom: pxToRem(3px);
    }
  }
  li.home i {
    background-image: url("../../assets/img/menu/1.png");
  }
  li.classify i {
    background-image: url("../../assets/img/menu/2.png");
  }
  li.cart i {
    background-image: url("../../assets/img/menu/3.png");
  }
  li.my i {
    background-image: url("../../assets/img/menu/4.png");
  }
  li.home.is-active i {
    background-image: url("../../assets/img/menu/i-1.png");
  }
  li.classify.is-active i {
    background-image: url("../../assets/img/menu/i-2.png");
  }
  li.cart.is-active i {
    background-image: url("../../assets/img/menu/i-3.png");
  }
  li.my.is-active i {
    background-image: url("../../assets/img/menu/i-4.png");
  }
}
</style>
