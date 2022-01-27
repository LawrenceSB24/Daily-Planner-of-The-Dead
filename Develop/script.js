// Variable that retrieves the currentDay element
var dateEl = document.getElementById("currentDay");

// Variables that convert the time into 24hr format. Starting from 5am to 12am
var hour_5_a = 5;
var hour_6_a = 6;
var hour_7_a = 7;
var hour_8_a = 8;
var hour_9_a = 9;
var hour_10_a = 10;
var hour_11_a = 11;
var hour_12_p = 12;
var hour_1_p = 13;
var hour_2_p = 14;
var hour_3_p = 15;
var hour_4_p = 16;
var hour_5_p = 17;
var hour_6_p = 18;
var hour_7_p = 19;
var hour_8_p = 20;
var hour_9_p = 21;
var hour_10_p = 22
var hour_11_p = 23;
var hour_12_a = 24;



// Retrieves Day and time and adds it to top of the page
function TimeUpdate() {
    var today = moment().format("MMM DD, YYYY [at] hh:mm:ss A");
    $("#currentDay").text(today);
    dateEl.textContent = today;
    // Check();
}
setInterval(TimeUpdate, 1000);

// function that allows the user to save tasks to planner
$(".saveBtn").click(function (event) {
    console.log(event);
    event.preventDefault();
    var save = $(this).siblings(".description").val();
    console.log(save);
    var ID_hour = $(this).parent().attr("id");
    console.log(ID_hour);
    localStorage.setItem(ID_hour, save);
});

// Local storage for all time blocks
$("#5-a .description").val(localStorage.getItem("5-a"));
$("#6-a .description").val(localStorage.getItem("6-a"));
$("#7-a .description").val(localStorage.getItem("7-a"));
$("#8-a .description").val(localStorage.getItem("8-a"));
$("#9-a .description").val(localStorage.getItem("9-a"));
$("#10-a .description").val(localStorage.getItem("10-a"));
$("#11-a .description").val(localStorage.getItem("11-a"));
$("#12-p .description").val(localStorage.getItem("12-p"));
$("#1-p .description").val(localStorage.getItem("1-p"));
$("#2-p .description").val(localStorage.getItem("2-p"));
$("#3-p .description").val(localStorage.getItem("3-p"));
$("#4-p .description").val(localStorage.getItem("4-p"));
$("#5-p .description").val(localStorage.getItem("5-p"));
$("#6-p .description").val(localStorage.getItem("6-p"));
$("#7-p .description").val(localStorage.getItem("7-p"));
$("#8-p .description").val(localStorage.getItem("8-p"));
$("#9-p .description").val(localStorage.getItem("9-p"));
$("#10-p .description").val(localStorage.getItem("10-p"));
$("#11-p .description").val(localStorage.getItem("11-p"));
$("#12-a .description").val(localStorage.getItem("12-a"));


// Variable that uses moment.js to retrieve time from the 24hr format
var currentT = moment().format("H");
console.log(currentT);

// If comparisons for the currentT variable and the given hour variables

// 5am condition
if (currentT == hour_5_a) {
    $("#5-a .description").addClass("present"); // If currentT matches hour_5_a, uses present color fill
} else if (currentT < hour_5_a) {
    $("#5-a .description").addClass("future"); // If currentT is before hour_5_a, uses future color fill
} else if (currentT > hour_5_a) {
    $("#5-a .description").addClass("past"); // If currentT is after hour_5_a, uses past color fill
}

// 6am condition
if (currentT == hour_6_a) {
    $("#6-a .description").addClass("present"); // If currentT matches hour_6_a, uses present color fill
} else if (currentT < hour_6_a) {
    $("#6-a .description").addClass("future"); // If currentT is before hour_6_a, uses future color fill
} else if (currentT > hour_6_a) {
    $("#6-a .description").addClass("past"); // If currentT is after hour_6_a, uses past color fill
}

