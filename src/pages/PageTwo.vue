<template>
  <div class="content">
    <div class="above">
      <div id="aboveLeft" class="aboveLeft"></div>
      <div class="aboveMiddle">
        <div class="dataInfo">
          <div class="estimate infoClass">
            <img class="infoImg" src="@/assets/img/dropbox.png">
            <div>
              <div class="title">预估总工时</div>
              <div class="data">850人天</div>
            </div>
          </div>
          <div class="available infoClass">
            <img class="infoImg" src="@/assets/img/city.png">
            <div>
              <div class="title">季度可用工时</div>
              <div class="data">100人天</div>
            </div>
          </div>
          <div class="balance infoClass">
            <img class="infoImg" src="@/assets/img/money05.png">
            <div>
              <div class="title">结余</div>
              <div class="data">-750人天</div>
            </div>
          </div>
        </div>
        <div class="dataCharts">
          <div id="consume" class="consume">截止进度消耗</div>
          <div class="distributed">
            <div class="distributedTitle">项目分布</div>
            <div class="distributedCharts">
              <div id="startUp" class="startUp">项目启动占比</div>
              <div id="cost" class="cost">成本超出占比</div>
            </div>
          </div>
        </div>
      </div>
      <div id="aboveRight" class="aboveRight"></div>
    </div>
    <div class="below">
      <div id="belowLeft" class="belowLeft"></div>
      <!-- <div class="belowMiddle"></div> -->
      <div class="belowRight">
        <div class="rightTitle">岗位饱和度</div>
        <div class="rightCharts">
          <div id="product" class="product"></div>
          <div class="down">
            <div id="develop" class="develop"></div>
            <div id="test" class="test"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-liquidfill'
