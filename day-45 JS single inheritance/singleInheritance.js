// <-----------------SINGLE INHERITANCE------------------->

// single inheritance exapmle1
class Vehicle{
    constructor(type,price,brand,year){
        this.type=type
        this.price=price
        this.brand=brand
        this.year=year
    }
    display(){
        console.log("type of vehicle : ",this.type)
        console.log("price of vehicle : ",this.price)
        console.log("brand of vehicle : ",this.brand)
        console.log("year : ",this.year)


    }
}
class Car extends Vehicle{
    constructor(type,price,brand,year,model,color){
        super(type,price,brand,year)
        this.model=model
        this.color=color
    }
    displayCar(){
        super.display()
        console.log("model of the car : ",this.model)
        console.log("color of car : ",this.color)
        console.log("------------------------------")
    }
}
let car1=new Car("4-wheeler",9000000,"Toyato",2021,"Fortuner","black")
car1.displayCar()
let car2=new Car("4-wheeler",1200000,"Hyundai",2023,"Fortuner","White")
car2.displayCar()
let car3=new Car("4-wheeler",2000000,"Kia",2024,"Seltos","Brown")
car3.displayCar()


// single inheritance example2
class Employee{
    constructor(name,age,role,workingHours){
        this.name=name
        this.age=age
        this.role=role
        this.workingHours=workingHours
    }
    display(){
        console.log("name of employee : ",this.name)
        console.log("age of employee : ",this.age)
        console.log("role of employee : ",this.role)
        console.log("working hours of employee :",this.workingHours)

    }
}
class HR extends Employee{
    constructor(name,age,role,workingHours,qualification,experience,salary){
        super(name,age,role,workingHours)
        this.qualification=qualification
        this.experience=experience
        this.salary=salary
    }
    displayHr(){
        super.display()
        console.log("qualification of hr : ",this.qualification)
        console.log("experience of hr :",this.experience)
        console.log("salary : ",this.salary)
        console.log("------------------------------------")
    }
}
let h1=new HR("Harshith",27,"Software developer","9 hours","Mtech","2 years",60000)
h1.displayHr()
let h2=new HR("Rahul",24,"Manager","8 hours","Btech","3 years",55000)
h2.displayHr()
let h3=new HR("Ram",25,"Hr Executive","9 hours","MBA","4 years",70000)
h3.displayHr()


//single inheritance example3
class Bank{
    constructor(deposite,withdraw,balance,branch){
        this.deposite=deposite
        this.withdraw=withdraw
        this.balance=balance
        this.branch=branch
    }
    display(){
        console.log("deposite money : ",this.deposite)
        console.log("with draw money :",this.withdraw)
        console.log("balance money :",this.balance)
        console.log("branch of bank :",this.branch)
    }
}
class Sbi extends Bank{
    constructor(deposite,withdraw,balance,branch,AccHolder,AccNum,mobile){
        super(deposite,withdraw,balance,branch)
        this.AccHolder=AccHolder
        this.AccNum=AccNum
        this.mobile=mobile
    }
    displayBank(){
        super.display()
        console.log("Account holder :",this.AccHolder)
        console.log("Account number :",this.AccNum)
        console.log("Mobile number :",this.mobile)
        console.log("---------------------------------")
    }
} 
let s1=new Sbi(10000,5000,50000,"SR nagar","Raju",56783,6748920901)
s1.displayBank()
let s2=new Sbi(5000,4000,40000,"Kukatpally","Anu",10002,9748920901)
s2.displayBank()
let s3=new Sbi(9000,7700,100000,"Balnagar","Ravi",49032,8485920901)
s3.displayBank()