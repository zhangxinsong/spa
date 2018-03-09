var range = document.getElementById('range');
range.onchange = function(){
  var age = document.getElementById('age');

  age.innerHTML = range.value;
}