export default {
  name: 'PageTwo',
  components: {},
  mixins: [],
  data() {
    return {
    }
  },
  created() { },
  mounted() {
    this.InitAvoveLeftChart()
    this.InitAvoveRightChart()
    this.InitBelowLeftChart()
    this.initConsumeChart()
    this.initStartUpChart()
    this.initCostChart()
    this.initProductChart()
    this.initDevelopChart()
    this.initTestChart()
  },
  methods: {
    InitAvoveLeftChart() {
      let aboveLeftChart = echarts.init(document.getElementById('aboveLeft'))
      let option = {
        title: {
          show: true,
          text: '项目成本投入排行',
          top: 10,
          left: 10
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          bottom: '3%'
        },
        grid: {
          left: '3%',
          right: '20%',
          top: '10%',
          height: 400,
        },
        xAxis: {
          type: 'value',
          show: false,
          inverse: true,
        },
        yAxis: {
          type: 'category',
          data: ['Mon11111111111111', 'Tue11111', 'Wed111112', 'Thu23123123', 'Fr12312312i', 'Sa123123t', 'Su123123123n', 'Mon11111111111111', 'Tue11111', 'Wed111112', 'Thu23123123', 'Fr12312312i', 'Sa123123t', 'Su123123123n'],
          position: 'right',
          axisLabel: {
            show: true,
            width: 90,
            align: 'left',
            margin: 10,
            overflow: 'truncate',
            ellipsis: '...',
          },
        },
        series: [
          {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            barMaxWidth: 25,
            data: [82, 82, 90, 94, 129, 130, 130, 82, 82, 90, 94, 129, 130, 130]
          }
        ]
      }
      aboveLeftChart.setOption(option)
    },
    InitAvoveRightChart() {
      let aboveRightChart = echarts.init(document.getElementById('aboveRight'))
      let option = {
        title: {
          show: true,
          text: '项目成本投入排行',
          top: 10,
          left: 10
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          bottom: '3%'
        },
        grid: {
          right: '3%',
          left: '20%',
          top: '10%',
          height: 400,
        },
        xAxis: {
          type: 'value',
          show: false,
        },
        yAxis: {
          type: 'category',
          data: ['Mon11111111111111', 'Tue11111', 'Wed111112', 'Thu23123123', 'Fr12312312i', 'Sa123123t', 'Su123123123n', 'Mon11111111111111', 'Tue11111', 'Wed111112', 'Thu23123123', 'Fr12312312i', 'Sa123123t', 'Su123123123n'],
          axisLabel: {
            show: true,
            width: 90,
            align: 'right',
            margin: 10,
            overflow: 'truncate',
            ellipsis: '...',
          },
        },
        series: [
          {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            barMaxWidth: 25,
            data: [82, 82, 90, 94, 129, 130, 130, 82, 82, 90, 94, 129, 130, 130]
          }
        ]
      }
      aboveRightChart.setOption(option)
    },
    InitBelowLeftChart() {
      let belowLeftChart = echarts.init(document.getElementById('belowLeft'))
      let option = {
        title: {
          show: true,
          text: 'Bar-DataZoom(slider+inside)'
        },
        legend: {
          top: 2
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '10%',
          bottom: '10%',
          height: 300,
          containLabel: true
        },
        color: ['rgb(240,91,114)'],
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        dataZoom: [
          {
            type: 'inside',
            xAxisIndex: 0,
          },
          {
            type: 'slider',
            xAxisIndex: 0,
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            barMaxWidth: 40,
            data: [10, 52, 200, 334, 390, 330, 220],
            label: {
              show: true,
              align: 'center',
              position: 'top',
              color: 'rgb(240,91,114)'
            }
          }
        ]
      };
      belowLeftChart.setOption(option)
    },
    initConsumeChart() {
      let consumeChart = echarts.init(document.getElementById('consume'))
      let option = {
        title: {
          text: '截止进度消耗'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          top: '15%',
          left: '10%',
          right: '4%',
          bottom: '3%',
        },
        color: ['rgb(180,199,231)', 'rgb(55,220,177)'],
        xAxis: {
          show: false,
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            show: true,
            width: 50,
            align: 'right',
            margin: 10,
            overflow: 'truncate',
            ellipsis: '...',
          },
          data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: [
          {
            name: '预估工时',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            label: {
              show: true,
              align: 'left',
              position: 'right',
            },
          },
          {
            name: '消耗工时',
            type: 'bar',
            label: {
              show: true,
              align: 'left',
              position: 'right',
            },
            data: [
              {
                value: 19325,
                itemStyle: {
                  color: 'rgb(55,220,177)'
                }
              },
              {
                value: 23438,
                itemStyle: {
                  color: 'rgb(254,68,68)'
                }
              },
              {
                value: 31000,
                itemStyle: {
                  color: 'rgb(254,68,68)'
                }
              },
              {
                value: 121594,
                itemStyle: {
                  color: 'rgb(254,68,68)'
                }
              },
              {
                value: 134141,
                itemStyle: {
                  color: 'rgb(254,68,68)'
                }
              },
              {
                value: 681807,
                itemStyle: {
                  color: 'rgb(254,68,68)'
                }
              }
            ]
          }
        ]
      };
      consumeChart.setOption(option)
    },
    initStartUpChart() {
      let startUpChart = echarts.init(document.getElementById('startUp'))
      let option = {
        title: {
          text: '项目启动占比',
          left: '10%',
          top: '5%',
          textStyle: {
            fontSize: 14,
          }
        },
        tooltip: {
          show: false
        },
        legend: {
          bottom: '3%'
        },
        grid: {
          top: '0%'
        },
        color: ['rgb(156,122,248)', 'rgb(120,239,199)'],
        series: [
          {
            type: 'pie',
            radius: '50%',
            label: {
              show: true,
              position: 'inside',
              formatter: '{d}%'
            },
            selectedMode: true,
            data: [
              { value: 20, name: '已启动', select: { disabled: false } },
              { value: 80, name: '未启动', select: { disabled: true } },
            ],
          }
        ]
      };
      startUpChart.setOption(option)
    },
    initCostChart() {
      let costChart = echarts.init(document.getElementById('cost'))
      let option = {
        title: {
          text: '成本超出占比',
          left: '10%',
          top: '5%',
          textStyle: {
            fontSize: 14,
          }
        },
        tooltip: {
          show: false
        },
        legend: {
          bottom: '3%'
        },
        grid: {
          top: '0%'
        },
        color: ['rgb(156,122,248)', 'rgb(120,239,199)'],
        series: [
          {
            type: 'pie',
            radius: '50%',
            label: {
              show: true,
              position: 'inside',
              formatter: '{d}%'
            },
            selectedMode: true,
            data: [
              { value: 20, name: '成本超出', select: { disabled: false } },
              { value: 80, name: '成本内', select: { disabled: true } },
            ],
          }
        ]
      };
      costChart.setOption(option)
    },
    initProductChart() {
      let productChart = echarts.init(document.getElementById('product'))
      let option = {
        title: {
          text: '产品',
          left: 70,
          top: 20
        },
        grid: {
          height: 200
        },
        series: [{
          type: 'liquidFill',
          data: [0.6],
          outline: {
            show: false
          },
          label: {
            fontSize: 20
          }
        }]
      };
      productChart.setOption(option)
    },
    initDevelopChart() {
      let developChart = echarts.init(document.getElementById('develop'))
      let option = {
        title: {
          text: '研发',
          left: 70,
          top: 20
        },
        grid: {
          height: 200
        },
        series: [{
          type: 'liquidFill',
          data: [0.6],
          outline: {
            show: false
          },
          label: {
            fontSize: 20
          }
        }]
      };
      developChart.setOption(option)
    },
    initTestChart() {
      let testChart = echarts.init(document.getElementById('test'))
      let option = {
        title: {
          text: '测试',
          left: 70,
          top: 20
        },
        grid: {
          height: 200
        },
        series: [{
          type: 'liquidFill',
          data: [0.6],
          outline: {
            show: false
          },
          label: {
            fontSize: 20
          }
        }]
      };
      testChart.setOption(option)
    }

  }

}
</script>

