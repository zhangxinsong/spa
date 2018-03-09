var password = document.getElementById('password');
var show = document.getElementById('show');
show.onmouseover = function(){
  console.log('aaa');
  password.type = "text";
  show.display = "none";
}

show.onmouseout = function(){
  password.type = "password";
}
