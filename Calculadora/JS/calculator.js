//Step 2
const displayInputValue=document.getElementById('inputValue');
const displayOutputValue=document.getElementById('outputValue');
const allButtons=document.querySelectorAll('.number');
const buttonOperat=document.querySelectorAll('.operation');
//Step 4
const display= new DisplayOp(displayOutputValue,displayInputValue);

allButtons.forEach(buton =>{
    buton.addEventListener('click',()=> display.insertNumber(buton.innerHTML));
});

buttonOperat.forEach(buton =>{
    buton.addEventListener('click', ()=> display.opResult(buton.value))
});