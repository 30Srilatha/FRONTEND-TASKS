// <--------------while loop------------>


//1. Find the sum of digits in a given number.
// Example: 738 → 7 + 3 + 8 = 18

let n=738
let sum=0
while(n>0){
    sum=sum+(n%10)
    n=parseInt(n/10)
}
console.log("sum of digits =",sum)


// 2.Find the average of digits in a given number.
// Example: 624 → (6 + 2 + 4) / 3 = 4

let n=624
let sum=0
let count=0
while(n>0){
    count++
    sum=sum+(n%10)
    n=parseInt(n/10)
}
console.log("average of digits in given number =",sum/count)


// 3.Find the sum of the first digit and the last digit of a given number.
// Example: 936 → 9 + 6 = 15

let n=936
let temp=n
let y=0
while(n>0){
    y=y*10+(n%10)
    n=parseInt(n/10)
}
first=y%10
last=temp%10
console.log("sum of first and last digit  =",first+last)


// 4.Find the average of digits that are divisible by 5 in a given number.
// Example: 125755 → Divisible by 5 digits: 5, 5, 5 → Average = (5 + 5 + 5) / 3 = 5

let n=125755
let sum=0
let count=0
while(n>0){
    a=n%10
    if(a%5==0){
        count++
        sum=sum+a
    }
    n=parseInt(n/10)
}
console.log("average of digits divisible by 5 =",sum/count)


// 5.Find the difference between the largest digit and the smallest digit in a given number.
// Example: 58321 → Largest = 8, Smallest = 1 → Difference = 8 - 1 = 7

let n=58321
let max=0
let min=9
while(n>0){
    if(n%10>max){
        max=n%10
    }
    if(n%10<min){
        min=n%10
    }
    n=parseInt(n/10)
}
console.log(max,"-",min ,"=",max-min)