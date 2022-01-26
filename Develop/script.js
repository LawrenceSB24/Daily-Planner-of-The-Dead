// saving to local storage
var dateEl = document.getElementById("currentDay");
var textareaEl_5_a = $("#hour-5-a");
var textareaEl_6_a = $("#hour-6-a");
var textareaEl_7_a = $("#hour-7-a");
var textareaEl_8_a = $("#hour-8-a");
var textareaEl_9_a = $("#hour-9-a");
var textareaEl_10_a = $("#hour-10-a");
var textareaEl_11_a = $("#hour-11-a");
var textareaEl_12_p = $("#hour-12-p");
var textareaEl_1_p = $("#hour-1-p");
var textareaEl_2_p = $("#hour-2-p");
var textareaEl_3_p = $("#hour-3-p");
var textareaEl_4_p = $("#hour-4-p");
var textareaEl_5_p = $("#hour-5-p");
var textareaEl_6_p = $("#hour-6-p");
var textareaEl_7_p = $("#hour-7-p");
var textareaEl_8_p = $("#hour-8-p");
var textareaEl_9_p = $("#hour-9-p");
var textareaEl_10_p = $("#hour-10-p");
var textareaEl_11_p = $("#hour-11-p");
var textareaEl_12_a = $("#hour-12-a");




var TimesArray =
    [
        textareaEl_5_a,
        textareaEl_6_a,
        textareaEl_7_a,
        textareaEl_8_a,
        textareaEl_9_a,
        textareaEl_10_a,
        textareaEl_11_a,
        textareaEl_12_p,
        textareaEl_1_p,
        textareaEl_2_p,
        textareaEl_3_p,
        textareaEl_4_p,
        textareaEl_5_p,
        textareaEl_6_p,
        textareaEl_7_p,
        textareaEl_8_p,
        textareaEl_9_p,
        textareaEl_10_p,
        textareaEl_11_p,
        textareaEl_12_a
    ];
// var Tasks = document.querySelector("plan");
// var TB = document.getElementsByClassName("description")

// Retrieves Day and time and adds it to top of the page
function TimeUpdate() {
    var today = moment().format("MMM DD, YYYY [at] hh:mm:ss A");
    $("#currentDay").text(today);
    dateEl.textContent = today;
    // Check();
}
setInterval(TimeUpdate, 1000);


$(".saveBtn").click(function (event) {
    event.preventDefault();
    var save = $(this).siblings(".description").val();
    console.log(save);
    var ID_hour = $(this).parent().attr("id");
    console.log(ID_hour);
    localStorage.setItem(ID_hour, save);
});

$("#time-5-a .description").val(localStorage.getItem("time-5-a"));
$("#time-6-a .description").val(localStorage.getItem("time-6-a"));
$("#time-7-a .description").val(localStorage.getItem("time-7-a"));
$("#time-8-a .description").val(localStorage.getItem("time-8-a"));
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


var currentT = moment().format("hh");
// var Time = document.getElementById("5");

console.log(currentT);

for (let i = 0; i < TimesArray.length; i++) {
    creation(TimesArray[i]);
}



function creation(currentHour) {
    var hour = parseInt(currentHour.attr('id').split("-")[1]);
    console.log(hour);
    if (currentT === hour) {
        currentHour.addClass("present");
    } else if (currentT > hour) {
        currentHour.addClass("past");
    } else if (currentT < hour) {
        currentHour.addClass("future");
    }
}