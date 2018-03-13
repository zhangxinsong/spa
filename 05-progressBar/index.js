var progress = document.getElementById('progress');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var rest = document.getElementById('rest');
var timer = 0;
var i = 0;

start.onclick = function(){
  if(timer !== 0){
    return;
  }
  timer = window.setInterval('doing()',100);
}

stop.onclick = function(){
  window.clearInterval(timer);
  timer = 0;
}

rest.onclick = function(){
  progress.value = 0;
  i = 0;
}

function doing(){
  progress.value = i++;
}
