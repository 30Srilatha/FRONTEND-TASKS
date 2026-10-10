// <----------------NESTED LOOPS------------------>

//1) Sum of Prime Numbers 20 to 150

sum=0
for(let j=20;j<=150;j++){
n=j
count=0
for(let i=1;i<=n;i++){
    if(n%i==0){
        count+=1
    }
}
if(count==2){
    sum+=j
}
}
console.log(sum);


//2) Average of Perfect Numbers 1 to 1000

add=0
count=0
for(let j=1;j<=1000;j++){
let n=j
let sum2=1
for(let i=1;i<n;i++){
    if(n%i==0){
        sum2=sum2+i
    }
}
if(sum2==n){
    add=add+j
    count=count+1
}
}
console.log(parseInt(add/count))


//3) Leap Years in a Range between 1900 and 2026

for(let i=1900;i<=2026;i++){
n=i
if((n%4==0 && n%100!=0)|| n%400==0){
    console.log(n);
    
}
}


// 4)Palindrome Numbers
// Print all palindrome numbers between 100 and 500.

for(let i=100;i<=500;i++){
let n=i
let temp=n
let rev=0
while(n>0){
    rev=rev*10+(n%10)
    n=parseInt(n/10)
}
if(rev==temp){
    console.log(i)
}
}


// 5)Digit Sum = 10
// Print all numbers between 120 and 850 whose digit sum is exactly 10.

for(let i=120;i<=850;i++){
let n=i
let temp=n
let sum=0
while(n>0){
    sum=sum+(n%10)
    n=parseInt(n/10)
}
if(sum==10){
    console.log(i)
}
}


//6) Pairs with Target Sum
// Print all pairs (a, b) between 1 and 50 whose sum is 30. Print each pair only once.

for(let j=1;j<=50;j++){
    for(let i=j+1;i<=50;i++){
        if(j+i==30){
            console.log("(",j,i,")");         
        }
    }
}

//7) Exactly 3 Factors
// Print all numbers between 10 and 300 that have exactly 3 factors.

for(let j=10;j<=30;j++){
    n=j
    count=0
    for(let i=1;i<=n;i++){
        if(n%i==0){
            count=count+1
        }
    }
    if(count==3){
    console.log(j);   
   }
}


// 8)prime factors
// Print the prime factors of every number between 20 and 50.

for(let n=20;n<=50;n++){
res=""
for(let i=1;i<=n;i++){
    if(n%i==0){
        count=0
        for(let j=1;j<=i;j++){
            if(i%j==0){
                count++
            }
        }
        if(count==2){
            res=res+i+" "

        }
        
    }
}
console.log(n,":",res)
}


//9) Armstrong Numbers
// Print all Armstrong numbers between 100 and 999.

for(let j=100;j<=999;j++){
n=j
temp=n
temp1=n
count=0
sum=0
while(n>0){
    a=n%10
    n=parseInt(n/10)
    count=count+1  
}
while(temp>0){
    sum=sum+((temp%10)**count)
    temp=parseInt(temp/10)
}

if(temp1==sum){
    console.log(temp1); 
}
}


// 10)Maximum Factors
// Find the number between 50 and 150 that has the maximum number of factors.

let max_Count=0
let num=""
for(let i=50;i<=150;i++){
    let n=i
    let count=0
    for(let j=1;j<=n;j++){
        if(n%j==0){
            count++
        }
    }
    if(count>max_Count){
        max_Count=count
        num=n
    }
}
console.log(num,"has maximum no.of factors =",max_Count)



