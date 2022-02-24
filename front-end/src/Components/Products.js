import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";

const API = process.env.REACT_APP_API_URL;

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(API + "/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-sm">
      <div id="productsContainer">
        {products.map((product) => {
          return (
            <div className="prodDisp">
              <Product key={product.id} product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
