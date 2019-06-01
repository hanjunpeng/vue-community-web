<template>
  <div>
    home到fsdfs
    <!-- <div v-for="(item, index) in imgary" :key="index">
      <img :src="item" alt="" />
    </div> -->
    <echartsPie></echartsPie>
  </div>
</template>

<script lang="ts">
import echartsPie from "@/components/echarts/echarts-pie.vue";
export default {
  components: {
    echartsPie
  },
  data() {
    return {
      imgary: [
        require("../../assets/img/menu/1.png"),
        require("../../assets/img/menu/2.png"),
        require("../../assets/img/menu/3.png")
      ]
    };
  },
  methods: {
    init() {
      // console.log(this)
    }
  },
  created() {
    // console.log(this, 8);
  }
};
</script>
