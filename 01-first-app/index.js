window.onload = function(){
  document.getElementById('recttangle__calc').onclick = function(){
    var width = document.getElementById('recttangle__width').value;
    var height = document.getElementById('recttangle__height').value;
    if(width)
    document.getElementById('recttangle__perimeter').value = width*2+height*2;
    document.getElementById('recttangle__area').value = width*height;
  }
}
