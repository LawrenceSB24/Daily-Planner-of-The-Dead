// saving to local storage
var dateEl = document.getElementById("currentDay");
// var Tasks = document.querySelector("plan");
// var TB = document.getElementsByClassName("description")

// Retrieves Day and time and adds it to top of the page
function TimeUpdate () {
    var today = moment().format("MMM DD, YYYY [at] hh:mm:ss A");
    $("#currentDay").text(today);
    dateEl.textContent = today;
    // Check();
}
setInterval(TimeUpdate, 1000);


$(".saveBtn").click(function (e) {
    e.preventDefault();
    var save = $(this).siblings(".description").val();
    console.log(save);
    var ID_hour = $(this).parent().attr("id");
    console.log(ID_hour);
    localStorage.setItem(ID_hour, save);
});

$("#time-5-a .description").val(localStorage.getItem("time-5-a"));
$("#time-6-a .description").val(localStorage.getItem("time-6-a"));
$("#time-7-a .description").val(localStorage.getItem("time-7-a"));
$("#time-9-a .description").val(localStorage.getItem("time-9-a"));
$("#time-10-a .description").val(localStorage.getItem("time-10-a"));
$("#time-11-a .description").val(localStorage.getItem("time-11-a"));
$("#time-12-p .description").val(localStorage.getItem("time-12-p"));
$("#time-1-p .description").val(localStorage.getItem("time-1-p"));
$("#time-2-p .description").val(localStorage.getItem("time-2-p"));
$("#time-3-p .description").val(localStorage.getItem("time-3-p"));
$("#time-4-p .description").val(localStorage.getItem("time-4-p"));
$("#time-5-p .description").val(localStorage.getItem("time-5-p"));
$("#time-6-p .description").val(localStorage.getItem("time-6-p"));
$("#time-7-p .description").val(localStorage.getItem("time-7-p"));
$("#time-8-p .description").val(localStorage.getItem("time-8-p"));
$("#time-9-p .description").val(localStorage.getItem("time-9-p"));
$("#time-10-p .description").val(localStorage.getItem("time-10-p"));
$("#time-11-p .description").val(localStorage.getItem("time-11-p"));
$("#time-12-a .description").val(localStorage.getItem("time-12-a"));


var currentT = moment().format("hh:mm");
var T = document.querySelector(".Time");


function creation() {
    var Time = parseInt(T);
    if (currentT === Time) {
        $("#planner .description").addClass("present");
    } else if (currentT > Time) {
        $("#planner .description").addClass("past");
    } else if (currentT < Time) {
        $("#planner .description").addClass("future");
    }
}