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


// <----------------if-elif-else-------------->

// 1.Check the type of triangle based on its sides.
// Equilateral, Isosceles, or Scalene

let s1=10
let s2=20
let s3=10
if(s1==s2==s3){
    console.log("given sides can form equilateral triangle")
}else if(s1==s2 || s2==s3 || s1==s3){
    console.log("given sides can form isosceles triangle")
}else{

    console.log("given sides can form scalane triangle")
}


// 2.Calculate the electricity bill based on units consumed.
// 0–100: ₹2/unit, 101–200: ₹3/unit, 201–300: ₹5/unit, above 300: ₹7/unit.

let units=3000
if(units>=0 && units<=100){
    bill=units*2
}else if(units>100 && units<=200){
    bill=units*3
}else if(units>200 && units<=300){
    bill=units*5
}else{
    bill=units*7
}
console.log(bill)


// 3.Display the age category.
// Below 13 → Child, 13–19 → Teenager, 20–59 → Adult, 60 and above → Senior Citizen.

let age=38
if(age>=0 && age<13){
    console.log("child")
}else if(age>=13 && age<20){
    console.log("teenager")
}else if(age>=20 && age<60){
    console.log("adult")
}else{
    console.log("senior citizen")
}


// 4.Calculate the discount based on shopping amount.
// Below ₹1,000 → No discount, ₹1,000–₹4,999 → 10%, ₹5,000–₹9,999 → 20%, ₹10,000 and above → 30%.

let amount=2000
if(amount>0 && amount<1000){
    console.log(amount,"No discount applied")
}else if(amount>=1000 && amount<5000){
    dis=amount*(10/100)
    console.log("total bill=",amount-dis)
}else if(amount>=5000 && amount<9999){
    dis=amount*(20/100)
    console.log("total bill =",amount-dis)
}else{
    dis=amount*(30/100)
    console.log("total bill = ",amount-dis)
}


// 5.Display the season based on the month number.
// 3–5 → Spring, 6–8 → Summer, 9–11 → Autumn, 12/1/2 → Winter.

let month=8
if(month>=3 && month<=5){
    console.log("spring season")
}else if(month>=6 && month<=8){
    console.log("summer season")
}else if(month>=9 && month<=11){
    console.log("autumn season")
}else if(month==12 || month==1 || month==2){
    console.log("winter season")
}else{
    console.log("invalid month number")
}


// 6.Check whether a given year is a Leap Year or not.
// Condition 1: year % 400 == 0
// Condition 2: year % 4 == 0 and year % 100 != 0

let year=1200
if(year%400==0){
    console.log("leap year")
}else if(year%4==0 && year%100!=0){
    console.log("leap year")
}else{
    console.log("not a leap year")
}



// <---------Nested if------------->

// 1.Check whether a person is eligible to donate blood.
// Age should be between 18 and 60. If eligible by age, weight should be above 50 kg.

let age=5
let weight=5
if(age>=18 && age<=60){
    if(weight>=50){
        console.log("person is eligible to donate blood")
    }else{
        console.log("person is not eligible to donate blood")
    }
}else{
    console.log("person is not eligible to donate blood")
}


// 2.Display the grade based on average only if the student has passed in all 4 subjects.
let sub1=60
let sub2=60
let sub3=60
let sub4=60
if(sub1>=35 && sub2>=35 && sub3>=35 && sub4>=35){
    total=(sub1+sub2+sub3+sub4)/4
    if(total>=90){
        console.log("grade : ","O")
    }else if(total>=80){
        console.log("grade : ","A")
    }else if(total>=70){
        console.log("grade : ","B")
    }else if(total>=60){
        console.log("grade : ","C")
    }else if(total>=50){
        console.log("grade : ","D")
    }else{
        console.log("grade : ","E")
    }
}else{
    console.log("fail")
}


// 3.Check whether a student is eligible for a scholarship.
// Age should be above 18. If eligible by age, score should be above 86.

let age=17
let score=100
if(age>18){
    if(score>86){
        console.log("eligible for scholarship")
    }else{
        console.log("not eligible for scholarship due to less score")
    }
}else{
    console.log("not eligible for scholarship")
}