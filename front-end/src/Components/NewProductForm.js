import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewProductForm() {
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    url: "",
    description: "",
    price: Number,
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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={product.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Product Name"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          //   pattern="http[s]*://.+"
          //   required
          value={product.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={product.description}
          placeholder="product description"
          onChange={handleTextChange}
        />
        <label htmlFor="is_featured">Featured:</label>
        <input
          id="is_featured"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={product.is_featured}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewProductForm;
