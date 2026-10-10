// example1

class student {
    static college = "MLR Institute of Technology"
    static course = "B.Tech"

    constructor(name, age, branch, year, cgpa) {
        this.name = name;
        this.age = age;
        this.branch = branch;
        this.year = year;
        this.cgpa = cgpa;
    }

    displayDetails() {
        console.log("College:", student.college);
        console.log("Course:", student.course);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Branch:", this.branch);
        console.log("Year:", this.year);
        console.log("CGPA:", this.cgpa);
        console.log("--------------------------------")
    }
}

let student1 = new student("Rahul", 21, "CSE", 4, 8.5);
student1.displayDetails();

let student2 = new student("Swathi", 20, "ECE", 3, 8.8);
student2.displayDetails();



// example2

class employee {
    static company = "TCS"
    static location = "Hyderabad"

    constructor(name, age, department, salary, experience) {
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
        this.experience = experience;
    }

    displayDetails() {
        console.log("Company:", employee.company);
        console.log("Location:", employee.location);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Department:", this.department);
        console.log("Salary:", this.salary);
        console.log("Experience:", this.experience);
        console.log("-----------------------------------")
    }
}

let employee1 = new employee("Ram", 23, "IT", 45000, "2 years");
employee1.displayDetails();

let employee2 = new employee("Raj", 26, "Software Developer", 50000, "Fresher");
employee2.displayDetails();


// example3
class course {
    static institute = "Innomatics Research Labs"
    static mode = "Online"

    constructor(name, duration, fee, mentor, students ,timings) {
        this.name = name;
        this.duration = duration;
        this.fee = fee;
        this.mentor = mentor;
        this.students = students;
        this.timing = timings;
    }

    displayDetails() {
        console.log("Institute:", course.institute);
        console.log("Mode:", course.mode);
        console.log("Course:", this.name);
        console.log("Duration:", this.duration);
        console.log("Fee:", this.fee);
        console.log("Mentor:", this.mentor);
        console.log("Students:", this.students);
        console.log("Timing : ",this.timing);
        console.log("-------------------------------")
    }
}

let course1 = new course("Python Full Stack", "8 Months", 45000, "Vineeth Sir", 50,"10:00AM to 6:00PM");
course1.displayDetails();

let course2 = new course("Data Science", "6 Months", 40000, "Ravi Sir", 40 ,"9:00AM to 2:00PM");
course2.displayDetails();