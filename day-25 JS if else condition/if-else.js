// <---------if-else--------->

// 1.Check whether a given number is a 3-digit number or not.
let n=2342
if(n>=100 && n<=999){
    console.log("given number is 3-digit number")
}else{
    console.log("given number is not 3-digit number")
}

// 2.Check whether a given number is divisible by both 3 and 5 or not.

let n=30
if(n%3==0 && n%5==0){
    console.log(n,"is divisible by both 3 and 5")
}else{
    console.log(n,"is not divisible by both 3 and 5")
}


// 3.Check whether a given triangle is a valid triangle or not.

let s1=11
let s2=5
let s3=31
if(s1+s2>s3 && s2+s3>s1 && s3+s1>s2){
    console.log("given sides can form a triangle")
}else{
    console.log("given sides cannot form a triangle")
}


// 4.Check whether a given number is a multiple of 10 or not.

let n=30
if(n%10==0){
    console.log(n,"is multiple of 10")
}else{
    console.log(n,"is not multiple of 10")
}
