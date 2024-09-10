// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extende: false }));

// app.use((req, res, next) => {
//   console.log("in the mid");
//   next();
// });

// app.use("/", (req, res, next) => {
//   next();
// });

app.use("/add-product", (req, res, next) => {
  //   console.log("in another mid");
  res.send(
    "<form action = '/product' method = 'POST'><input type = 'text' name = 'title'> <button type = 'submit'>Add Product</button></form>"
  );
  //   next();
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  //   console.log("in another mid");
  res.send("<h1>Hello from express</h1>");
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
