// <---------------------Named functions-------------------------->

// <============ (1)without input and without return =============>

// 1)check whether given number is positive ,negative or zero

function number(){
let n=-45
if(n>0){
    console.log("positive number")
}else if(n<0){
    console.log("negative number")
}else{
    console.log("Zero")
}
}
number()


// 2)count of digits in a number 9875624
function count_digit(){
let n=9875624
let count=0
while(n>0){
    count++
    n=parseInt(n/10)
}
console.log(count)
}
count_digit()


// 3)find even digits in a given number 8574263
function even_digit(){
let n=8574263
while(n>0){
    a=n%10
    if(a%2==0){
        console.log(a)
    }
    n=parseInt(n/10)
}
}
even_digit()

// 4)product of digits in given number 342
function product(){
let n=342
let mul=1
while(n>0){
    mul=mul*(n%10)
    n=parseInt(n/10)
}
console.log(mul)
}
product()


// 5)sum of odd digits in given number 8524163

function odd_sum(){
let n=8524163
let sum=0
while(n>0){
    a=n%10
    if(a%2!=0){
        sum=sum+a
    }
    n=parseInt(n/10)
}
console.log(sum)
}
odd_sum()


// 6)find number of zeros in given number 7080605100

function zero(){
let n=7080605100
let count=0
while(n>0){
    if(n%10==0){
        count++
    }
    n=parseInt(n/10)
}
console.log(count)
}
zero()

// 7)print reverse of a number
function reverse(){
let n=123
let rev=0
while(n>0){
    a=n%10
    rev=rev*10+a
    n=parseInt(n/10)
}
console.log(rev)
}
reverse()


// 8)skip multiples of 6 in range of 1 to 50

function multi(){
for(let i=1;i<=50;i++){
    if(i%6==0){
        continue
    }else{
        console.log(i)
    }
}
}
multi()


// 9)average of numbers from 1 to N

function avg(){
let n=4
let count=0
let sum=0
for(i=1;i<=n;i++){
    count++
    sum=sum+i
}
console.log(sum/count)
}
avg()


// 10)find first 10 numbers which has 4factors between 50 to 100

function factors(){
    let c=0
for(let i=50;i<=100;i++){
    let n=i
    let count=0
    for(let j=1;j<=n;j++){
        if(n%j==0){
            count++
        }
    }
    if(count==4){
        c++
        console.log(n)
        if(c==10){
            break
        }
    }
}
}
factors()

// 11)find difference between largest digit and smallest digit in given number 6732498
function diff(){
let n=6732498
let temp=n
let max=0
let min=9
while(n>0){
    if(n%10>max){
        max=n%10
    }
    n=parseInt(n/10)
}
while(temp>0){
    if(temp%10<min){
        min=temp%10
    }
    temp=parseInt(temp/10)
}
console.log(max, "-" ,min, "=",max-min)
}
diff()


// 12)skip prime numbers in the range of 20 to 50

function prime(){
for(let i=20;i<=50;i++){
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
    console.log(n)
}
}
prime()

// 13)print first armstrong after 100

function armstrong(){
let i=100
while(i>=100){
let n=i
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
    console.log(temp2)
    break
}
i++
}
}
armstrong()



// 14)print first 3 perfect numbers

function perfect(){
let i=1
let count=0
while(i>0){
let n=i
let sum=0
for (let i=1;i<n;i++){
    if(n%i==0){
        sum=sum+i
    }
}
if(sum==n){
    count++
    console.log(n)
    if(count==3){
    break
    }
    
}
i++
}
}
perfect()


// 15)print all palindrome numbers between 100 to 200

function palindrome(){
for(let i=100;i<=200;i++){
    let n=i
    let temp=n
    let sum=0
    while(n>0){
        a=n%10
        sum=sum*10+a
        n=parseInt(n/10)
    }
    if(temp==sum){
        console.log(temp)
    }
}
}
palindrome()



// <=========== (2)with input and without return ===========>

//1) Find the sum of all digits in a given number.

