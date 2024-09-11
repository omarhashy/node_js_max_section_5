const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

const app = express();

//Set a default templating engine
app.set("view engine", "ejs");
//Set a default views folder
app.set("views", "views");

app.use(bodyParser.urlencoded({ extende: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(8000);
