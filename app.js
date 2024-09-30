const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// const db = require("./util/database");
// db.execute("SELECT * FROM products")
//   .then((result) => {
//     console.log(result[0]);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const errorController = require("./controllers/error");

const app = express();

//Set a default templating engine
app.set("view engine", "ejs");
//Set a default views folder
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(8000);
