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

  // This section calls the current time and changes the textarea color

  function hourTracker() {
    var currentHour = moment().hours();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        console.log(blockHour, "past");
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        console.log(blockHour, "present");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        console.log(blockHour, "future");
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  hourTracker();

  //EVENT LISTENERS

  $(".saveBtn").on("click", function () {
    var hour = $(this).attr("data-hour");
    var textNine = $("#Row-9").val().trim();
    var textTen = $("#Row-10").val().trim();
    var textEleven = $("#Row-11").val().trim();
    var textTwelve = $("#Row-12").val().trim();
    var textThirteen = $("#Row-13").val().trim();
    var textFourteen = $("#Row-14").val().trim();
    var textFifteen = $("#Row-15").val().trim();
    var textSixteen = $("#Row-16").val().trim();
    var textSeventeen = $("#Row-17").val().trim();
    localStorage.setItem(
      hour,
      textNine,
      textTen,
      textEleven,
      textTwelve,
      textThirteen,
      textFourteen,
      textFifteen,
      textSixteen,
      textSeventeen
    );
    console.log(
      hour,
      textNine,
      textTen,
      textEleven,
      textTwelve,
      textThirteen,
      textFourteen,
      textFifteen,
      textSixteen,
      textSeventeen
    );
  });

  $("#Row-9").val(localStorage.getItem("9"));
  $("#Row-10").val(localStorage.getItem("10"));
  $("#Row-11").val(localStorage.getItem("11"));
  $("#Row-12").val(localStorage.getItem("12"));
  $("#Row-13").val(localStorage.getItem("1"));
  $("#Row-14").val(localStorage.getItem("2"));
  $("#Row-15").val(localStorage.getItem("3"));
  $("#Row-16").val(localStorage.getItem("4"));
  $("#Row-17").val(localStorage.getItem("5"));
});
