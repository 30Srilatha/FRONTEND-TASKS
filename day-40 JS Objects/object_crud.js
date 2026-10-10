let laptop={
    "Laptop name":"hp",
    "laptop_price":60000,
    RAM:16
}

// retrieve data

console.log(laptop["Laptop name"])
console.log(laptop["laptop_price"])
console.log(laptop["RAM"])


// update the data

laptop["laptop_price"]=70000
console.log(laptop["laptop_price"])

// add new properties

laptop["storage"]="25Gb"
console.log(laptop)

// delete the data

delete laptop["RAM"]
console.log(laptop)
