$(document).ready(function() {
  //const burgerContainer = $(".burgers");
  const newBurgerInput = $("#burgerInput")


    getBurgers();

    $(".new-item").on("click",function createBurger(){
      console.log("try to add burger")
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
          console.log("getting burgers with api call")
          //console.log(data);
        });
      }
/*
    function createBurger(event){
      event.preventDefault();
      let newBurger = {
        text: $newItemInput.val().trim(),
        complete: false
      };
  
      $.post("/api/burgers", newBurger, getBurgers);
      $newBurgerInput.val("");
    }
 */    
      
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