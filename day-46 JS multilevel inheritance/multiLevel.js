// <-----------------------MULTILEVEL INHERITANCE------------------------>

// example 1 (product->electronic->mobile)

class Product{
    constructor(name,price){
        this.name=name
        this.price=price
    }
    display(){
        console.log("name of product : ",this.name)
        console.log("price of product : ",this.price)

    }
}

class Electronic extends Product{
    constructor(name,price,brand,warranty){
        super(name,price)
        this.brand=brand
        this.warranty=warranty
    }
    displayElec(){
        super.display()
        console.log("brand of Electronic : ",this.brand)
        console.log("warranty of electronic : ",this.warranty)
        
    }
}

class Mobile extends Electronic{
    constructor(name,price,brand,warranty,ram,storage){
        super(name,price,brand,warranty)
        this.ram=ram
        this.storage=storage
    }
    displayMob(){
        super.displayElec()
        console.log("RAM of Mobile : ",this.ram)
        console.log("storage of mobile : ",this.storage)
        console.log("--------------------------------")
    }
}

let mobile1= new Mobile("galaxy s21",60000,"Samsung","1.5 year","8gb","64gb")
mobile1.displayMob()
let mobile2= new Mobile("galaxy A13",30000,"Samsung","1 year","6gb","58gb")
mobile2.displayMob()
let mobile3= new Mobile("galaxy A21",40000,"Samsung","1 year","8gb","58gb")
mobile3.displayMob()


// example2 - School → Teacher → MathTeacher

class School{
    constructor(schoolName,location){
        this.schoolName=schoolName
        this.location=location
    }
    display(){
        console.log("name of school : ",this.schoolName)
        console.log("location of school : ",this.location)

    }
}

class Teacher extends School{
    constructor(schoolName,location,teacherName,experience){
        super(schoolName,location)
        this.teacherName=teacherName
        this.experience=experience
    }
    displayTea(){
        super.display()
        console.log("name of the teacher : ",this.teacherName)
        console.log("experience of teacher: ",this.experience)

    }
}

class SocialTeacher extends Teacher{
    constructor(schoolName,location,teacherName,experience,subject,salary){
        super(schoolName,location,teacherName,experience)
        this.subject=subject
        this.salary=salary
    }
    displaySocial(){
        super.displayTea()
        console.log("subject: ",this.subject)
        console.log("salary of teacher : ",this.salary)
        console.log("--------------------------------------")
    }
}

let social1=new SocialTeacher("Triveni school","Chintal","Rama","4 years","Social",50000)
social1.displaySocial()
let social2=new SocialTeacher("Chaitanya school","Armur","Renuka","3 years","Maths",55000)
social2.displaySocial()
let social3=new SocialTeacher("Peters school","Sainikpur","Srinivas","2 years","Science",45000)
social3.displaySocial()


// example 3 (Transport->bus->electric bus)

class Transport{
    constructor(name,speed){
        this.name=name
        this.speed=speed
    }
    display(){
        console.log("name of transport : ",this.name)
        console.log("speed : ",this.speed)

    }
}

class Bus extends Transport{
    constructor(name,speed,capacity,route){
        super(name,speed)
        this.capacity=capacity
        this.route=route
    }
    displayBus(){
        super.display()
        console.log("capacity of bus : ",this.capacity)
        console.log("route of bus : ",this.route)

    }
}

class ElectricBus extends Bus{
    constructor(name,speed,capacity,route,battery,range){
        super(name,speed,capacity,route)
        this.battery=battery
        this.range=range
    }
    displayEle(){
        super.displayBus()
        console.log("electric bus battery : ",this.battery)
        console.log("range of electric bus : ",this.range)

    }
}

let ele=new ElectricBus("Electric bus","80km/hr",45,"hyderabad-vijayawada","300 KWH","250km")
ele.displayEle()


// example 4 - Person → Doctor → Surgeon

class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    display(){
        console.log("name of person : ",this.name)
        console.log("age of person : ",this.age)
    }
}

class Doctor extends Person{
    constructor(name,age,specialization,experience){
        super(name,age)
        this.specialization=specialization
        this.experience=experience
    }
    displayDoc(){
        super.display()
        console.log("specialization : ",this.specialization)
        console.log("experience : ",this.experience)
    }
}
class Surgeon extends Doctor{
    constructor(name,age,specialization,experience,surgeryType,hospital){
        super(name,age,specialization,experience)
        this.surgeryType=surgeryType
        this.hospital=hospital

    }
    displaySur(){
        super.displayDoc()
        console.log("surgery type : ",this.surgeryType)
        console.log("hospital : ",this.hospital)
    }
}

let sur=new Surgeon("koushik","33","Cardiology","7 years","Heart sugery","Apollo hospital")
sur.displaySur()