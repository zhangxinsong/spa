window.onload = function(){
  var width = document.getElementById('recttangle__width');
  var height = document.getElementById('recttangle__height');
  var perimeter = document.getElementById('recttangle__perimeter');
  var area = document.getElementById('recttangle__area');
  var widthTip = document.getElementById('widthTip');
  var heightTip = document.getElementById('heightTip');
  var regString = /[abcdf-zABCDF-Z`~!@#$%^&*()+_\[\]{}|;:'",<>?/]/;
  var regNumber = /^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/;
  var one = false;

  width.onkeypress = function(e){
    check(e);
  }
  height.onkeypress = function(e){
    check(e);
  }

  width.onblur = function(){
    if(!regNumber.test(width.value)){
      widthTip.innerHTML = "请输入数字";
      width.focus();
      one = false;
    }
    else if(window.Number(width.value) < 0){
      widthTip.innerHTML = "请输入大于0的数";
      width.focus();
      one = false;
    }
    else if(width.value == ""){
      widthTip.innerHTML = "不能为空";
      width.focus();
      one = false;
    }else{
      widthTip.innerHTML = "";
      one = false;
    }
  }

  height.onblur = function(){
    if(!regNumber.test(height.value)){
      heightTip.innerHTML = "请输入数字";
      height.focus();
      one = false;
    }
    else if(window.Number(height.value) < 0){
      heightTip.innerHTML = "请输入大于0的数";
      height.focus();
      one = false;
    }
    else if(height.value == ""){
      heightTip.innerHTML = "不能为空";
      height.focus();
      one = false;
    }else{
      heightTip.innerHTML = "";
      one = true;
    }
  }
  document.getElementById('recttangle__calc').onclick = function(){
    if(one == false){
      return;
    }
    perimeter.value = parseFloat((width.value*2+height.value*2).toFixed(10));
    area.value = parseFloat((width.value*height.value).toFixed(10));
  }

  function check(e){
    if(regString.test(e.key)){
      e.preventDefault();
      console.log("aaa");
    }
  }
}
