// saving to local storage
var dateEl = document.getElementById("currentDay");

function TimeUpdate () {
    var today = moment().format("MMM DD, YYYY [at] hh:mm:ss A");
    $("#currentDay").text(today);
    dateEl.textContent = today;
}
setInterval(TimeUpdate, 1000);