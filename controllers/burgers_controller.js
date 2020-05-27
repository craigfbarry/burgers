//Controller code to set up end points


const db = require("../models");
module.exports = function(app){
//Required to render handlebars templates as index,html.

      

//GET route
    app.get("/",function(req,res){
        db.Burger.findAll().then(function(burgers){
            console.log(burgers);
            res.render("index",{burgers});
            });
    });

//POST route
    app.post("/api/burgers",function(req,res){
        console.log("create stuff")
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: 0
        }).then(function(burgers){
            res.json(burgers);
        });
    });

//UPDATE route

    app.put("/api/burgers",function(req,res){
        console.log("update stuff")
        db.Burger.update({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        },{
          where: {
            id: req.body.id
          }  
        }).then(function(burgers){
            res.json(burgers);
        });
    });
};


