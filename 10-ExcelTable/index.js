window.onload = function(){
  var data = [
      ['zhangxinsong','boy','60','170'],
      ['dengxiaotian','boy','65','174'],
      ['zhangxinsong','boy','60','170'],
      ['zhangxinsong','boy','60','170'],
      ['zhangxinsong','boy','60','170'],
      ['zhangxinsong','boy','60','170'],
    ];

  var container = document.getElementById('container');

  var table = new Handsontable(container,{
    data:data,
    contextMenu:true,
    manualRowResize:true,
    manualColumnResize:true,
    rowHeaders:true,
    colHeaders:[
      '姓名',
      '男孩',
      '体重',
      '身高'
      ]
  });
}
