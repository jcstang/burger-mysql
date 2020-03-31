$(document).ready(function() {
  console.log('ready!');

  let formSubmitted = false;

  $(".burger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    if(!formSubmitted) {
      let newBurger = {
        name: $('#burgerInput').val().trim(),
        hasBeenEaten: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      })
      .then(function(data) {
        console.log("created new burger ");
        // console.log(data);
        
        // Reload the page to get the updated list
        location.reload();
      });

      formSubmitted = true;
    }

  });

  // devour btn clicked
  // =================================================
  // TODO: remove from left
  // TODO: add to the right. $().detach()
  


  //end of document ready
});
