window.onload = function(){
  var width = document.getElementById('recttangle__width');
  var height = document.getElementById('recttangle__height');
  var perimeter = document.getElementById('recttangle__perimeter');
  var area = document.getElementById('recttangle__area');

  document.getElementById('recttangle__calc').onclick = function calc(){

    perimeter.value = parseFloat((width.value*2+height.value*2).toFixed(10));
    area.value = parseFloat((width.value*height.value).toFixed(10));
  }
}
