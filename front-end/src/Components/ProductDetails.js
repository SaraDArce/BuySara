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
      <h3>
        {true ? <span>⭐️</span> : null} {product.name}
      </h3>
      <h5>
        <span>
          <a href={product.url}>{product.name}</a>
        </span>
        <img src={product.url} alt="No Image Provided" />
      </h5>
      <p>{product.description}</p>
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
      {/* <Reviews /> */}
    </article>
  );
}

export default ProductDetails;