// 7am condition
if (currentT == hour_7_a) {
    $("#7-a .description").addClass("present"); // If currentT matches hour_7_a, uses present color fill
} else if (currentT < hour_7_a) {
    $("#7-a .description").addClass("future"); // If currentT is before hour_7_a, uses future color fill
} else if (currentT > hour_7_a) {
    $("#7-a .description").addClass("past"); // If currentT is after hour_7_a, uses past color fill
}

// 8am condition
if (currentT == hour_8_a) {
    $("#8-a .description").addClass("present"); // If currentT matches hour_8_a, uses present color fill
} else if (currentT < hour_8_a) {
    $("#8-a .description").addClass("future"); // If currentT is before hour_8_a, uses future color fill
} else if (currentT > hour_8_a) {
    $("#8-a .description").addClass("past"); // If currentT is after hour_8_a, uses past color fill
}

// 9am condition
if (currentT == hour_9_a) {
    $("#9-a .description").addClass("present"); // If currentT matches hour_9_a, uses present color fill
} else if (currentT < hour_9_a) {
    $("#9-a .description").addClass("future"); // If currentT is before hour_9_a, uses future color fill
} else if (currentT > hour_9_a) {
    $("#9-a .description").addClass("past"); // If currentT is after hour_9_a, uses past color fill
}

// 10am condition
if (currentT == hour_10_a) {
    $("#10-a .description").addClass("present"); // If currentT matches hour_10_a, uses present color fill
} else if (currentT < hour_10_a) {
    $("#10-a .description").addClass("future"); // If currentT is before hour_10_a, uses future color fill
} else if (currentT > hour_10_a) {
    $("#10-a .description").addClass("past"); // If currentT is after hour_10_a, uses past color fill
}

// 11am condition
if (currentT == hour_11_a) {
    $("#11-a .description").addClass("present"); // If currentT matches hour_11_a, uses present color fill
} else if (currentT < hour_11_a) {
    $("#11-a .description").addClass("future"); // If currentT is before hour_11_a, uses future color fill
} else if (currentT > hour_11_a) {
    $("#11-a .description").addClass("past"); // If currentT is after hour_11_a, uses past color fill
}

// 12pm condition
if (currentT == hour_12_p) {
    $("#12-p .description").addClass("present"); // If currentT matches hour_12_p, uses present color fill
} else if (currentT < hour_12_p) {
    $("#12-p .description").addClass("future"); // If currentT is before hour_12_p, uses future color fill
} else if (currentT > hour_12_p) {
    $("#12-p .description").addClass("past"); // If currentT is after hour_12_p, uses past color fill
}

// 1pm condition
if (currentT == hour_1_p) {
    $("#1-p .description").addClass("present"); // If currentT matches hour_1_p, uses present color fill
} else if (currentT < hour_1_p) {
    $("#1-p .description").addClass("future"); // If currentT is before hour_1_p, uses future color fill
} else if (currentT > hour_1_p) {
    $("#1-p .description").addClass("past"); // If currentT is after hour_1_p, uses past color fill
}

// 2pm condition
if (currentT == hour_2_p) {
    $("#2-p .description").addClass("present"); // If currentT matches hour_2_p, uses present color fill
} else if (currentT < hour_2_p) {
    $("#2-p .description").addClass("future"); // If currentT is before hour_2_p, uses future color fill
} else if (currentT > hour_2_p) {
    $("#2-p .description").addClass("past"); // If currentT is after hour_2_p, uses past color fill
}

// 3pm condition
if (currentT == hour_3_p) {
    $("#3-p .description").addClass("present"); // If currentT matches hour_3_p, uses present color fill
} else if (currentT < hour_3_p) {
    $("#3-p .description").addClass("future"); // If currentT is before hour_3_p, uses future color fill
} else if (currentT > hour_3_p) {
    $("#3-p .description").addClass("past"); // If currentT is after hour_3_p, uses past color fill
}

