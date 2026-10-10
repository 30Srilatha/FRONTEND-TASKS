// // 1)employee salary

class Employee{
    #name
    #salary
    #role
    constructor(name,salary,role){
        this.#name=name
        this.#salary=salary
        this.#role=role
    }
    getName(){
        return this.#name
    }
    getSalary(){
        return this.#salary
    }
    getRole(){
        return this.#role
    }
    setName(newName){
        this.#name=newName
    }
    setSal(newSal){
        this.#salary=newSal
    }
    setRole(newRole){
        this.#role=newRole
    }
    
}
let e=new Employee("sharath",50000,"software developer")
console.log("<-----------before updating---------->")
console.log("employee name : ",e.getName())
console.log("employee salary : ",e.getSalary())
console.log("employee role : ",e.getRole())

e.setName("sara")
e.setSal(60000)
e.setRole("Frontend developer")

console.log("<-----------after updating---------->")
console.log("employee name : ",e.getName())
console.log("employee salary : ",e.getSalary())
console.log("employee role : ",e.getRole())



// email account

class Email{
    #email
    #password
    constructor(email,password){
        this.#email=email
        this.#password=password
    }
    getEmail(){
        return this.#email
    }
    getPass(){
        return this.#password
    }
    setEmail(newEmail){
        this.#email=newEmail
    }
    setPass(newPass){
        this.#password=newPass
    }
}
let mail=new Email("hari@gmail.com",12345)

console.log("<---------before updating--------->")
console.log("email : ",mail.getEmail())
console.log("password : ",mail.getPass())


mail.setEmail("hariram@gmail.com")
mail.setPass("234451")

console.log("<---------before updating--------->")
console.log("email : ",mail.getEmail())
console.log("password : ",mail.getPass())



// atm

class Atm{
    #name
    #pin
    #amount
    constructor(name,pin,amount){
        this.#name=name
        this.#pin=pin
        this.#amount=amount
    }
    getName(){
        return this.#name
    }
    getPin(){
        return this.#pin
    }
    getAmount(){
        return this.#amount
    }
    setName(name){
        this.#name=name
    }
    setPin(pin){
        this.#pin=pin
    }
    setAmount(amount){
        this.#amount=amount
    }
}
let b=new Atm("srinidhi",909090,20000)

console.log("<-----------before updating---------->")
console.log("name : ",b.getName())
console.log("pin number : ",b.getPin())
console.log("amount : ",b.getAmount())


b.setName("srividya")
b.setPin(908070)
b.setAmount(30000)

console.log("<-----------after updating---------->")
console.log("name : ",b.getName())
console.log("pin number : ",b.getPin())
console.log("amount : ",b.getAmount())