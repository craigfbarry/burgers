$(document).ready(function() {
  const burgerContainer = $(".burgers");

    getBurgers();

    function getBurgers() {
        $.get("/api/burgers", function(data) {
          console.log("getting burgers with api call")
          //console.log(data);
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