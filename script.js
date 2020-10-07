$(document).ready(function () {
  console.log("This is loading!");

  //DOM VARIABLES

  $("#saveIcon1").on("click", function () {
    console.log(this);
    var text = $("#Row9").val().trim();
    var time = $("#nine").attr("id");
    localStorage.setItem(time, text);
    console.log(localStorage);
  });
  //EVENT LISTENERS
});
