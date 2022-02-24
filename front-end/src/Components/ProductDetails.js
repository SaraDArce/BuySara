import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import Reviews from "./Reviews";

const API = process.env.REACT_APP_API_URL;

function ProductDetails() {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API + "/products/" + id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, API]);

  const handleDelete = () => {
    axios
      .delete(API + "/products/" + id)
      .then((res) => {
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <article>
      <div className="prodCard">
        <h2 id="name">{product.name}</h2>
        <img src={product.url} alt="No Image Provided" />
        <span>
          <h4 id="price">${product.price}</h4>
        </span>
        <p id="description">{product.description}</p>
        {product.is_featured ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
        <Link to={`/products/${product.id}`}>✏️</Link>
        <div className="showNavigation">
          <div>
            <Link to={`/products`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/products/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
      {/* <Reviews /> */}
    </article>
  );
}

export default ProductDetails;
