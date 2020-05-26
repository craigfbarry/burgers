$(document).ready(function() {
  //const burgerContainer = $(".burgers");
  const newBurgerInput = $("#burgerInput")
  let burgers = []

    getBurgers();

    $(".new-item").on("click",function createBurger(){
      event.preventDefault();
      let newBurger = {
        burger_name: newBurgerInput.val().trim(),
        devoured: false
      };
  
      $.post("/api/burgers", newBurger, getBurgers);
      newBurgerInput.val("");
    
    }
    )



   function getBurgers() {
   
        $.get("/api/burgers", function(data) {
          console.log("getting burger data from API")
         
        });
      }

/*
      function updateBurgers(todo) {
        $.ajax({
          method: "PUT",
          url: "/api/burgers",
          data: todo
        }).then(getBurgers);
      }
    */



});