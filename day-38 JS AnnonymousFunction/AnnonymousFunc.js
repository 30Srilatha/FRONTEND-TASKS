// <-----------------Annonymous function------------------->


// <=============== (1)without input and without return===============>

// 1)Print prime digits in a number.

let prime=function(){
let n=163526
while(n>0){
 a=n%10
let count=0
 for(let i=1;i<=a;i++){
        if(a%i==0){
            count++
        }
    }
    if(count==2){
    console.log(a)
    }
    n=parseInt(n/10)
    
}
}
prime()


// 2)Find the product of all digits except zero.

let product=function(){
let n=8200102
let product=1
while(n>0){
    a=n%10
    if(a==0){
        n=parseInt(n/10)
        continue 
    }
    product=product*a
    n=parseInt(n/10)
}
console.log(product)
}
product()


// 3)Count how many even and odd digits are present in a number.

let n=643758921
let even_count=0
let odd_count=0
while(n>0){
    a=n%10
    if(a%2==0){
        even_count++
    }else{
        odd_count++
    }
    n=parseInt(n/10)
}
console.log("even_count",even_count)
console.log("odd_count",odd_count)


// 4)Count how many numbers between 1 and N are divisible by 3.

let div=function(){
let n=10
let count=0
for(let i=1;i<=n;i++){
    if(i%3==0){
        count++
    }
}
console.log(count)
}
div()

// 5)Reverse the digits of a given number.

let reverse=function(){
let n=3451
let rev=0
while(n>0){
    a=n%10
    rev=rev*10+a
    n=parseInt(n/10)
}
console.log(rev)
}
reverse()


// <==================== (2)with input and without return =================>

// 1)Check whether a given year is a leap year.

let leap=function(year){
if(year%400==0){
    console.log("leap year")
}else if(year%4==0 && year%100!=0){
    console.log("leap year")
}else{
    console.log("not leap year")
}
}
leap(1900)


// 2)Find the sum of all even numbers between 1 and N.

let even_sum=function(a,b){
let sum=0
for(let i=a;i<=b;i++){
    if(i%2==0){
        sum=sum+i
    }
}
console.log(sum)
}
even_sum(1,6)

// 3)Find the first digit and last digit of a number and calculate their sum

let sum=function(n){
let temp=n
let rev=0
while(n>0){
    rev=rev*10+(n%10)
    n=parseInt(n/10)
}
first=rev%10
last=temp%10
console.log(first ,"+",last ,"=",first+last)
}
sum(5387257)


// 4)find maximum number in range 1 to n that is divisible by 7

let max=function(a,b){
let max=0
for(let i=a;i<=b;i++){
    if(i%7==0){
        if(i>max){
            max=i
        }
    }
}
console.log(max)
}
max(50,100)


// 5)product of digits in a number

let product=function(n){
    product=1
    while(n>0){
        product=product*(n%10)
        n=parseInt(n/10)
    }
    console.log(product)
}
product(123)


// <================ (3)without input and with return ==================>

// 1)check given number is even or odd

let result=function(){
    let n=56
    if(n%2==0){
        return "even"
    }else{
        return "odd"
    }
}
console.log(result())


// 2)count the digits in a number which are divisible by 3

let digit=function(){
    let n=3126397936
    let count=0
    while(n>0){
        a=n%10
        if(a%3==0){
            count++
        }
        n=parseInt(n/10)
    }
    return count
}
console.log(digit())

// 3)print factors of a given number

let factors = function(){
    let n=68
    let res=""
    for(let i=1;i<=n;i++){
        if(n%i==0){
            res=res+i+" "
        }
    }
    return res
}
console.log(factors())


// 4)print average of digits in a number

let avg=function(){
    let n=35622
    let count=0
    let sum=0
    while(n>0){
        count++
        sum=sum+(n%10)
        n=parseInt(n/10)
    }
    return (sum/count)

}
console.log(avg())

// 5)find largest of three numbers

let large=function(){
    let a=34
    let b=77
    let c=20
    if(a>b && a>c){
        return "a is greater"
    }else if(b>a && b>c){
        return "b is greater"
    }else{
        return "c is greater"
    }
}
console.log(large())


//<============== (4)with input and with return===============>

// 1)find first 10 odd numbers between 50 to 100

let odd=function(a,b){
    let count=0
    let res=""
    for(let i=a;i<=b;i++){
        if(i%2!=0){
            count++
            res=res+i+" "
            if(count==10){
                break
            }
        }
    }
    return res
}
console.log(odd(50,100))


// 2)product of odd digits in the range of 1 to n

let product=function(a,b){
    let mul=1
    for(let i=a;i<=b;i++){
        if(i%2!=0){
            mul=mul*i
        }
    }
    return mul
}
console.log(product(10,15))

// 3)check given number is palindrome or not

let palindrome=function(n){
    let temp=n
    let rev=0
    while(n>0){
        rev=rev*10+(n%10)
        n=parseInt(n/10)
    }
    if(temp==rev){
        return temp+" is palindrome"
    }else{
        return temp+" is not palindrome"
    }
}
console.log(palindrome(1231))


// 4)pirnt first and last digit of a given number

let digit=function(n){
    let temp=n
    let rev=0
    while(n>0){
        rev=rev*10+(n%10)
        n=parseInt(n/10)
    }
    a=rev%10
    b=temp%10
    return (a+","+b)
}
console.log(digit(2356))

// 5)skip the numbers that are divisible by 2,5,6 in given range 

let result=function(a,b){
    let res=""
    for(let i=a;i<=b;i++){
        if(i%2==0 || i%5==0 || i%6==0 ){
            continue
        }
        res=res+i+" "
    }
    return res
}
console.log(result(10,20))