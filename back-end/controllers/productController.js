const express = require("express");
const products = express.Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../queries/products.js");

// const { checkName, checkFeatured } = require("../validations/checkProducts.js");

const reviewsController = require("./reviewsController.js");

products.use("/:productId/reviews", reviewsController);

products.get("/", async (req, res) => {
  try {
    const allProducts = await getAllProducts();
    if (allProducts[0]) {
      res.status(200).json(allProducts);
    } else {
      res.status(500).json({ error: "Server Error" });
    }
  } catch (err) {
    console.log(err);
  }
});

products.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProduct(id);
    if (product.id) {
      res.status(200).json(product);
    } else {
      res.status(500).json({ error: "Product Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
});

products.post("/", async (req, res) => {
  const { body } = req;
  // const { name, url, is_featured } = req.body;
  // if(!name || !url)
  try {
    const createdProduct = await createProduct(body);
    if (createdProduct.id) {
      res.status(200).json(createdProduct);
    } else {
      res.status(500).json({ error: "Product Creation Error" });
    }
  } catch (err) {
    console.log(err);
  }
});

products.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await deleteProduct(id);
  if (deletedProduct.id) {
    res.status(200).json(deletedProduct);
  } else {
    res.status(404).json({ error: "Product Not Found" });
  }
});

products.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedProduct = await updateProduct(id, body);
  if (updatedProduct.id) {
    res.status(200).json(updatedProduct);
  } else {
    res.status(404).json({ error: "Product Not Found" });
  }
});

module.exports = products;
