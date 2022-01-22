// saving to local storage
var dateEl = document.getElementById("currentDay");
var Tasks = document.querySelector("plan");
var TB = document.getElementsByClassName("description")

// Retrieves Day and time and adds it to top of the page
function TimeUpdate () {
    var today = moment().format("MMM DD, YYYY [at] hh:mm:ss A");
    $("#currentDay").text(today);
    dateEl.textContent = today;
    // Check();
}
setInterval(TimeUpdate, 1000);

console.log(TB);
// checks the time and assigns to styling
function Check() {
    var day_time = moment().format("hh:mm"); // Grabs the time of day
    console.log(day_time);
    if (day_time == TB.id) { // compare time of day to TB.id Value
        TB.classList.remove("past"); // removes default styling
        TB.classList.add("present"); // assigns present
        console.log(TB);
        console.id(TB.id);
    } else if (day_time < TB.id ) { // if not present, then: 
        TB.classList.remove("past"); // removes default styling
        TB.classList.remove("present"); // removes present if not applicable
        TB.classList.add("future"); // assigns present default
    } else {
        TB.classList.add("past")
    }
    

};



// class.classList.remove(past)
// class.classList.add(present)