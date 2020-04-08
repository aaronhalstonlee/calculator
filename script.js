var equation = '';
var powerOn = false;
var display = $("#display");
var zero = $('#zero').click();
var multReg = /(^\*)/gi;
var divReg = /(^\/)/gi;
var zeroReg = /0{2,}/gi;
var decimal = true;
var check = 0;
$(function(){
  $("#onButton").click(function(){
    if (!powerOn){
      display.html('0');
      powerOn = true;
      console.log(powerOn, check++)
    } else {
      //display.html(equation);
      console.log(powerOn, check++)
    }
  });
  
  $("#offButton").click(function(){
    if (powerOn){
      display.html('');
      equation = '';
      powerOn = false;
      console.log(powerOn, check++)
    }
  });
  //display.html('0')
  equation='';
  
  $("#clear").click(function(){
    equation = '';
    display.html('0');
  });
  
  function updateEquation(input){
    equation += input;
  }
  
  function updateDisplay(eq){
    display.html(eq);
  }
  
  
  $(".equate").click(function(){
    
    if (display.html() == '0' && $(this).html() == '0'){
      //do nothing!
    } else {
      equation += $(this).html();
      display.html(equation)
    }
  });
  
  $("#equals").click(function(){
    if (equation.match(multReg)){
      display.html('ERR');
    }
    if (equation.match(divReg)){
      display.html('ERR');
    }
    equation = eval(equation);
    display.html(equation);
    
  });
})