function number(n){
let sum=0
while(n>0){
    sum=sum+n%10
    n=parseInt(n/10)
}
console.log(sum)
}
number(852)


// 2)Find the largest digit in a given number.

function max(n){
let max=0
while(n>0){
    if(n%10>max){
        max=n%10
    }
    n=parseInt(n/10)
}
console.log(max)
}
max(85462)


// 3)find count even digits in a given number 8574263

function even_digit(n){
    let count=0
while(n>0){
    a=n%10
    if(a%2==0){
        count++
    }
    n=parseInt(n/10)
}
console.log(count)
}
even_digit(8574263)

// 4)Find the product of even digits in a given number.

function product(n){
let mul=1
while(n>0){
    a=n%10
    if(a%2==0){
    mul=mul*a
    }
    n=parseInt(n/10)
}
console.log(mul)
}
product(342)


// 5)sum of odd digits in given number 8524163
function odd_sum(n){
let sum=0
while(n>0){
    a=n%10
    if(a%2!=0){
        sum=sum+a
    }
    n=parseInt(n/10)
}
console.log(sum)
}
odd_sum(8524163)


// 6)Find the last digit of a given number.

function last(n){
while(n>0){
    console.log(n%10)
    break
}
}
last(70806)


// 7)Find the difference between the sum of even digits and the sum of odd digits in a number.

function diff(n){
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
console.log(even_sum-odd_sum)
}
diff(85472)


// 8)Count how many digits in a number are greater than 5.

function digit(n){
let count=0
while(n>0){
    if(n%10>5){
        count++
    }
    n=parseInt(n/10)
}
console.log(count)
}
digit(436758)


// 9)Find the largest even digit in a given number.

function max_even(n){
let max=0
while(n>0){
    a=n%10
    if(a%2==0){
        if(a>max){
            max=a
        }
    }
    n=parseInt(n/10)
}
console.log(max)
}
max_even(754829)



// 10)Find the sum of the first and last digits of a given number.

function sum(n){
let last=n%10
let num=0
while(n>0){
    num=num*10+(n%10)
    n=parseInt(n/10)
}
let first=num%10
console.log(first,"+",last,"=",first+last)
}
sum(2897)


// 11)Print all numbers between 1 and 100 that are divisible by 3 but not by 5.

function num(a,b){
for(let i=a;i<=b;i++){
    if(i%3==0 && i%5!=0){
        console.log(i)
    }
    
}
}
num(1,100)



// 12)skip prime numbers in the range of 20 to 50

function prime(a,b){
for(let i=a;i<=b;i++){
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
    console.log(n)
}
}
prime(20,50)


// 13)Print numbers from 1 to 50, skipping even numbers.

function even(a,b){
    for(let i=a;i<=b;i++){
        if(i%2==0){
            continue
        }
        console.log(i)
    }
}
even(1,50)


// 14)print first 10 prime numbers between 100 to 200
function prime_num(a,b){
let c=0
for(i=a;i<=b;i++){
    let n=i
    let count=0
    for(j=1;j<=n;j++){
        if(n%j==0){
            count++
        }
    }
    if(count==2){
        c++
        console.log(n)
        if(c==10){
            break
        }
    }

}
}
prime_num(100,200)

// 15)Check whether a number is a strong number.

function strong(n){
let temp=n
let sum=0
while(n>0){
    a=n%10
    res=1
    for(let i=1;i<=a;i++){
        res=res*i
    }
    n=parseInt(n/10)
    sum=sum+res
}
if(temp==sum){
    console.log("strong number")
}
}
strong(145)


// <=============== (3)without input and with return ===============>

// 1)Find the smallest digit in a given number.
function min(){
let n=74556
let min=9
while(n>0){
    if(n%10<min){
        min=n%10
    }
    n=parseInt(n/10)
}
return (min)
}
console.log(min())

// 2)Find the product of odd digits in a given number.

function product(){
let n=63415
let mul=1
while(n>0){
    a=n%10
    if(a%2!=0){
    mul=mul*a
    }
    n=parseInt(n/10)
}
return mul
}
console.log(product())


