function add(){
let n1=parseInt(document.getElementById("n1").value);
let n2=parseInt(document.getElementById("n2").value);
let sum=n1+n2;
document.getElementById("sum").value=sum;

}

// average
function avg(){
let n1=parseInt(document.getElementById("a").value);
let n2=parseInt(document.getElementById("b").value);
let n3=parseInt(document.getElementById("c").value);
let sum=n1+n2+n3
let avg=sum/3
document.getElementById("avg").value=avg;
}

// sum of natural numbers
function natural(){
let n=parseInt(document.getElementById("n").value);
let sum=n*(n+1)/2;
document.getElementById("natural").value=sum;
}

// average of natural numbers
function avgnatural(){
let n=parseInt(document.getElementById("num").value)
let sum=n*(n+1)/2
let avg=sum/n
document.getElementById("avgnatural").value=avg;
}

// missing angle
function angle(){
let a1=parseInt(document.getElementById("a1").value)
let a2=parseInt(document.getElementById("a2").value)
let sum=a1+a2
let a3=180-sum
document.getElementById("angle3").value=a3;

}

// profit

function profit(){
let sp=parseInt(document.getElementById("sp").value)
let cp=parseInt(document.getElementById("cp").value)
let profit=((sp-cp)/cp)*100
document.getElementById("profit").value=profit;

}
function simple(){
let p=parseInt(document.getElementById("p").value)
let t=parseInt(document.getElementById("t").value)
let r=parseInt(document.getElementById("r").value)
let si=(p*t*r)/100
document.getElementById("SI").value=si

}
