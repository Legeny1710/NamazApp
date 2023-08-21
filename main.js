// import { CurrentDate } from "./date.js"


// Prayer Times
let fajr = document.getElementById("Fajr")
let sun = document.getElementById("Sun")
let dhuhr = document.getElementById("Dhuhr")
let asr = document.getElementById("Asr")
let maghrib = document.getElementById("Maghrib")
let isha = document.getElementById("Isha")

//input box
let LocationInput = document.getElementById("LocationInput")
let searchbtn = document.getElementById("searchbtn")

let locationText = document.getElementById("location")


let Chosenlocation = ""

searchbtn.addEventListener('click', function() {
    Chosenlocation = LocationInput.value
    locationText.textContent = Chosenlocation
    fetch(`http://api.aladhan.com/v1/calendarByCity/${current_day.year}/${current_day.month+1}?city=${Chosenlocation}&country=United Kingdom&method=13`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data[current_day.day - 1])
        fajr.textContent = (data.data[current_day.day]['timings']['Fajr'].slice(0, 5))
        sun.textContent = (data.data[current_day.day]['timings']['Sunrise'].slice(0, 5))
        dhuhr.textContent = (data.data[current_day.day]['timings']['Dhuhr'].slice(0, 5))
        asr.textContent = (data.data[current_day.day]['timings']['Asr'].slice(0, 5))
        maghrib.textContent = (data.data[current_day.day]['timings']['Maghrib'].slice(0, 5))
        isha.textContent = (data.data[current_day.day]['timings']['Isha'].slice(0, 5))
    })

})

let dateText = document.getElementById("date")


class CurrentDate{
    constructor(){
        this.date = new Date
        this.day = this.date.getDate()
        this.month = this.date.getMonth()
        this.year = this.date.getFullYear()
    }

    ReturnDate() {
        let currentDate = `${this.day} / ${this.month} / ${this.year}`;
        return currentDate
    }
}


const current_day = new CurrentDate()


dateText.textContent = current_day.ReturnDate()





