// <========= programs using break =========>

// 1)first even digit from left
let  n=753914286
while(n>0){
    let a=n%10
    if(a%2==0){
        console.log(a)
        break
    }
    n=parseInt(n/10)
}

// 2)first prime number between 50 and 100

for(let i=50;i<=100;i++){
    let count=0
    let n=i
    for(let j=1;j<=n;j++){
        if(n%j==0){
            count++
        }

    }
    if(count==2){
        console.log(n,"is the first prime between 50 and 100")
        break
        }
}

// 3)first number whose digit sum is 10
let i=10
while(i>0){
let n=i
let temp=n
let sum=0
while(n>0){
    sum=sum+n%10
    n=parseInt(n/10)
}
if(sum==10){
    console.log(temp)
    break
}
i++
}

// 4)first number with exactly 3divisors between 1 and 100
for(let j=1;j<=100;j++){
let n=j
let count=0
for(let i=1;i<=n;i++){
    if(n%i==0){
        count++
    }
}
if(count==3){
    console.log(n,"have only 3divisors")
    break
}
}


// 5)Find the first palindrome between 10 and 500.

for(let i=10;i<=500;i++){
let n=i
let temp=n
let num=0
while(n>0){
    num=num*10+(n%10)
    n=parseInt(n/10)
}

if(temp==num){
    console.log(temp)
    break
}
}


// 6)stop when 3 consecutive odd numbers occur between 1 ans 50
let count=0
for(let i=1;i<=50;i++){
    if(i%2!=0){
        console.log(i)
        count++
        if(count==3){
            break
        }

    }
}

// 7)first perfect number between 1 and 1000
for(let j=1;j<=1000;j++){
let n=j
let sum=0
for(let i=1;i<6;i++){
    if(n%i==0){
        sum=sum+i
    }
}
if(sum==n){
    console.log(n,"is perfect number")
    break
}
}

// 8)first 5 even numbers

let i=1
let count=0
while(i>0){
    if(i%2==0){
        count++
        console.log(i)
    }
    if(count==5){
        break
    }
    i++
}

// 9)first 5 prime numbers

let n=1
let c=0
while(n>0){
let count=0
    for(let i=1;i<=n;i++){
        if(n%i==0){
            count++
        }
    }
    if(count==2){
        console.log(n)
        c++
        if(c==5){
            break
        }
    }
    n++
}

//10) first 3numbers divisible by 7

let n=1
let count=0
while(n>0){
    if(n%7==0){
        count++
        console.log(n)
        if(count==3){
            break
        }
    }
    n++
}

// <================ programs using continue ===============>

// 1)print 1-30 skip even numbers
for(let i=1;i<=30;i++){
    if(i%2==0){
        continue
    }
    console.log(i)
}

// 2)print 1-40 skip multiples of 4

for(let i=1;i<=40;i++){
    if(i%4==0){
        continue
    }
    console.log(i)
}

// 3)print 1-30 skip numbers from 10-20

for(let i=1;i<=30;i++){
    if(i>=10 && i<=20){
        continue
    }
    console.log(i)

}

// 4)print 1-50 skip multiples of 3

for(let i=1;i<=50;i++){
    if(i%3==0){
        continue
    }
    console.log(i)
}

// 5)extract 502304 skipping 0

let n=502304
while(n>0){
    if(n%10==0){
        n=parseInt(n/10)
        continue
    }
    console.log(n%10)
    n=parseInt(n/10)
}

// 6)extract 5832461 print only even digits
let n=5832461
while(n>0){
    a=n%10
    if(a%2!=0){
        n=parseInt(n/10)
        continue
    }
    console.log(a)
    n=parseInt(n/10)
}

// 7)extract 1432578 skip odd digits

let n=1432578
while(n>0){
    a=n%10
    if(a%2!=0){
        n=parseInt(n/10)
        continue
    }
    console.log(a)
    n=parseInt(n/10)
}

// 8)print 1-200 skip mupltiples of 3 or 5

for(let i=1;i<=100;i++){
    if(i%3==0 || i%5==0){
        continue
    }
    console.log(i)
}

// 9)print 1-500 skip numbers with odd digit sum

for (let i = 1; i <= 500; i++) {
  let n = i;
  let temp = n;
  let sum = 0;
  while (n > 0) {
    sum = sum + (n % 10);
    n = parseInt(n / 10);
  }
  if (sum % 2 != 0) {
    continue;
  } else {
    console.log(temp);
  }
}

// 10)print 1-500 skip numbers containing digit 0

for(let i=1;i<=500;i++){
let n=i
let temp=n
let count=0
while(n>0){
    let a=n%10
    if(a==0){
        count++
    }
    n=parseInt(n/10)
}
if(count>0){
    continue
}else{
    console.log(temp)
}
}


// <============= programs on break and continue ==============>

// 1)Print 1–50, skip multiples of 3, stop at 40

for(let i=1;i<=50;i++){
    if(i%3==0){
        continue
    }else if(i==40){
        break

    }else{
        console.log(i)
    }
}


// 2)Print odd numbers, skip evens, stop at the first multiple of 7
let n=1
while(n>=1){
    if(n%2==0){
        n++
        continue
    }else if(n%7==0){
        break
    }
    else{
        console.log(n)
    }
    n++
}


// 3)Extract 5830421, skip odd digits, stop at 0
let n=5830421
while(n>0){
    a=n%10
    if(a%2!=0){
        n=parseInt(n/10)
        continue
    }else if(a==0){
        break
    }
    else{
        console.log(a)
    }

    n=parseInt(n/10)
}

// 4)Extract 8325147, print digits until 5

let n=8325147
while(n>0){
    if(n%10==5){
        break
    }else{
        console.log(n%10)
    }
    n=parseInt(n/10)
}

// 5)Search from 51, skip non-multiples of 9, stop at the first multiple of 9

let n=51
while(n>=51){
    if(n%9!=0){
        n++
        continue
    }
    else{
        console.log(n)
    }
    if(n%9==0){
        break
    }
    n++
}