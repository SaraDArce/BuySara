import axios from "axios";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewProductForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    url: "",
    description: "",
    price: "",
    is_featured: false,
  });

  const addProduct = () => {
    axios
      .post(`${API}/products`, product)
      .then(
        () => {
          navigate(`/products`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setProduct({ ...product, is_featured: !product.is_featured });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label htmlFor="name">Name:</label>
          <input
            // className="input-sm"
            id="name"
            value={product.name}
            type="text"
            onChange={handleTextChange}
          />
          <br></br>
          <br></br>
          <label htmlFor="url">URL:</label>
          <input
            // className="input-sm"
            id="url"
            type="text"
            pattern="http[s]*://.+"
            required
            value={product.url}
            placeholder="http://"
            onChange={handleTextChange}
          />
          <br></br>
          <br></br>
          <label htmlFor="description">Description:</label>
          <input
            // className="input-sm"
            id="description"
            type="text"
            name="description"
            value={product.description}
            placeholder="product description"
            onChange={handleTextChange}
          />
          <br></br>
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            className="editPrice"
            type="number"
            value={product.price}
            onChange={handleTextChange}
          />
          <br></br>
          <br></br>
          <label htmlFor="is_featured">Featured:</label>
          <input
            // className="input-sm"
            id="is_featured"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={product.is_featured}
          />
          <br></br>
          <br></br>
          <input type="submit" class="btn btn-lg btn-primary" />
          <br></br>
          <Link to={`/products/${id}`}>
            <br></br>
            <button type="button" class="btn btn-sm btn-danger">
              Cancel Request
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default NewProductForm;
