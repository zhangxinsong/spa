window.onload = function(){
  var width = document.getElementById('recttangle__width');
  var height = document.getElementById('recttangle__height');
  var perimeter = document.getElementById('recttangle__perimeter');
  var area = document.getElementById('recttangle__area');
  var widthTip = document.getElementById('widthTip');
  var heightTip = document.getElementById('heightTip');
  var regString = new RegExp("[a-zA-Z]+","g");
  var regChinese = new RegExp("[\\u4E00-\\u9FFF]+","g");

  function wid(){
    if(regString.test(width.value)){
      widthTip.innerHTML = "请不要输入字母";
      return false;
    }
    else if(regChinese.test(width.value)){
      widthTip.innerHTML = "请不要输入文字";
      return false;
    }
    else if(window.Number(width.value) < 0){
      widthTip.innerHTML = "请输入大于0的数";
      return false;
    }
    else if(width.value == ""){
      widthTip.innerHTML = "不能为空";
      return false;
    }else{
      widthTip.innerHTML = "";
      return true;
    }
  }

  function hei(){
    if(regString.test(height.value)){
      heightTip.innerHTML = "请不要输入字母";
      return false;
    }
    else if(regChinese.test(height.value)){
      heightTip.innerHTML = "请不要输入文字";
      return false;
    }
    else if(window.Number(height.value) < 0){
      heightTip.innerHTML = "请输入大于0的数";
      return false;
    }
    else if(height.value == ""){
      heightTip.innerHTML = "不能为空";
      return false;
    }else{
      heightTip.innerHTML = "";
      return true;
    }
  }
  document.getElementById('recttangle__calc').onclick = function(){
    if(!wid() || !hei()){
      return;
    }
    perimeter.value = parseFloat((width.value*2+height.value*2).toFixed(10));
    area.value = parseFloat((width.value*height.value).toFixed(10));
  }
}
