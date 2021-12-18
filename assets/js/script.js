var tasks = {};

// get & set task to local storage
$(document).ready(function() {
  for (i = 9; i < 18; i++) {
    var currentHour = "" + i + "";
    var currentHourText = localStorage.getItem(currentHour);
    if (currentHourText) {
      document.getElementById(currentHour).textContent = currentHourText;
      console.log(currentHourText);
    }
  };
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

// pull tasks from local storage

// display the current date
var date = document.getElementById("currentDay");
date.textContent = moment().format("dddd, MMMM Do YYYY");

// check if current time is in the past, present, or future

  // get date from task element

  // remove any old classes from element

  // apply new class if task is over due date
//   if
//   } else if
// };

  // loop over object properties