
function Add(){
    let Num1 = document.getElementById('FirstNum').value;
    let Num2 = document.getElementById('SecondNum').value;
    let Ans = parseInt(Num1) + parseInt(Num2)
    document.getElementById('Output').innerHTML = "The sum of "+Num1+" and "+Num2+" is "+Ans

}
function Subtract(){
    let Num1 = document.getElementById('FirstNum').value;
    let Num2 = document.getElementById('SecondNum').value;
    let Ans = Num1 - Num2
    document.getElementById('Output').innerHTML = "The difference of "+Num1+" and "+Num2+" is "+Ans
}
function Multiply(){
    let Num1 = document.getElementById('FirstNum').value;
    let Num2 = document.getElementById('SecondNum').value;
    let Ans = Num1 * Num2
    document.getElementById('Output').innerHTML = "The product of "+Num1+" and "+Num2+" is "+Ans
}
function Divide(){
    let Num1 = document.getElementById('FirstNum').value;
    let Num2 = document.getElementById('SecondNum').value;
    let Ans = Num1 / Num2
    document.getElementById('Output').innerHTML = "The quotient of "+Num1+" and "+Num2+" is "+Ans
}
function Modulo(){
    let Num1 = document.getElementById('FirstNum').value;
    let Num2 = document.getElementById('SecondNum').value;
    let Ans = Num1 % Num2
    document.getElementById('Output').innerHTML = "The modulus of "+Num1+" and "+Num2+" is "+Ans
}
