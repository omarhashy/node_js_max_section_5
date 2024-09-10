const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extende: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404);
  res.send("<h1> Page not fiend</h1>");
});

app.listen(3000);