// 3)Find the first digit of a given number.

function first(){
let n=751551
let num=0
while(n>0){
    num=num*10+(n%10)
    n=parseInt(n/10)
}
return num%10
}
console.log(first())


// 4)product of digits in given number 342
function product(){
let n=342
let mul=1
while(n>0){
    mul=mul*(n%10)
    n=parseInt(n/10)
}
return mul
}
console.log(product())


// 5)Count how many digits in a number are less than 5.
function number(){
let n=42135
let count=0
while(n>0){
    a=n%10
    if(a<5){
        count++
    }
    n=parseInt(n/10)
}
return count
}
console.log(number())


// 6)Find the smallest odd digit in a given number.

function odd_min(){
let n=745235
let min=9
while(n>0){
    a=n%10
    if(a%2!=0){
        if(a<min){
            min=a
        }
    }
    n=parseInt(n/10)
}
return (min)
}
console.log(odd_min())

// 7)Find the sum of all numbers between 1 and 100 that are divisible by 5.

function num(a,b){
    let sum=0
    for(let i=a;i<=b;i++){
        if(i%5==0){
            sum=sum+i
        }
    }
    return sum
}
console.log(num(1,100))


// 8)Find the number between 1 and 100 that has the maximum number of factors.

function maxFactors(){
let maxFactors=0
let num=0
for(let i=1;i<=100;i++){
    let n=i
    let count=0
    for(let j=1;j<=n;j++){
        if(n%j==0){
            count++
        }
    }
    if(count>maxFactors){
        maxFactors=count
        num=i
    }

}
return (num)
}
console.log(maxFactors())


// 9)sum of numbers from 1 to N

function sum(){
let n=4
let sum=0
for(i=1;i<=n;i++){
    sum=sum+i
}
return sum
}
console.log(sum())


// 10)find first 10 numbers which has 6factors between 100 to 200

function factors(){
    let c=0
    let res=""
for(let i=100;i<=200;i++){
    let n=i
    let count=0
    for(let j=1;j<=n;j++){
        if(n%j==0){
            count++
        }
    }
    if(count==6){
        c++
        res=res+n+" "
        if(c==10){
            break
        }
    }
}
return res
}
console.log(factors())


// 11)Print all composite numbers between 1 and 50.

function composite(){
    let res=""
for(let i=1;i<=50;i++){
    let n=i
    let count=0
    
    for(let j=1;j<=n;j++){
        if(n%j==0){
            count++
        }
    }
    if(count!=2){
        res=res+n+" "
    }
}
return res

}
console.log(composite())


// 12)Find the sum of all factors of a number excluding the number itself.

function sumFact(){
let n=6
let sum=0
for(let i=1;i<=n;i++){
    if(n%i==0){
        sum=sum+i
    }
}
return sum
}
console.log(sumFact())


// 13)print first armstrong after 100

function armstrong(){
let i=100
while(i>=100){
let n=i
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
    return (temp2)
    break
}
i++
}
}
console.log(armstrong())



// 14)Find the sum of the first 10 prime numbers

function prime(){
let count2=0
let res=""
let n=1
while(n>0){
    let count=0
    for(let j=1;j<=n;j++){
        if(n%j==0){
            count++
        }
    }
    if(count==2){
        count2++
        res=res+n+" "
        if(count2==10){
            break
        }
    }
    n++
}
return res
}
console.log(prime())


// 15)Check whether a number is a strong number.
function strong(){
let n=145
let temp=n
let sum=0
while(n>0){
let fact=1
a=n%10
for(let i=1;i<=a;i++){
    fact=fact*i
}
sum=sum+fact

n=parseInt(n/10)
}
if(temp==sum){
    return "strong number"
}
}
console.log(strong())



// <================ (4)with input and with return ===============>

// 1)Find the first digit of a given number.

function first(n){
let rev=0
while(n>0){
    rev=rev*10+(n%10)
    n=parseInt(n/10)
}
return (rev%10)
}
console.log(first(562863))

