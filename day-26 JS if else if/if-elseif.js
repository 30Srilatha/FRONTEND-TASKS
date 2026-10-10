// <----------------if-else-if-------------->

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

