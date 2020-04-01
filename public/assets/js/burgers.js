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

  $('.devour-it').on('click', (event) => {
    // console.log( $(this).detach() );

    // let burger = $(this).parent().parent().detach();
    // console.log(burger);

    // console.log( $('.burger-card-whole').attr('data-burger') );
    

    // let selectedId = $('.burger-card-whole').attr('data-burger');
    let selectedId = $(this);
    var offset = $(this);

    console.log(event);
    // console.log(event.target);
    console.log(event.target.offsetParent);

    // detach?
    let card = event.target.offsetParent;

   $(".right-container").prepend(card);

    //$("ul").find(`[data-slide='${current}']`)
    // $(event.target).remove();
    
    
    
    // console.log(selectedId);
    
    // let card = $("div[data-burger|='1']").detach();
    // let c ard = $(`div[data-burger|=${formSubmitted}]`).detach();

    // console.log(card);
    

    

    
    // let burgerCard = $('.burger-card-whole').detach();
    // console.log(burgerCard);
    
  });
  


  //end of document ready
});
