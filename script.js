function add(){
let a = document.getElementById("num1").value;
let b = document.getElementById("num2").value;
 let c = parseInt(a)+parseInt(b);
  document.getElementById("r").value=c;
}

function sub(){
let a = document.getElementById("num1").value;
let b = document.getElementById("num2").value;
 let d = parseInt(a)-parseInt(b);
  document.getElementById("r").value=d;
}
function multiply(){
let a = document.getElementById("num1").value;
let b = document.getElementById("num2").value;
 let e = a*b;
  document.getElementById("r").value=e;
}
function divide(){
let a = document.getElementById("num1").value;
let b = document.getElementById("num2").value;
 let f = parseInt(a)/parseInt(b);
  document.getElementById("r").value=f;
}
function mod(){
let a = document.getElementById("num1").value;
let b = document.getElementById("num2").value;
 let h = parseInt(a) % parseInt(b);
  document.getElementById("r").value=h;
}
