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
      location.reload();
      }
    )


/*
    $(".devour").on("click",function updateBurger()
    {let id =$(this).data("id");
      $.ajax("/api/burgers/" + id{
        method: "PUT",
        url: "/api/burgers/id",
        data: devoured
      }).then(getBurgers);
    }
*/


   function getBurgers() {
   
        $.get("/api/burgers", function(data) {
          console.log("getting burger data from API")
         
        });
      }





});