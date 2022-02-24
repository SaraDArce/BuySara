import { Link } from "react-router-dom";

function Product({ product }) {
  return (
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
    </div>
  );
}

export default Product;
