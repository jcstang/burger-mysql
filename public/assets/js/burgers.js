$(document).ready(function() {
  console.log('ready!');
  
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
  
    let newBurger = {
      name: $('#burgerInput').val().trim(),
      hasBeenEaten: false
    };
  
    console.log(newBurger);
    

  });


  //end of document ready
});
