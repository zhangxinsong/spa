window.onload = function(){
  var width = document.getElementById('recttangle__width');
  var height = document.getElementById('recttangle__height');
  var perimeter = document.getElementById('recttangle__perimeter');
  var area = document.getElementById('recttangle__area');
  var widthTip = document.getElementById('widthTip');
  var heightTip = document.getElementById('heightTip');
  var regString = new RegExp("[a-zA-Z]+","g");
  var regChinese = new RegExp("[\\u4E00-\\u9FFF]+","g");

  width.onblur = function(){
    if(regString.test(width.value)){
      widthTip.innerHTML = "请不要输入字母";
      width.focus();
    }
    else if(regChinese.test(width.value)){
      widthTip.innerHTML = "请不要输入文字";
      width.focus();
    }
    else if(window.Number(width.value) < 0){
      widthTip.innerHTML = "请输入大于0的数";
      width.focus();
    }
    else if(width.value == ""){
      widthTip.innerHTML = "不能为空";
      width.focus();
    }else{
      widthTip.innerHTML = "";
    }
  }

  height.onblur = function(){
    if(regString.test(height.value)){
      heightTip.innerHTML = "请不要输入字母";
      height.focus();
    }
    else if(regChinese.test(height.value)){
      heightTip.innerHTML = "请不要输入文字";
      height.focus();
    }
    else if(window.Number(height.value) < 0){
      heightTip.innerHTML = "请输入大于0的数";
      height.focus();
    }
    else if(height.value == ""){
      heightTip.innerHTML = "不能为空";
      height.focus();
    }else{
      heightTip.innerHTML = "";
    }
  }
  document.getElementById('recttangle__calc').onclick = function(){
    perimeter.value = parseFloat((width.value*2+height.value*2).toFixed(10));
    area.value = parseFloat((width.value*height.value).toFixed(10));
  }
}
