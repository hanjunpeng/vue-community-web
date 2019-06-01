<!-- 饼图 -->
<template>
  <div ref="echartsPie" class="echartsPie"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      myEchart: null,
      option: {
        legend: {}, // 图例
        tooltip: {}, // 提示框组件
        title: [
          {
            text: "普通红包",
            subtext: "红包金额：1000元",
            left: "25%",
            top: "40%",
            textAlign: "center",
            textVerticalAlign: "middle"
          },
          {
            text: "VIP",
            subtext: "红包金额：1000元",
            left: "75%",
            top: "40%",
            textAlign: "center",
            textVerticalAlign: "middle"
          },
          {
            text: "翡翠红包",
            subtext: "红包金额：1000元",
            left: "25%",
            top: "80%",
            textAlign: "center",
            textVerticalAlign: "middle"
          },
          {
            text: "钻石红包",
            subtext: "红包金额：1000元",
            left: "75%",
            top: "80%",
            textAlign: "center",
            textVerticalAlign: "middle"
          }
        ],
        dataset: {
          source: [
            ["product", "2012", "2013", "2014", "2015"],
            ["未领取", 41.1, 30.4, 65.1, 53.3],
            ["已领取", 86.5, 92.1, 85.7, 83.1],
            ["已使用", 24.1, 67.2, 79.5, 86.4],
            ["已过期", 55.2, 67.1, 69.2, 72.4]
          ]
        },
        series: [
          // 决定自己的图表类型
          {
            value: 21,
            name: "红包统计",
            type: "pie",
            radius: 50,
            center: ["25%", "25%"]
          },
          {
            name: "红包统计",
            type: "pie",
            radius: 50,
            center: ["75%", "25%"],
            encode: {
              itemName: "product",
              value: "2013"
            }
          },
          {
            name: "红包统计",
            type: "pie",
            radius: 50,
            center: ["25%", "65%"],
            encode: {
              itemName: "product",
              value: "2014"
            }
          },
          {
            name: "红包统计",
            type: "pie",
            radius: 50,
            center: ["75%", "65%"],
            encode: {
              itemName: "product",
              value: "2015"
            }
          }
        ]
      }
    };
  },
  methods: {
    init() {
      this.myEchart = echarts.init(this.$refs.echartsPie);
      this.myEchart.setOption(this.option);
    }
  },
  mounted() {
    this.init();
    let vm = this;
    window.onresize = function() {
      if (vm.myEchart) {
        vm.myEchart.resize();
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.echartsPie {
  height: 500px;
}
</style>
