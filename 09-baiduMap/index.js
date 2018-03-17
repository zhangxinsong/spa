window.onload = function(){
  var map = new BMap.Map('container');
  map.centerAndZoom('青县四季花城小区',15);

  map.addControl(new BMap.MapTypeControl({
    mapTypes:[
    BMap_NORMAL_MAP,
    BMAP_HYBRID_MAP
    ]}));
  map.enableScrollWheelZoom(true);

  var sContent="<h4 style='margin:0 0 5px 0;padding:0.2em 0'>我家</h4>"+"<a href='https://github.com/zhangxinsong'><img style='float:right;margin:4px' src='img1.3lian.com/2015/a1/95/d/105.jpg' width='96px' height='60px' /></a>"+"<p style='margin:0;line-height:1.5;font-size:13px'>这是我家</p>";

  var point = new BMap.Point(116.813375,38.560832);
  var marker = new BMap.Marker(point);
  var infoWindow = new BMap.InfoWindow(sContent);
  map.addOverlay(marker);
  marker.addEventListener("click",function(){
    this.openInfoWindow(infoWindow);
  })
 }
