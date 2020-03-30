$(document).ready(function() {
  console.log('ready!');
  
  $(".burger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
  
    let newBurger = {
      name: $('#burgerInput').val().trim(),
      hasBeenEaten: false
    };
  
    console.log(newBurger);
    // TODO: save to DB?
    // TODO: create card on the left
    

  });

  function loadBurgers() {
    
  }


  //end of document ready
});
