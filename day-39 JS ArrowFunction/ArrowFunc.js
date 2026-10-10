// <-------------------- Arrow function ------------------------>

//<============ (1)without input and without return ================>

// 1)check given number is positive or negative or zero

let number=()=>{
    let n=-358
    if(n>0){
        console.log("positive")
    }else if(n<0){
        console.log("negative")
    }else{
        console.log("zero")
    }
}
number()

// 2)print sum of squares of digits in a number

let square=()=>{
    let n=123
    let sum=0
    while(n>0){
        sum=sum+(n%10)**2
        n=parseInt(n/10)
    }
    console.log(sum)
}
square()


// 3)print numbers that are divisible by both 2 and 3 in the range of 10 to 50

let div=()=>{
    for(let i=10;i<=50;i++){
        if(i%2==0 && i%3==0){
            console.log(i)
        }
    }
}
div()

// 4)check given number is perfect number or not

let prefect=()=>{
    let n=6
    let sum=0
    for(let i=1;i<n;i++){
        if(n%i==0){
            sum=sum+i
        }
    }
    if(sum==n){
        console.log("perfect number")
    }else{
        console.log("not a perfect number")
    }
}
prefect()


// 5)check given three sides can form a triangle or not

let triangle=()=>{
    let s1=10
    let s2=10
    let s3=20
    if(s1+s2>s3 && s2+s3>s1 && s1+s3>s2){
        console.log("valid triangle")
    }else{
        console.log("Invalid triangle")
    }
}
triangle()


// <=============== (2)with input and without return ==============>

// 1)count number of digits in a number

let number=(n)=>{
    let count=0
    while(n>0){
        count++
        n=parseInt(n/10)
    }
    console.log(count)
}
number(63247)

// 2)find smallest digit in a number

let min=(n)=>{
    let min=9
    while(n>0){
        if(n%10<min){
            min=n%10
        }
        n=parseInt(n/10)
    }
    console.log(min)
}
min(64386)

// 3)product of even digits

let product=(n)=>{
    let product=1
    while(n>0){
        a=n%10
        if(a%2==0){
            product=product*a
        }
        n=parseInt(n/10)
    }
    console.log(product)
}
product(364712)

// 4)multipy first and last digit of a number

let multi=(n)=>{
    let temp=n
    let rev=0
    while(n>0){
        rev=rev*10+(n%10)
        n=parseInt(n/10)
    }
    a=rev%10
    b=temp%10
    console.log(a*b)
}
multi(463885)

// 5)check given number is armstrong or not
let armstrong=(n)=>{
let temp=n
let temp2=n
let count=0
let sum=0
while(n>0){
    count++
    n=parseInt(n/10)
}
while(temp>0){
    sum=sum+(temp%10)**count
    temp=parseInt(temp/10)
}
if(temp2==sum){
    console.log(temp2,"is armstrong")
}
}
armstrong(153)



// <=============== (3)without input and with return ================>

// 1)count of odd digits

let odd=()=>{
    let n=437351
    let count=0
    while(n>0){
        a=n%10
        if(a%2!=0){
            count++
        }
        n=parseInt(n/10)
    }
    return count
}
console.log(odd())


// 2)count of zeros in a given number

let zero=()=>{
    let n=402500200
    let count=0
    while(n>0){
        a=n%10
        if(a==0){
            count++
        }
        n=parseInt(n/10)
    }
    return count
}
console.log(zero())

// 3)skip prime numbers in range 1 to 20

let skip_prime=()=>{
    let res=0
    for(let i=1;i<=20;i++){
        let n=i
        let count=0
        for(let j=1;j<=n;j++){
            if(n%j==0){
                count++
            }
        }
        if(count==2){
            continue
        }
        res=res+n+" "
    }
    return res
}
console.log(skip_prime())


// 4)difference between sum of even and sum of odd digits

let sum=()=>{
    let n=3516127
    let even_sum=0
    let odd_sum=0
    while(n>0){
        a=n%10
        if(a%2==0){
            even_sum=even_sum+a
        }else{
            odd_sum=odd_sum+a
        }
        n=parseInt(n/10)
    }
    return (even_sum-odd_sum)
}
console.log(sum())

// 5)Find the largest and smallest digit and calculate their difference.
 let diff=()=>{
    let n=4537568
    let min=9
    let max=0
    while(n>0){
        if(n%10>max){
            max=n%10
        }
        if(n%10<min){
          min=n%10
        }
        n=parseInt(n/10)
    }
    return (min-max)

 }
 console.log(diff())


// <============= (4)with input and with return ================>

// 1)find factors of given number

let fact=(n)=>{
    let res=""
    for(let i=1;i<=n;i++){
        if(n%i==0){
            res=res+i+" "
        }
    }
    return res
}
console.log(fact(6))

// 2)skip even numbers in the given range

let numbers=(a,b)=>{
    let res=""
    for(let i=a;i<=b;i++){
        if(i%2==0){
            continue
        }
        res=res+i+" "
    }
    return res
}
console.log(numbers(10,30))

// 3) check given number is strong or not

let strong=(n)=>{
    let temp=n
    let sum=0
    while(n>0){
        a=n%10
        let fact=1
        for(let i=1;i<=a;i++){
            fact=fact*i
        }
        sum=sum+fact
        n=parseInt(n/10)
    }
    if(temp==sum){
        return temp+" is strong number"
    }else{
        return temp+" is not a strong number"
    }
}
console.log(strong(145))


// 4)find prime number between the given range

let prime=(a,b)=>{
    let res=""
    for(let i=a;i<=b;i++){
        let n=i
        let count=0
        
        for(let j=1;j<=n;j++){
            if(n%j==0){
                count++
            }
        }
        if(count==2){
            res=res+n+" "
        }
    }
    return res
}
console.log(prime(50,100))


// 5)check given number is palindrome or not

let palindrome=(n)=>{
    let temp=n
    let rev=0
    while(n>0){
        rev=rev*10+(n%10)
        n=parseInt(n/10)
    }
    if(temp==rev){
        return ("palindrome")
    }
}
console.log(palindrome(32423))