// 2)Check whether the first digit and last digit of a number are the same.
function last(n){
    let temp=n
    let rev=0
    while(n>0){
        rev=rev*10+(n%10)
        n=parseInt(n/10)
    }
    a=rev%10
    b=temp%10
    if(a==b){
        return "first and last digit are same"
    }
}
console.log(last(573415))


// 3)find odd digits in a given number 8574263

function odd_digit(n){
let res=""
while(n>0){
    a=n%10
    if(a%2!=0){
        res=res+a+" "
    }
    n=parseInt(n/10)
}
return res
}
console.log(odd_digit(8574263))


// 4)Find the smallest odd digit in a given number.

function minOdd(n){
    let min=9
    while(n>0){
        a=n%10
        if(a%2!=0){
            if(a<min){
                min=a
            }
        }
        n=parseInt(n/10)
    }
    return min
}
console.log(minOdd(564372))



// 5)product of odd digits in given number 8524163

function mult_sum(n){
let product=1
while(n>0){
    a=n%10
    if(a%2!=0){
        product=product*a
    }
    n=parseInt(n/10)
}
return product
}
console.log(mult_sum(8524163))


// 6)find number of one's in given number

function zero(n){
let count=0
while(n>0){
    if(n%10==1){
        count++
    }
    n=parseInt(n/10)
}
return count
}
console.log(zero(711210511))


// 7)print reverse of a number

function reverse(n){
let rev=0
while(n>0){
    a=n%10
    rev=rev*10+a
    n=parseInt(n/10)
}
return rev
}
console.log(reverse(123))


// 8)skip multiples of 2 and 3 in range of 1 to 50

function multi(n1,n2){
let res=""
for(let i=n1;i<=n2;i++){
    let n=i
    if(n%2==0 || n%3==0){
        continue
    }
    res=res+i+" "
    
} return res
}
console.log(multi(1,50))


// 9)average of numbers from 1 to N

function avg(n){
let count=0
let sum=0
for(i=1;i<=n;i++){
    count++
    sum=sum+i
}
return sum/count
}
console.log(avg(5))


// 10)Find the sum of the first 10 prime numbers after 50.

function primeSum(n){
let count2=0
let sum=0
while(n>0){
    let count=0
    for(i=1;i<=n;i++){
        if(n%i==0){
            count++
        }
    }
    if(count==2){
        count2++
        sum=sum+n
        if(count2==10){
            break
        }
    }
    n++
}
return sum
}
console.log(primeSum(50))


// 11)find product of largest digit and smallest digit in given number 6732498

function diff(n){
let temp=n
let max=0
let min=9
while(n>0){
    if(n%10>max){
        max=n%10
    }
    n=parseInt(n/10)
}
while(temp>0){
    if(temp%10<min){
        min=temp%10
    }
    temp=parseInt(temp/10)
}
return (max + " X " + min + " = " + (max*min))
}
console.log(diff(6732498))


// 12)Print all strong numbers between 1 and 1000.

function strong(a,b){
    let res=""
for(let j=a;j<=b;j++){
let n=j
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
if(sum==temp){
    res=res+temp+" "
}
}
return res
}
console.log(strong(1,1000))


// 13)print first armstrong after 100

function armstrong(i){
while(i>0){
let n=i
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
    return (temp2)
    break
}
i++
}
}
console.log(armstrong(200))


// 14)Find the first strong number after 100.

function strong(m){
while(m>0){
let n=m
let temp=m
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
if(sum==temp){
    return sum
}
m++
}
}
console.log(strong(100))

// 15)skip all palindrome numbers between  200 to 300

function palindrome(a,b){
    let res=""
for(let i=a;i<=b;i++){
    let n=i
    let temp=n
    let sum=0
    while(n>0){
        a=n%10
        sum=sum*10+a
        n=parseInt(n/10)
    }
    if(temp==sum){
       continue

    }
     res=res+temp+" "
}
return res
}
console.log(palindrome(100,150))
