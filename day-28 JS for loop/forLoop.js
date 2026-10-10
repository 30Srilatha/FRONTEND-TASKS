// <------------for loop-------------->

// 1.Find the average of numbers from 1 to N.
// Example: If N = 5, calculate the average of 1, 2, 3, 4, 5

let n=5
let sum1=0
for(let i=1;i<=n;i++){
    sum1=sum1+i
}
console.log("average = ",sum1/n)

// 2.Find the sum of squares of numbers from 1 to N.

let n1=3
let sum2=0
for(let i=1;i<=n;i++){
    sum2=sum2+(i**2)
}
console.log("sum of squares =",sum2)


// 3.Find the sum of cubes of numbers from 1 to N.

let n2=4
let sum3=0
for(let i=1;i<=n2;i++){
    sum3=sum3+(i**3)
}
console.log("sum of cubes of number =",sum3)


// 4.Calculate the power of a number without using the ** operator.    Example: If base = 2 and power = 5, calculate 2 × 2 × 2 × 2 × 2.

let num=2
let power=5
let mul=1
for(let i=1;i<=power;i++){
    mul=mul*num
}
console.log("power of number =",mul)


// 5.Display the first N terms of the Fibonacci series.

let n=5
let a=0
let b=1
for(let i=1;i<=n;i++){
    console.log(a)
    let c=a+b
    a=b
    b=c
}


// 6.Display the first N terms of the series:
// 1, 1/2, 1/3, 1/4, ..

let n=5
for(let i=1;i<=n;i++){
    console.log("1 /",i)
}


// 7.Display the first N terms of the series:
    // 1, 11, 111, 1111, 11111, ...

let n=4
let y=0
for(let i=1;i<=n;i++){
    y=y*10+1
    console.log(y)
}


// 8.Display the first N terms of the series:
    // 1, 3, 9, 27, 81, ...

let n=5
let mul=1
for(let i=1;i<=n;i++){
    console.log(mul)
    mul=mul*3
}


// 9.Print all numbers from 10 to 150 that are divisible by both 3 and 5.

for(let i=10;i<=150;i++){
    if(i%3==0 && i%5==0){
        console.log(i)
    }
}


// 10.Count how many numbers from 200 down to 50 are divisible by 7.

let count=0
for(let i=200;i>=50;i--){
    if(i%7==0){
        count++
    }
}
console.log(count)


// 11.Print numbers from 120 down to 20 that are not divisible by 5.

for(let i=120;i>=20;i--){
    if(i%5!=0){
        console.log(i)
    }
}


// 12.Find the average of all even numbers in the range from 10 to 100.

let sum=0
let count=0
for(let i=10;i<=100;i++){
    if(i%2==0){
        sum=sum+i
        count++
    }
}
console.log("average =",sum/count)



// 13.Find the average of all factors of a given number.

let n=45
let sum=0
let count=0
for(let i=1;i<=n;i++){
    if(n%i==0){
        sum=sum+i
        count++
    }
}
console.log("average of factors =",sum/count)