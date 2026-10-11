// static and instance variables

// example 1

class Hospital{
    static hospitalName="Yashoda"
    static location="hyderabad"
    data(patientName,disease,age,fee){
        this.patientName=patientName
        this.disease=disease
        this.age=age
        this.fee=fee
    }
    display(){
        console.log("hospital name :",Hospital.hospitalName)
        console.log("hospital location :",Hospital.location)
        console.log("patient name :",this.patientName)
        console.log("diesease :",this.disease)
        console.log("patient age :",this.age)
        console.log("fee for treatment :",this.fee)
        console.log("-----------------------------------------")

    }
}
let patient1=new Hospital()
patient1.data("Arun","viral fever",33,2000);
patient1.display()

let patient2=new Hospital()
patient2.data("Renu","hand facture",28,10000);
patient2.display()

let patient3=new Hospital()
patient3.data("lalitha","skin allergy",30,7000);
patient3.display()


// example2
class Movie{
    static industry="Tollywood"
    static language="telugu"
    data(movie,hero,heroine,director,releaseYear){
        this.movie=movie
        this.hero=hero
        this.heroine=heroine
        this.director=director
        this.releaseYear=releaseYear
    }
    display(){
        console.log("movie industry : ",Movie.industry)
        console.log("movie language : ",Movie.language)
        console.log("movie  : ",this.movie)
        console.log("hero  : ",this.hero)
        console.log("heroine  : ",this.heroine)
        console.log("director  : ",this.director)
        console.log("release year : ",this.releaseYear)
        console.log("------------------------------------")
    }
}

let m = new Movie()
m.data("Bahubali","Prabhas","Anushka","Rajamouli",2021)
m.display()

let m1 = new Movie()
m1.data("Hit3","Nani","Sreenidhi","Srikanth",2025)
m1.display()

let m2 = new Movie()
m2.data("Bujjigadu","Prabhas","Thrisha","Puri jagannath",2015)
m2.display()

// example3

class Flight{
    static airline="Indigo"
    static country="India"
    data(flightNumber,source,destination,price){
        this.flightNumber=flightNumber
        this.source=source
        this.destination=destination
        this.price=price
    }
    display(){
        console.log("airline : ",Flight.airline)
        console.log("country : ",Flight.country)
        console.log("flight number : ",this.flightNumber)
        console.log("source : ",this.source)
        console.log("destination : ",this.destination)
        console.log("ticket price : ",this.price)
        console.log("---------------------------------------")

    }
}

let flight=new Flight()
flight.data("41315","Hyderabad","Delhi",5000)
flight.display()

let flight1=new Flight()
flight1.data("2315","Bangalore","Madhya pradesh",6000)
flight1.display()

let flight2=new Flight()
flight2.data("91819","Chennai","Hyderabad",7000)
flight2.display()