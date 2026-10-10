// <---------------------HIERARCHICAL INHERITANCE------------------->

// example1 (bankaccount->current account,fixed deposite)

class BankAcc{
    constructor(accNum,Acchld){
        this.accNum=accNum
        this.Acchld=Acchld
    }
    display(){
        console.log("account number : ",this.accNum)
        console.log("account holder name : ",this.Acchld)

    }
}

class CurrentAcc extends BankAcc{
    constructor(accNum,Acchld,balance){
        super(accNum,Acchld)
        this.balance=balance
    }
    displayCur(){
        super.display()
        console.log("account balance : ",this.balance)

    }
}

class FixedDeposite extends BankAcc{
    constructor(accNum,Acchld,amount,duration){
        super(accNum,Acchld)
        this.amount=amount
        this.duration=duration
    }
    displayFix(){
        super.display()
        console.log("amountr : ",this.amount)
        console.log("duration : ",this.duration)

    }
}
console.log("current acc ----->")
let current=new CurrentAcc(203030,"ram",40000)
current.displayCur()
console.log("fixed acc ---->")
let Fixed = new FixedDeposite(302010,"raj",80000,"1year")
Fixed.displayFix()


// example2 - Building → Apartment, Office

class Building{
    constructor(name,location){
        this.name=name
        this.location=location
    }
    display(){
        console.log("building name : ",this.name)
        console.log("building location :",this.location)
    }
}

class Apartment extends Building{
    constructor(name,location,flats,floors){
        super(name,location)
        this.flats=flats
        this.floors=floors
    }
    displayApart(){
        super.display()
        console.log("number of flats : ",this.flats)
        console.log("number of floors : ",this.floors)
    }
}

class Office extends Building{
    constructor(name,location,companies,employees){
        super(name,location)
        this.companies=companies
        this.employees=employees
    }
    displayOff(){
        super.display()
        console.log("number of companies : ",this.companies)
        console.log("number of employees : ",this.employees)
    }
}
console.log("apartment--->")
let apart=new Apartment("Srinivas building","Kukatpally",20,10)
apart.displayApart()

console.log("office--->")
let office=new Office("Cyber towers","Hitech city",30,500)
office.displayOff()


// example3 - SocialMedia → Instagram, YouTube

class Social_Media{
    constructor(username,followers){
        this.username=username
        this.followers=followers
    }
    display(){
        console.log("user name : ",this.username)
        console.log("followers : ",this.followers)
    }
}
class Insta extends Social_Media{
    constructor(username,followers,posts){
        super(username,followers)
        this.posts=posts
    }
    displayInsta(){
        super.display()
        console.log("number of posts : ",this.posts)
    }
}
class Youtube extends Social_Media{
    constructor(username,followers,subscribers){
        super(username,followers)
        this.subscribers=subscribers
    }
    displayYou(){
        super.display()
        console.log("number of subscribers : ",this.subscribers)
    }
}

console.log("instagram--->")
let insta=new Insta("chaitu",3000,50)
insta.displayInsta()

console.log("you tube---->")
let youtube = new Youtube("srinivas channel",40000,8000)
youtube.displayYou()


// example4 - Payment → CreditCard, UPI

class Payment{
    constructor(amount,date){
        this.amount=amount
        this.date=date
    }
    display(){
        console.log("amount : ",this.amount)
        console.log("date : ",this.date)
    }
}

class CreditCard extends Payment{
    constructor(amount,date,cardNumber,bank){
        super(amount,date)
        this.cardNumber=cardNumber
        this.bank=bank
    }
    displayCredit(){
        super.display()
        console.log("card number : ",this.cardNumber)
        console.log("bank name : ",this.bank)
    }
}

class UPI extends Payment{
    constructor(amount,date,upi_id,app){
        super(amount,date)
        this.upi_id=upi_id
        this.app=app
    }
    displayUpi(){
        super.display()
        console.log("upi id : ",this.upi_id)
        console.log("upi app : ",this.app)
    }
}

console.log("credit card ---->")
let credit=new CreditCard(6000,"06-10-2026",2354267,"canara")
credit.displayCredit()
console.log("upi ----->")
let upi=new UPI(7000,"09-03-2026","ramu@upi","Phone pay")
upi.displayUpi()