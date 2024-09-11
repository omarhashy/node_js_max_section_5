const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {

  res.render("shop", {
    hasProducts: products.length > 0,
    activeShop: true,
    path: "/",
    prods: products,
    pageTitle: "Shop",
    productCSS: true,
  });
};
