function vowel(){
    let ch=document.getElementById("ch").value
    if(ch=="A" || ch=="E" || ch=="I" || ch=="O" || ch=="U"){
    result="vowel"
}
else{
    result="not vowel"
}
document.getElementById("vowel").value=result
}


// between 1 and 10

function num(){
    let n1=parseInt(document.getElementById("n1").value)
     if(n1>=1 && n1<=10){
    result="YES"
    
}
else{
    result="NO"

}
document.getElementById("number").value=result
}


// uppercase or not
function upper(){
    let ch=document.getElementById("n2").value
    if(ch>="A" && ch<="Z"){
    result=ch + " is uppercase"
    
}else{
    result=ch + " is not uppercase"
}
document.getElementById("upper").value=result
}

// alphabet or not
function alpha(){
    let ch=document.getElementById("n3").value
    if((ch>="A" && ch<="Z") || (ch>="a" && ch<="z") ){
   result=ch + " is alphabet"
    
}else{
   
   result=ch + " is not alphabet"
    
}
document.getElementById("alpha").value=result
}

// digit or not
function digit(){
    let n=parseInt(document.getElementById("n4").value)
     if(n>=0 && n<=9){
    result=n+" is digit"
}
else{
        result=n+" is not digit"
}
document.getElementById("digit").value=result
}

// login form
function login(){
    let name=document.getElementById("n5").value
    let password=document.getElementById("n6").value
    if(name=="Hero" && password=="Hero@123"){
    result="Login successfully...!"
    
}else{
       result="Invalid credentials"
}
document.getElementById("login").value=result
}


let a1=30
let a2=60
let a3=10
sum=a1+a2+a3
if(sum==180){
    console.log("trianlge")
}else{
    console.log("not")
}