<style scoped lang='scss'>
.content {
  width: 100%;
  height: 100%;
  background-color: rgb(243, 243, 243);
  display: flex;
  flex-direction: column;

  .above {
    height: 520px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .aboveLeft {
      width: 500px;
      height: 520px;
      background-color: white;
      flex-shrink: 0;
    }

    .aboveMiddle {
      height: 520px;
      width: 680px;
      margin: 0 20px 0 20px;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;

      .dataInfo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .infoClass {
          width: 220px;
          height: 100px;
          border-radius: 10px;
          color: white;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .infoImg {
            width: 48px;
            height: 48px;
            top: 25px;
            left: 6px;
            position: absolute;
          }

          .title {
            font-size: 16px;
            margin-bottom: 5px;
          }

          .data {
            font-size: 24px;
          }
        }

        .estimate {
          background-color: rgb(240, 116, 94);
          width: 200px;
          height: 100px;
        }

        .available {
          background-color: #f1c19c;
          background-image: linear-gradient(90deg, #f1c19c 0%, #eba671 46%, #e59249 100%);
        }

        .balance {
          background-color: #6b75fc;
          background-image: linear-gradient(90deg, #6b75fc 0%, #8c89e4 46%, #b3a1c8 100%);
        }
      }

      .dataCharts {
        margin-top: 10px;

        .consume {
          background-color: white;
          height: 200px;
        }

        .distributed {
          margin-top: 10px;
          height: 200px;
          background-color: white;
          display: flex;
          flex-direction: column;

          .distributedTitle {
            margin-left: 10px;
            font-weight: 1000;
          }

          .distributedCharts {
            height: 190px;
            display: flex;
            flex-direction: row;
            justify-self: center;
            align-self: center;

            .startUp {
              height: 180px;
              width: 300px;
            }

            .cost {
              height: 180px;
              width: 300px;
            }
          }
        }
      }
    }

    .aboveRight {
      width: 500px;
      height: 520px;
      background-color: white;
      flex-shrink: 0;
    }
  }

  .below {
    height: 430px;
    margin: 0 10px 10px 10px;
    // background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;


    .belowLeft {
      width: 1200px;
      height: 100%;
      background-color: white;
      flex-shrink: 0;
    }

    // .belowMiddle {
    //   width: 510px;
    //   flex-shrink: 0;
    // }

    .belowRight {
      margin-left: 20px;
      width: 500px;
      height: 100%;
      background-color: white;
      flex-shrink: 0;

      .rightTitle {
        font-size: 20px;
        font-weight: 600;
        margin-top: 10px;
        margin-left: 10px;
      }

      .rightCharts {
        display: flex;
        flex-direction: column;
        align-items: center;
      }


      .product {
        width: 200px;
        height: 200px;
      }

      .down {
        display: flex;
        flex-direction: row;
      }

      .develop {
        width: 200px;
        height: 200px;
      }

      .test {
        width: 200px;
        height: 200px;
      }
    }
  }
}
</style>