// 4pm condition
if (currentT == hour_4_p) {
    $("#4-p .description").addClass("present"); // If currentT matches hour_4_p, uses present color fill
} else if (currentT < hour_4_p) {
    $("#4-p .description").addClass("future"); // If currentT is before hour_4_p, uses future color fill
} else if (currentT > hour_4_p) {
    $("#4-p .description").addClass("past"); // If currentT is after hour_4_p, uses past color fill
}

// 5pm condition
if (currentT == hour_5_p) {
    $("#5-p .description").addClass("present"); // If currentT matches hour_5_p, uses present color fill
} else if (currentT < hour_5_p) {
    $("#5-p .description").addClass("future"); // If currentT is before hour_5_p, uses future color fill
} else if (currentT > hour_5_p) {
    $("#5-p .description").addClass("past"); // If currentT is after hour_5_p, uses past color fill
}

// 6pm condition
if (currentT == hour_6_p) {
    $("#6-p .description").addClass("present"); // If currentT matches hour_6_p, uses present color fill
} else if (currentT < hour_6_p) {
    $("#6-p .description").addClass("future"); // If currentT is before hour_6_p, uses future color fill
} else if (currentT > hour_6_p) {
    $("#6-p .description").addClass("past"); // If currentT is after hour_6_p, uses past color fill
}

// 7pm condition
if (currentT == hour_7_p) {
    $("#7-p .description").addClass("present"); // If currentT matches hour_7_p, uses present color fill
} else if (currentT < hour_7_p) {
    $("#7-p .description").addClass("future"); // If currentT is before hour_7_p, uses future color fill
} else if (currentT > hour_7_p) {
    $("#7-p .description").addClass("past"); // If currentT is after hour_7_p, uses past color fill
}

// 8pm condition
if (currentT == hour_8_p) {
    $("#8-p .description").addClass("present"); // If currentT matches hour_8_p, uses present color fill
} else if (currentT < hour_8_p) {
    $("#8-p .description").addClass("future"); // If currentT is before hour_8_p, uses future color fill
} else if (currentT > hour_8_p) {
    $("#8-p .description").addClass("past"); // If currentT is after hour_8_p, uses past color fill
}

// 9pm condition
if (currentT == hour_9_p) {
    $("#9-p .description").addClass("present"); // If currentT matches hour_9_p, uses present color fill
} else if (currentT < hour_9_p) {
    $("#9-p .description").addClass("future"); // If currentT is before hour_9_p, uses future color fill
} else if (currentT > hour_9_p) {
    $("#9-p .description").addClass("past"); // If currentT is after hour_9_p, uses past color fill
}

// 10pm condition
if (currentT == hour_10_p) {
    $("#10-p .description").addClass("present"); // If currentT matches hour_10_p, uses present color fill
} else if (currentT < hour_10_p) {
    $("#10-p .description").addClass("future"); // If currentT is before hour_10_p, uses future color fill
} else if (currentT > hour_10_p) {
    $("#10-p .description").addClass("past"); // If currentT is after hour_10_p, uses past color fill
}

// 11pm condition
if (currentT == hour_11_p) {
    $("#11-p .description").addClass("present"); // If currentT matches hour_11_p, uses present color fill
} else if (currentT < hour_11_p) {
    $("#11-p .description").addClass("future"); // If currentT is before hour_11_p, uses future color fill
} else if (currentT > hour_11_p) {
    $("#11-p .description").addClass("past"); // If currentT is after hour_11_p, uses past color fill
}

// 12am condition
if (currentT == hour_12_a) {
    $("#12-a .description").addClass("present"); // If currentT matches hour_12_a, uses present color fill
} else if (currentT < hour_12_a) {
    $("#12-a .description").addClass("future"); // If currentT is before hour_12_a, uses future color fill
} else if (currentT > hour_12_a) {
    $("#12-a .description").addClass("past"); // If currentT is after hour_12_a, uses past color fill
}