import axios from "axios";
import { useState, useEffect } from "react";
import products from "../../../back-end/controllers/productController";
import Product from "./Product";
import { Component } from "react";

const API = process.env.REACT_APP_API_URL;

class ProductCard extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="prodCard">
        {/* <h4 id="name">${product.name}</h4>
        <span>
         <h4 id="price">${product.price}</h4>
        </span> */}
        <button>Add to Cart</button>
      </div>
    );
  }
}

export default ProductCard;
