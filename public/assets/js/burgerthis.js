$(function() {
    $("#add-burger").on("click", function(event){
        var option = $("#option").val();

        console.log(option)

        alert(option)
        
        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: option
          };
      
          // Send the POST request.
          $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
            }
          );
    });

    $(".eat-me").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        var option = true;

        var burgerState = {
            devoured: option
          };

          $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerState
          }).then(
            function() {
              console.log("changed eaten to", option);
              // Reload the page to get the updated list
              location.reload();
            }
          );
    })

    $(".un-eat-me").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        var option = false;

        var burgerState = {
            devoured: option
          };

          $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerState
          }).then(
            function() {
              console.log("changed eaten to", option);
              // Reload the page to get the updated list
              location.reload();
            }
          );
    })
})