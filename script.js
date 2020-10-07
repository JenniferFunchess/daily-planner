$(document).ready(function () {
  console.log("This is loading!");

  var timeBlockContainer = $(".time-block");
  var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var workHours = [
    "nine",
    "ten",
    "eleven",
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
  ];
  // This section calls the current date to the Jumbotron
  var today = new Date();
  console.log(new Date());

  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  console.log(date);

  $("#currentDay").append(new Date());

  // This section calls the current time and changes the hour colors
  // for (var i = 0; i < workHours.length; i++){
  //   var rowTimeEl = $("<div>").addClass("row time-block");
  //   var rowHourEl = $("<div>").attr("id",workHours[i]);
  //   var textInput = $("<input>").addClass("col-sm-10");

  //   rowTimeEl.append(rowHourEl,textInput);
  //   timeBlockContainer.append(rowTimeEl);
  //   rowHourEl.text(workHours[i]);

  //   if (militaryHours[i] < currentHour) {
  //     textInput.addClass("past");
  //   }
  //   else if (militaryHours[i] > currentHour) {
  //     textInput.addClass("future");
  //   }
  //   else (militaryHours[i] == currentHour) {
  //     textInput.addClass("present");

  // }}

  function hourTracker() {
    //get current number of hours.
    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour, currentHour);

      //check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("past");
        // $(this).removeClass("future");
        // $(this).removeClass("present");
      } else if (blockHour === currentHour) {
        // $(this).removeClass("past");
        $(this).addClass("present");
        // $(this).removeClass("future");
      } else {
        // $(this).removeClass("present");
        // $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
  hourTracker();
  //This section calls for the save button to save content to Local Storage
  $("#saveIcon1").on("click", function () {
    console.log(this);
    var text = $("#Row9").val().trim();
    var time = $("#nine").attr("id");
    localStorage.setItem(time, text);
    console.log(localStorage);
  });
  //EVENT LISTENERS
});
