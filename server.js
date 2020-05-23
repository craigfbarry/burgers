//Dependencies.
const express = require("express");


//Configure port to serve HTML.
const PORT = process.env.PORT||8080


//Set up Express middleware and static hosting.

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

//Set up express handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Set up the routes controller.
require("./controllers/burgers_controller.js")(app);


console.log("test");
//Start server by listening on PORT.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  