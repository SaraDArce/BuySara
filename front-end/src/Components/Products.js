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
    <div className="Products">
      <div id="productsContainer">
        <section>
          {/* <table> */}
            <thead>
              <tr>
                <th></th>
                {/* <th>View</th>
                <th>Edit</th> */}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                 <div>
                    <Product key={product.id} product={product} />
                 </div>
                );
              })}
            </tbody>
          {/* </table> */}
        </section>
      </div>
    </div>
  );
}

export default Products;
