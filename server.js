//Dependencies.
const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");
//Configure port to serve HTML.
const PORT = process.env.PORT||8080


//Set up Express middleware and static hosting.

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));
app.use(express.static("./views/layouts"));


//Set up express handlebars.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Set up the routes controller.
require("./controllers/burgers_controller.js")(app);

//Start server by listening on PORT.


  db.sequelize.sync({force:true}).then(function(){
    app.listen(PORT, function() {
      // Log (server-side) when our server has started
      console.log("Server listening on: http://localhost:" + PORT);
    });
    

  })