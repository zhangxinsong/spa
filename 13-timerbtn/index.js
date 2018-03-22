$(function(){
  var btn = timerButton({
    'container': 'div.main',
    'enabled': true,
    'tLength': 10,
    'text': '同意'
  });
  btn.on('timer-button-click',function(){
    alert('同意了');
  });

  var btn1 = timerButton({
    'container': 'div.main',
    'enabled': false,
    'tLength': 10,
    'text': '发送'
  });
  btn1.on('timer-button-click',function(){
    alert('已发送');
  })
});
