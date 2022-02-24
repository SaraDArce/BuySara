import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav">
    <nav>
      <ul>
        <li>
          {/* <a href="homepage.asp"> */}
            <h1>
              <Link to="/">Buy SARA</Link>
            </h1>
          {/* </a> */}
        </li>
        <li>
          {/* <a href="products.asp"> */}
            <h3>
              <Link to="/products">Products</Link>
            </h3>
          {/* </a> */}
        </li>
        <li>
          <button>
            <Link to="/products/new">Enter New Product</Link>
          </button>
        </li>
      </ul>
      <br></br>
      <br></br>
    </nav>
  </div>
  );
}
