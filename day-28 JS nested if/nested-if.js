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