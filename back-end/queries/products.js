const db = require("../db/dbConfig.js");

const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    return allProducts;
  } catch (err) {
    return err;
  }
};

const getProduct = async (id) => {
  try {
    const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", id);
    return oneProduct;
  } catch (err) {
    return err;
  }
};

const createProduct = async (product) => {
  try {
    const newProduct = await db.one(
      "INSERT INTO products (name, url, description, price, is_featured) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        product.name,
        product.url,
        product.description,
        product.price,
        product.is_featured,
      ]
    );
    return newProduct;
  } catch (err) {
    return err;
  }
};

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await db.one(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      id
    );
    return deletedProduct;
  } catch (err) {
    return err;
  }
};

const updateProduct = async (id, product) => {
  try {
    const updatedProduct = await db.one(
      "UPDATE products SET name=$1, url=$2, description=$3, price=$4, is_featured=$5 WHERE id=$6 RETURNING *",
      [
        product.name,
        product.url,
        product.description,
        product.price,
        product.is_featured,
        id,
      ]
    );
    return updatedProduct;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
