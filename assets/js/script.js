// display the current date within the jumbotron
var date = document.getElementById("currentDay");
date.textContent = moment().format("dddd, MMMM Do YYYY");

// get & set task to local storage; assign styling to tasks to indicate past, present, or future:

// get local storage
$(document).ready(function() {
  for (i = 9; i < 18; i++) {
    var currentHour = "" + i + "";
    var currentHourText = localStorage.getItem(currentHour);
    if (currentHourText) {
      document.getElementById(currentHour).textContent = currentHourText;
      console.log(currentHourText);
    }

    // assign styling to tasks to indicate past, present, or future:

    // get current time from task element
    var hourCheck = (moment().hour())
    // apply new class if task is in the past or present
    if (currentHour <= hourCheck) {
      if (currentHour = hourCheck) {
        document.getElementById(currentHour).classList.add("present");
      } else {
        document.getElementById(currentHour).classList.add("past");
      }
    // apply new class if task is in the future
    } else {
        document.getElementById(currentHour).classList.add("future");
      }
  };
  // set local storage
  // select the save button
    var saveButton = $(".saveBtn")
    // add event listener
    saveButton.on("click", function(event) {
        event.preventDefault();
        // get user input from html
        var userTask = $(this).siblings("textarea").val();
        var hour = $(this).siblings("textarea").attr("id");
        // save task to local storage
        localStorage.setItem(hour, userTask);
    });
});