const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  //   console.log("in another mid");
  //   res.send("<h1>Hello from express</h1>");
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  console.log(adminData.products);

  res.render("shop", { prods: products, pageTitle: "Shop" });
});

module.exports = router;
