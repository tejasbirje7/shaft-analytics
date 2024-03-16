import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shaft-board',
  templateUrl: './shaft-board.component.html',
  styleUrls: ['./shaft-board.component.scss']
})
export class ShaftBoardComponent implements OnInit {
  public loading: boolean = false
  public mainChartOpts: any
  public comboboxItems = [
    {
      content: "one"
    },
    {
      content: "two"
    },
    {
      content: "three"
    },
    {
      content: "four"
    }
  ]
  public chartOptions = {}
  public chartOptions2 = {}
  public chartOptions3 = {}
  public chartOptions4 = {}
  public punchCardOpts = {}
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.createCards();
    this.createPunchCard();
    this.createMainChart();
  }

  createCards() {
    const data = [
      [10, 20, 30, 50, 55, 60, 23],
      [15, 40, 50, 20, 45, 20, 12],
    ]

    const data2 = [
      [6, 67, 30, 78, 99, 78, 60],
      [12, 12, 10, 33, 32, 40, 20],
    ]

    const data3 = [820, 1100, 600, 400]

    const data4 = [300, 790, 560, 1200]
    this.chartOptions3 = {
      animation: true,
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        containLabel: false,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          data: data3,
          type: 'line',
          symbol: 'none',
          smooth: true,
          smoothMonotone: 'x',
          backgroundStyle: {
            color: 'transparent'
          },
          itemStyle: {
            color: 'rgb(249,23,6)'
          },
          areaStyle: {
            color: 'rgba(255,160,166,0.8)'
          }
        }
      ]
    }

    this.chartOptions4 = {
      animation: true,
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          data: data4,
          type: 'line',
          symbol: 'none',
          smooth: true,
          smoothMonotone: 'x',
          backgroundStyle: {
            color: 'transparent'
          },
          itemStyle: {
            color: 'rgb(8,180,0)'
          },
          areaStyle: {
            color: 'rgba(138,255,191,0.8)'
          }
        }
      ]
    }
    const getXAxis = (data) => {
      // @ts-ignore
      return [...Array(data[0].length).keys()]
    }

    const getSeries = (data) => {
      return data.map((points, index) => {
        return {
          data: points,
          stack: 'stackGroup',
          type: 'bar',
          barCategoryGap: 0.1,
          showBackground: true,
          backgroundStyle: {
            color: 'transparent'
          },
          itemStyle: {
            color: index % 2 === 0 ? 'rgb(77, 137, 249)' : 'rgba(198,213,255,0.3)'
          }
        }
      })
    }

    this.chartOptions = {
      animation: true,
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      xAxis: {
        type: 'category',
        data: getXAxis(data),
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: getSeries(data)
    }

    this.chartOptions2 = {
      animation: true,
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      xAxis: {
        type: 'category',
        data: getXAxis(data2),
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,

      },
      series: getSeries(data2)
    }
  }
  createPunchCard() {

    const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
      '7a', '8a', '9a', '10a', '11a',
      '12p', '1p', '2p', '3p', '4p', '5p',
      '6p', '7p', '8p', '9p', '10p', '11p']
    const days = ['Friday', 'Thursday',
      'Wednesday', 'Tuesday', 'Monday']

    let data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]]
    data = data.map(function (item) {
      return [item[1], item[0], item[2]]
    })

    this.punchCardOpts = {
      title: {
        text: '',
        link: ''
      },
      tooltip: {
        position: 'top',
        formatter: function (params) {
          return params.value[2] + ' users in ' + hours[params.value[0]] + ' of ' + days[params.value[1]]
        }
      },
      grid: {
        left: 2,
        bottom: 0,
        right: 20,
        top: 0,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          fontSize: 10,
        }
      },
      yAxis: {
        type: 'category',
        data: days,
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLabel: {
          fontSize: 10,
        }
      },
      series: [{
        name: 'Punch Card',
        type: 'scatter',
        symbolSize: function (val) {
          return val[2] * 2
        },
        data: data,
        animationDelay: function (idx) {
          return idx * 5
        }
      }]
    }
  }

  createMainChart() {
    this.loading = true
    this.http.get('assets/data/example1.json').subscribe((data: any) => {
      this.mainChartOpts = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: 40,
          right: 40,
          bottom: 40,
          left: 15,
          containLabel: true,
        },
        xAxis: {
          data: data.map(function (item) {
            return item[0]
          })
        },
        yAxis: {
          splitLine: {
            show: false
          }
        },
        dataZoom: [{
          startValue: '2019-06-01'
        }, {
          type: 'inside'
        }],
        visualMap: {
          orient: 'horizontal',
          top: 0,
          right: 0,
          left: 35,
          textStyle: {
            fontSize: 11,
          },
          pieces: [{
            gt: 0,
            lte: 50,
            color: '#00bf7f'
          }, {
            gt: 50,
            lte: 100,
            color: '#ffe83b'
          }, {
            gt: 100,
            lte: 150,
            color: '#ffb066'
          }, {
            gt: 150,
            lte: 200,
            color: '#cc3d61'
          }, {
            gt: 200,
            lte: 300,
            color: '#934099'
          }, {
            gt: 300,
            color: '#7e0023'
          }],
          outOfRange: {
            color: '#c3c3c3'
          }
        },
        series: {
          type: 'line',
          data: data.map(function (item) {
            return item[1]
          }),
          markLine: {
            silent: true,
            data: [{
              yAxis: 50
            }, {
              yAxis: 100
            }, {
              yAxis: 150
            }, {
              yAxis: 200
            }, {
              yAxis: 300
            }]
          }
        }
      }

      this.loading = false
    })
  }

}
