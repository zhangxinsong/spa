var time = 10;
var timer = document.getElementById('timer');
  for(i=0;i<=time;i++){
    window.setTimeout("update("+i+")",i*1000);
    console.log(i);
  }

function update(num){
  if(num == time){
    timer.disabled = false;
    timer.value = "同意";
  }
  else{
    var num1 = time-num;
    timer.value = "同意（"+num1+")";
  }
}

timer.onclick = function(){
  alert("您终于同意了！！！");
}
