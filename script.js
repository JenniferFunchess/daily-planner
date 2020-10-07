$(document).ready(function () {
  console.log("This is loading!");

  renderPlans();

  var timeBlockContainer = $(".time-block");
  var currentHour = moment().hour();
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

  // This section calls the current time and changes the textarea color
  function hourTracker() {
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour, currentHour);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  hourTracker();
  //This section calls for the save button to save content to Local Storage
  // $("#saveIcon1").on("click", function () {
  //   console.log(this);
  //   var text = $("#Row9").val().trim();
  //   var time = $("#nine").attr("id");
  //   localStorage.setItem(time, text);
  //   console.log(localStorage);
  // });

  $(".saveBtn").on("click", function () {
    var hour = $(this).attr("data-hour");
    var plan = $("#" + hour + "Row").val();
    localStorage.setItem(hour, plan);
  });

  function renderPlans() {
    for (var i = 1; i <= 12; i++) {
      $("#" + i + "Row").val(localStorage.getItem(i));
    }
  }
  //EVENT LISTENERS
});
