var timerButton = function(config){
  var $btn = $('<input type="button" id="zxs-timer-btn">');
  var timer;
  var t = config.tLength;

  $(config.container).append($btn);

  if(config.enabled){
    disableBtn();
  }else{
    enableBtn();
  }

  $btn.click(function(){
    $btn.trigger('timer-button-click');
    if(!config.enabled){
      t = config.tLength;
      disableBtn();
    }
  });
  function enableBtn(){
    $btn.val(config.text);
    $btn.removeAttr('disabled');
  }
  
  function disableBtn(){
   timer =  window.setInterval(function(){
    t--;
    $btn.attr('disabled','disabled');
    $btn.val(config.text+'('+t+'s)');
    if(t === 0){
      enableBtn();
      window.clearInterval(timer);
      return;
    }
   },1000);
  };

  return $btn;
}
