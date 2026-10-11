let institute={
    "institute_name":"innomatics research labs",
    branch:{
        branch1:{
        name:"Full stack experts",
        address:{
            area:"kukatpally",
            city:"hyderabad",
            state:"telangana"
        },
        courses:"fsd,data science"
    },
    branch2:{
        name:"innomatics",
        address:{
            area:"dilshuknagar",
            city:"hyderabad",
            state:"telangana",

        },
        courses:"data science,data analyst",
    }

    },
    courses:{
        "python FSD":{
            duration:"8 months",
            technologies:"python,sql,html,css,js,etc..",
            fee:45000,
            mode:"offline/online",
        },
        "java FSD":{
            duration:"9 months",
            technologies:"java,spring boot,html,css,js,etc..",
            fee:50000,
            mode:"offline/online",
        },
        "data science":{
            duration:"10 months",
            technologies:"python,pandas,numpy,ML",
            fee:60000,
            mode:"online",
        }
    },
    students:{
        totalStudents:2000,
        inEachBatch:50,

    },
    palcedStudents:{
        student1:{
            name:"Akshay",
            company:"AI Logic",
            package:"4LPA",
        },
        student2:{
            name:"Hema",
            company:"Zero code HR",
            package:"3LPA",
        },
        student3:{
            name:"Suresh",
            company:"Zensar",
            package:"5LPA",
        },
    },
    contact:{
        phone:8348787928,
        email:"innomatics@gmail.com",
        linkedin:"innomatics research labs",
        youtube:"InnomaticsResearchLabs",
    },
    rating:4.5,
}


console.log(institute)

// retrieving the data

console.log(institute["branch"])
console.log(institute["branch"]["branch1"])
console.log(institute["branch"]["branch2"])
console.log(institute["courses"])
console.log(institute["courses"]["data science"])
console.log(institute["courses"]["python FSD"]["technologies"])
console.log(institute["palcedStudents"])
console.log(institute["palcedStudents"]["student2"])


// update the data

institute["branch"]["branch2"]["name"]="Innomatics Research Labs"
institute["students"]["totalStudents"]=3000

console.log(institute["branch"]["branch2"])
console.log(institute["students"])


// add new property

institute["palcedStudents"]["student1"]["domain"]="Python developer"
institute["palcedStudents"]["student2"]["domain"]="Java developer"
institute["students"]["No.of students Placed"]="1000+"

console.log(institute["palcedStudents"])
console.log(institute["students"])


// delete property

delete institute["courses"]["data science"]
console.log(institute["courses"])