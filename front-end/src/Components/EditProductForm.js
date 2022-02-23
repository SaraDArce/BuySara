import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function EditProductForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    url: "",
    description: "",
    is_featured: false,
  });

  const updateProduct = (updatedProduct) => {
    axios
      .put(`${API}/products/${id}`, updatedProduct)
      .then(
        () => {
          navigate(`/products/${id}`);
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

  useEffect(() => {
    axios.get(`${API}/products/${id}`).then(
      (response) => setProduct(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(product, id);
  };
  return (
    <div className="Edit">
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
          pattern="http[s]*://.+"
          required
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
          placeholder="Enter Product Description"
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
      <Link to={`/products/${id}`}>
        <button>Cancel Request</button>
      </Link>
    </div>
  );
}

export default EditProductForm;
