//Controller code to set up end points


const db = require("../models");
module.exports = function(app){
//Required to render handlebars templates as index,html.
    app.get('/', function (req, res) {
        res.render('index');
      });
      

//GET route
    app.get("/api/burgers",function(req,res){
        console.log("get stuff")
        db.Burger.findAll().then(function(results){
            console.log(results);
            res.json(results);
        });
    });

//POST route
    app.post("/api/burgers",function(req,res){
        console.log("create stuff")
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(dbBurger){
            res.json(dbBurger);
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
        }).then(function(dbBurger){
            res.json(dbBurger)
        });
    });
};


