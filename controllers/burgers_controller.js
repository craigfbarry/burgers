//Controller code to set up end points


const db = require("../models");
module.exports = function(app){

//GET route
    app.GET("api/burgers",function(req,res){
        db.Burger.findall({}).then(function(dbBurger){
            res.json(dbBurger);
        });
    });

//POST route
    app.POST("api/burgers",function(req,res){
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(dbBurger){
            res.json(dbBurger);
        });
    });

//UPDATE route

    app.UPDATE("api/burgers",function(req,res){
        db.Burger.update({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        },{
          where: {
            id: req.body.id
          }  
        }).then(function(dbBurger){
            res.json(dbBurger)
        });
    });
}


// Export routes.
module.exports = router;