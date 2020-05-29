$(document).ready(function() {
  //const burgerContainer = $(".burgers");
  const newBurgerInput = $("#burgerInput")
  

    getBurgers();

    $(".new-item").on("click",function createBurger(){
      event.preventDefault();
      let newBurger = {
        burger_name: newBurgerInput.val().trim(),
        devoured: false
      };
  
      $.post("/api/burgers", newBurger, getBurgers).then(function(){
        newBurgerInput.val("");
        location.reload();
      });
    })



    $(".devour").on("click",function updateBurger()
    {
      event.preventDefault();
      let id =$(this).data("id");
      $.ajax({
        method: "PUT",
        url: "/api/burgers/",
        data: devoured
      }).then(location.reload());
    })



   function getBurgers() {
   
        $.get("/api/burgers", function(data) {
          console.log("getting burger data from API")
         
        });
      }





});