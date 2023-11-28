let cars = {
    merek: ["bmw", "maserati", "toyota", "suzuki"],
    status: "baru",
    jenis: "SUV"
}

//input User
let inputProperty = "dsadasdsad"
let inputOldValue = "suzuki"
let inputNewValue = "Sport"

if(cars.hasOwnProperty(inputProperty)){
    if(inputProperty == "status"){
        cars.status = inputNewValue
    } else if (inputProperty == "jenis"){
        cars.jenis = inputNewValue
    } else if (inputProperty == "merek"){
        if (cars.merek.includes(inputOldValue)){
            let index = cars.merek.indexOf(inputOldValue);
            cars.merek[index] = inputNewValue
        } else{
            console.log("Tidak ditemukan merek tersebut")
        }
    }
} else{
    console.log("Cars tidak memiliki properti " + inputProperty)
}

console.log(cars)