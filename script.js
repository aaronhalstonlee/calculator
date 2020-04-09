const multReg = /(^\*)/gi;
const divReg = /(^\/)/gi;
const zeroReg = /0{2,}/gi;
const display = document.getElementById('display');
const onButton = document.getElementById("onButton");
const offButton = document.getElementById("offButton");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equals");
let equateList = document.getElementsByClassName('equate');
let equation = '';
let powerOn = false;
    
onButton.addEventListener('click', function(){
    if (!powerOn){
        display.innerHTML = '0';
        powerOn = true;
    }
})

offButton.addEventListener('click', function(){
    display.innerHTML = '';
    equation = '';
    powerOn = false;
})
        
clearButton.addEventListener('click', function(){
    equation = '';
    display.innerHTML = '0';
})
    
function updateEquation(input){
    equation += input;
}
    
function updateDisplay(eq){
    display.innerHTML = eq;
}

[].forEach.call(equateList, (element) =>{
    element.addEventListener('click', function(e){
        if (display.innerHTML == '0' && e.target.innerHTML == '0'){
            //do nothing!
        } else {
            equation += e.target.innerHTML;
            display.innerHTML = equation
        }
    })
})

// function for eval alternative
function calculate(eq){
    return Function(`'use strict';if(${eq}){ return ${eq};} else { return '';}`)()
}    
//

equalButton.addEventListener('click', function(){
    if (equation.match(multReg)){
        display.innerHTML = 'ERR';
    }
    if (equation.match(divReg)){
        display.innerHTML = 'ERR';
    }
    equation = calculate(equation);
    display.innerHTML = equation;
})