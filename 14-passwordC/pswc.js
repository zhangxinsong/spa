var passwordClear = function(config){
  var container = document.getElementById(config.container);
  var content = document.createElement('div');
  content.classList.add('zxs-content');
  container.appendChild(content);

  var label = document.createElement("label");
  label.classList.add('zxs-psw-label');
  label.innerHTML = config.title;
  content.appendChild(label);

  var password = document.createElement('input');
  password.type = 'password';
  password.classList.add('zxs-psw-input');
  content.appendChild(password);

  var eye = document.createElement('div');
  eye.classList.add('zxs-div-eye');
  content.appendChild(eye);

  eye.onmouseover = function(){
    password.type = 'text';
  };
  eye.onmouseout = function(){
    password.type = 'password';
  }

}
