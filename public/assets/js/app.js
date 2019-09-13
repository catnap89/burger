// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  // Add a new burger.
  $(".create-form").on("submit", function(event) {  // When .create-form  is submitted by clicking addburger button is clicked
    event.preventDefault();

    var newBurger = {  // newBurger object with burger_name and devoured (0 = false / 1 = true)
      burger_name: $("#newburger").val().trim(),  //req.body.burger_name
      devoured: 0                                 // req.body.devoured
    };

    // Send the POST request.
    $.ajax("/api/burgers", { // POST to /api/burgers
      type: "POST",
      data: newBurger      // with newBurger data
    }).then(function(response) {
      console.log(response)// <-- this will be the {id: result.insertId, message: "Success"} object. What is this for?
      console.log("Added new burger");
      // Reload the page to get the updated burger list.
      location.reload();
    });
  });

  $(".eatburger").on("click", function(event) {  // update devoured (objColVal) to true on clicking .eatburger button
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
        devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
    }).then(function() {
        console.log("Burger devoured");
        location.reload();
    });
  });

  $(".trashburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
    }).then(location.reload());
  });

})