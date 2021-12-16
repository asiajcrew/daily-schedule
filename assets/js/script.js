$(document).ready(function() {
    // select the save button
    var saveButton = $(".saveBtn")
    // add event listener
    saveButton.on("click", function(event) {
        event.preventDefault();
        var userTask = $(this).siblings("textarea").val();
        var hour = $(this).siblings("textarea").attr("id");
        localStorage.setItem(hour, userTask);

    });
    // get user input from html
    // save task to local storage

})

// display the current date
var weekday = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var day = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"]
var date = new Date();

let currentDay = weekday[date.getDay()];
let currentMonth = month[date.getMonth()];
let currentDate = day[date.getDate()];
document.getElementById("currentDay").innerHTML = currentDay + ", " + currentMonth + " " + currentDate;