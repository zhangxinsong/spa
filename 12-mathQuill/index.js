$(function(){
  var MQ = MathQuill.getInterface(2);

  var onefile=$('#one').get(0);
  var one = "";

  var onetwo = MQ.MathField(onefile,{
    handlers:{
      edit: function(){
        var enteredMath = onetwo.latex();
        one = enteredMath;
      }
    }
  });
  $('input[type="button"]').click(function(){
    var $one = $('<p><span class="one"></span></p>');

    $one.find('.one').html(one);
    MQ.StaticMath($one.find('.one').get(0));
    $('#container').append($one);
    console.log(one);
  });
})
