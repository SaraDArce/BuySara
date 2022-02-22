import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <tr>
      <td>
        {product.is_featured ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={product.url} target="_blank" rel="noreferrer">
          {product.name}
        </a>
      </td>
      <td>
        <Link to={`/products/${product.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Product;
