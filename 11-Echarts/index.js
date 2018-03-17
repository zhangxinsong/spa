window.onload = function(){
  var myChart = echarts.init(document.getElementById('one'));

  var opt = {
    title:{
      text:'ECharts入门'
    },
    tooltip:{},
    legend:{
      data:['销量']
    },
    xAxis:{
      data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis:{},
    series:[{
      name:'销量',
      type:'bar',
      data:[5,20,36,10,20]
    }]
  };

  myChart.setOption(opt);

  var twochart = echarts.init(document.getElementById('two'));

  var xdata=[];
  var ydata=[];

  for(var i=0;i<=1;i+=0.1){
    xdata.push(round(i,1));
    ydata.push(round(h(i),2));
  }

  var opt1 = {
    title:{
      text:'二进熵函数曲线'
    },
    tooltip:{},
    legend:{
      data:['信息量']
    },
    xAxis:{
      data:xdata
    },
    yAxis:{},
    series:[{
      name:'信息量',
      type:'line',
      data:ydata
    }]
  };

  twochart.setOption(opt1)

  function round(x,n){
    return Math.round(x *Math.pow(10,n))/Math.pow(10,n);
  }

  function h(p){
    return -1 * (plog(p) + plog(1-p));
  }

  function plog(p){
    return (p === 0)? 0 : p * Math.log2(p);
  }

}
