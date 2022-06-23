let operator =  prompt('WELCOME ! Pls enter an operator you want to perform'+ "  "+ "e.g '*','/'  " );
let firstNum  = parseInt(prompt("Enter first number"),10);
let secondNum = parseInt(prompt(firstNum + operator+ " "+"Enter second number"),10);


let total ='';
//using if else statements to give an expression if the operator is true

if(operator=== '*')
    total= firstNum * secondNum;

else if(operator=== "+")
    total = firstNum + secondNum;

else if(operator=== "-")
    total = firstNum - secondNum;

else if(operator=== "/")
    total = firstNum / secondNum;
    
alert('Result  of '+firstNum +operator+ secondNum+'='+ total)